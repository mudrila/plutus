import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import theme from '../theme';
import createEmotionCache from '../theme/createEmotionCache';
import { INITIAL_STORE_STATE, StoreContext } from '@/store';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StoreContext.Provider value={INITIAL_STORE_STATE}>
          <Component {...pageProps} />
        </StoreContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}
