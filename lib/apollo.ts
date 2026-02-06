import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://graphql-pokemon2.vercel.app",
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Pokemon: {
        keyFields: ["name"],  // cache Pokemon by name
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-first",  // prefer cache
    },
  },
});

export default client;