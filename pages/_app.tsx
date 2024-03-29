import { DEFAULT_SEO } from '@constant/defaultSeo';
import useApiNotify from '@hooks/notify/useApiNotify';
import useGoogleAnalytics from '@hooks/util/useGoogleAnalytics';
import AppLayout from '@layout/AppLayout';
import GoogleScript from '@layout/GoogleScript';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import '../src/styles/globals.css';

const ModalBoundary = dynamic(() => import('@components/@hoc/ModalBoundary'), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  useGoogleAnalytics();
  const notify = useApiNotify();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            onError: () => notify.getRequestError(),
          },
        },
      }),
  );

  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RecoilRoot>
            <ModalBoundary />
            <ToastContainer
              position="bottom-center"
              autoClose={1200}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover={false}
              theme="dark"
              limit={1}
            />
            <Analytics mode={process.env.NODE_ENV} />
            <GoogleScript />
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </RecoilRoot>
          <ReactQueryDevtools position="bottom-right" />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
