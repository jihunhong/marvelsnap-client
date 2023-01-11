import { GlobalStyle } from '@styles/globals';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import AppLayout from 'src/@components/@layout/AppLayout';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalBoundary from '@components/@hoc/ModalBoundary';

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <RecoilRoot>
          <ToastContainer
            position="bottom-center"
            autoClose={1200}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="dark"
            limit={1}
          />
          <ModalBoundary />
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
