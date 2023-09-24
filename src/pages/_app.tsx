import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from 'next/app';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}