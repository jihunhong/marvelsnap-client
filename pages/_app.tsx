import { client } from '@query/index';
import { GlobalStyle } from '@styles/globals';
import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import AppLayout from 'src/@components/@layout/AppLayout';


function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
