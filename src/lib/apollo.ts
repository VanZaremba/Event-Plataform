import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oxm9qt1dyt01xkdq0chjx5/master',
  cache: new InMemoryCache()
})