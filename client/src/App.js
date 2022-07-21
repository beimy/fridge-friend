import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink }  from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache
});

function App() {
  return (
    <ApolloProvider client={client}>
      
    </ApolloProvider>
  );
}

export default App;