// pages/_app.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { AppProps } from 'next/app';  // Import the AppProps type

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
