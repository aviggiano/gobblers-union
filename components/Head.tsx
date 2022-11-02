import NextHead from "next/head";
export const title = "Gobbler's Union";
export const subtitle = "A united front of Art Gobbler";
export const description =
  "A united front of Art Gobbler's - tired of years of oppression in the art factories of the world. The Art Gobbler's Union works together to acquire Art Gobbler's. By pooling Gobbler's the Union can acquire enough $GOO to buy more Gobbler's and Blank Pages faster than individuals.";
const url = "https://gobblers-union.vercel.app";
const image = `${url}/images/logo.png`;

export default function Head() {
  return (
    <NextHead>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="robots" content="all" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <title>{title}</title>
    </NextHead>
  );
}
