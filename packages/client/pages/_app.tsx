import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import apolloClient from "../apolloClient";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <div>
          <div id='content'>
            <Component {...pageProps} />
          </div>
        </div>
      </ApolloProvider>
    </>
  )
}

export default MyApp
