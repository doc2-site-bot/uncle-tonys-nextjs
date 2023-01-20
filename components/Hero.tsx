import { toH } from 'hast-to-hyperscript';
import { createElement } from 'react';
import Image from 'next/image';
import { Element } from 'hast';
import { h } from 'hastscript';

function Hero({ hast }: { hast: Element }) {
  let index = 0;

  return (
    <div className="prose lg:prose-xl text-center bg-red-900 mx-auto py-4 my-16 rounded-md drop-shadow-lg">
      <div className="max-w-screen-lg">
        {toH((name, properties, children) => {
          index++;

          if (name === 'img') {
            return (
              // Since images are contained in P, don't use DIV else you end up with P > DIV > IMG
              // which will throw a hydration miss match see https://nextjs.org/docs/messages/react-hydration-error
              <span key={index} className="block relative overflow-hidden h-[600px]">
                <Image
                  src={properties.src}
                  fill={true}
                  priority={true}
                  alt={properties.alt}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </span>
            );
          }

          return createElement(name, properties, children);
        }, h('div', ...hast.children))}
      </div>
    </div>
  );
}

export default Hero;
