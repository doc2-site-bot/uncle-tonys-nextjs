import { toH } from "hast-to-hyperscript";
import { createElement } from "react";
import { h } from "hastscript";
import { Element } from "hast";
import { useRouter } from "next/router";

function Contact({ hast }: { hast: Element }) {
  const router = useRouter();
  const mapsAddress = String(hast?.properties?.address || "");

  return (
    <div className="mx-auto py-16 prose lg:prose-xl text-center">
      {toH(createElement, h("div", ...hast.children))}

      {router.asPath !== "/" && mapsAddress && (
        <div
          className={`relative h-0 pb-[56.25%] overflow-hidden max-w-screen-md my-16 not-prose`}
        >
          <iframe
            title="Maps"
            className="absolute top-0 left-0 h-full w-full border-0"
            width="500"
            height="500"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              process.env.mapsKey
            }&q=${mapsAddress.replaceAll(" ", "+")}`}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}

export default Contact;
