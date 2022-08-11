import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo();
  return (
    <ApolloProvider client={client}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Component {...pageProps} />
      </MantineProvider>
    </ApolloProvider>
  );
}

export default MyApp;
