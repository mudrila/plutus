import createEmotionServer from '@emotion/server/create-instance';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import theme, { inknutAntiqua } from '../theme';
import createEmotionCache from '../theme/createEmotionCache';

export default class Document extends NextDocument {
  render() {
    return (
      <Html
        lang="en"
        className={inknutAntiqua.className}
      >
        <Head>
          <meta
            name="theme-color"
            content={theme.palette.primary.main}
          />
          <link
            rel="shortcut icon"
            href="/assets/favicon.ico"
          />
          <meta
            name="emotion-insertion-point"
            content=""
          />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async ctx => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return (
            <App
              emotionCache={cache}
              {...props}
            />
          );
        },
    });

  const initialProps = await NextDocument.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
