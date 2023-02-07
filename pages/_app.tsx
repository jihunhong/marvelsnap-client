import { DEFAULT_SEO } from '@constant/defaultSeo';
import useApiNotify from '@hooks/notify/useApiNotify';
import useGoogleAnalytics from '@hooks/util/useGoogleAnalytics';
import GoogleScript from '@layout/GoogleScript';
import { Analytics } from '@vercel/analytics/react';
import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import '../src/styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    dehydratedState: {};
  };
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);
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
              limit={3}
            />
            <Analytics />
            <GoogleScript />
            {getLayout(<Component {...pageProps} />)}
          </RecoilRoot>
          <ReactQueryDevtools position="bottom-right" />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
