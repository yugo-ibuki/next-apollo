import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import "cross-fetch/polyfill";

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "http://localhost:8080/v1/graphql",
    }),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};
