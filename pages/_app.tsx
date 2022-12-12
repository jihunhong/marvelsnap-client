import type { AppProps } from 'next/app';
import { GlobalStyle } from '../src/styles/globals';
import AppLayout from '../src/components/@layout/AppLayout';

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
