import { GlobalStyle } from '@styles/globals';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import AppLayout from '@layout/AppLayout';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalBoundary from '@components/@hoc/ModalBoundary';
import useApiNotify from '@hooks/notify/useApiNotify';
import 'react-quill/dist/quill.snow.css';

function App({ Component, pageProps }: AppProps) {
  const notify = useApiNotify();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            onError: error => notify.getRequestError(),
          },
        },
      }),
  );
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
            limit={3}
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
