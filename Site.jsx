import Document, { Html, Head, Main, NextScript } from 'next/document';

import developmentGrid from 'styles/developmentGrid';

import segmentSnippet from 'lib/utils/segment';

class Site extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Bodoni/Bodoni_BE_Light_Italic_Oldstyle.otf"
            as="font"
            type="font/otf"
            crossOrigin
          />
          <link
            rel="preload"
            href="/fonts/CenturyGothic/CenturyGothic-Bold.otf"
            as="font"
            type="font/otf"
            crossOrigin
          />
          <link
            rel="preload"
            href="/fonts/CenturyGothic/CenturyGothic-BoldItalic.otf"
            as="font"
            type="font/otf"
            crossOrigin
          />
          <link
            rel="preload"
            href="/fonts/CenturyGothic/CenturyGothic-Italic.otf"
            as="font"
            type="font/otf"
            crossOrigin
          />
          <link
            rel="preload"
            href="/fonts/CenturyGothic/CenturyGothic-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <style>{developmentGrid()}</style>
        <body>
          <Main />
          <NextScript />
          {(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') && (
            <script key="plugin-segment" dangerouslySetInnerHTML={{ __html: segmentSnippet }} />
          )}
        </body>
      </Html>
    );
  }
}

export default Site;
