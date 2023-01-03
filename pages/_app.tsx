import { GlobalStyle } from '@styles/globals';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import AppLayout from 'src/@components/@layout/AppLayout';
import { RecoilRoot } from 'recoil';

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <RecoilRoot>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </RecoilRoot>
        <ReactQueryDevtools position="bottom-right" />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
