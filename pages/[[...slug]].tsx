import Head from 'next/head';
import { select } from 'hast-util-select';

import { resolveReferences, getWorkspace, getFetchOptions } from '../utils';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

import { GetServerSidePropsResult, GetServerSidePropsContext } from 'next/types';
import { Root } from 'hast';

type PageProps = {
  meta?: { [key: string]: string };
  hast?: Root;
  refs?: ResolvedReference;
  components?: string[];
};

const workspace = getWorkspace();

/**
 * Default page with main layout
 */
function Page({ meta, hast, refs, components }: PageProps) {
  // Query header and footer
  let header, footer;
  if (refs) {
    const [headerDocument, footerDocument] = ['web-header', 'web-footer'].map((name) => {
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
  params
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<PageProps>> {
  // Resolve path
  let path = '/';
  const slug = params?.slug && Array.isArray(params.slug) ? params.slug : [];
  if (slug.length) {
    path = `${path}${slug.join('/')}`;
    if (path === '/index') {
      path = '/';
    }
  }

  // Ignore fragments
  if (path.startsWith('/fragments/')) {
    return {
      notFound: true
    };
  }

  // Fetch page props
  const reqDoc = await fetch(
    `https://api.doc2.site/v1/docs/${workspace}/${process.env.project}?path=${path}`,
    getFetchOptions(workspace)
  );

  if (!reqDoc.ok) {
    return {
      notFound: true
    };
  }

  const doc: Document = await reqDoc.json();
  const { meta, hast, components, references } = doc;
  const refs = references ? await resolveReferences(references, workspace) : undefined;

  return {
    props: {
      meta,
      hast,
      refs,
      components
    }
  };
}

export const config = {
  runtime: 'experimental-edge'
};

export default Page;
