import { select, selectAll } from 'hast-util-select';
import { toText } from 'hast-util-to-text';
import Link from 'next/link';
import { Root } from 'hast';
import Image from 'next/image';

function Header({ hast }: { hast: Root | undefined }) {
  if (!hast) {
    return null;
  }

  const logo = select('img', hast);
  const links = selectAll('a', hast);

  return (
    <header className="flex items-center justify-center gap-4 py-2 flex-wrap">
      {logo?.properties && (
        <Image
          className="md:ml-[-115px]"
          src={String(logo.properties.src || '')}
          height={115}
          width={115}
          priority={true}
          alt={String(logo.properties.alt || '')}
        />
      )}

      <nav className="flex items-center">
        {links.map((link, index) => {
          const href = String(link?.properties?.href || '');

          return (
            <Link className="text-xl font-bold text-red-700 px-8" key={index} href={href}>
              {toText(link)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
