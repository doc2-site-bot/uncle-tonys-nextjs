import { selectAll } from 'hast-util-select';
import { toText } from 'hast-util-to-text';
import Link from 'next/link';
import { Root } from 'hast';

function Header({ hast }: { hast: Root | undefined }) {
  if (!hast) {
    return null;
  }

  const links = selectAll('a', hast);

  return (
    <header className="flex h-32 items-center justify-center gap-4">
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
