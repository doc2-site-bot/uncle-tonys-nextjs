import Head from 'next/head';
import { select } from 'hast-util-select';

import { resolveReferences } from '../utils';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { GetServerSidePropsResult, GetServerSidePropsContext } from 'next/types';
import { Root } from 'hast';

type PageParams = {
  meta?: { [key: string]: string };
  hast?: Root;
  refs?: Reference;
  components?: string[];
};

const workspace = process.env.NODE_ENV === 'production' ? 'live' : 'preview';

/**
 * Default page with main layout
 */
function Page({ meta, hast, refs, components }: PageParams) {
  let header, footer;
  if (refs) {
    const [headerDocument, footerDocument] = ['header', 'footer'].map((name) => {
      const element = select(name, hast);

      if (element?.properties?.reference) {
        return refs[String(element.properties.reference)];
      }
    });

    header = headerDocument;
    footer = footerDocument;
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Head>

      <Header hast={header?.hast} />

      <Main hast={hast} refs={refs} components={components} />

      <Footer hast={footer?.hast} />
    </>
  );
}

/**
 * Retrieve document by path and resolve references
 */
export async function getServerSideProps({
  params,
  res
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<PageParams>> {
  let path = '/';
  const slug = params?.slug && Array.isArray(params.slug) ? params.slug : [];
  if (slug.length) {
    path = `${path}${slug.join('/')}`;
    if (path === '/index') {
      path = '/';
    }
  }

  const reqDoc = await fetch(`https://api.doc2.site/v1/docs/${workspace}/${process.env.project}?path=${path}`);

  if (!reqDoc.ok) {
    return {
      notFound: true
    };
  }

  const doc: Document = await reqDoc.json();

  const { meta, hast, components, references } = doc;

  const refs = references ? await resolveReferences(references) : undefined;

  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  return {
    props: {
      meta,
      hast,
      refs,
      components
    }
  };
}

export default Page;
