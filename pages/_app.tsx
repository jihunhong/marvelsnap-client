import AppLayout from 'src/@components/@layout/AppLayout';
import { GlobalStyle } from '@styles/globals';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default App;
