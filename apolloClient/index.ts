import { ApolloProvider, HttpLink, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';

const kusamaStakingGraphQL = new HttpLink({
  uri: 'https://api.subquery.network/sq/subvis-io/kusama-staking-sum-memo__c3Vid',
});

const polkadotStakingGraphQL = new HttpLink({
  uri: 'https://api.subquery.network/sq/subvis-io/polkadot-staking-sum-memo__c3Vid',
});

const cache = new InMemoryCache();

const links = ApolloLink.split(
  (operation) => operation.getContext().clientName === 'kusama',
  kusamaStakingGraphQL,
  polkadotStakingGraphQL
);

export const client = new ApolloClient({
  link: links,
  cache,
  credentials: 'include',
  resolvers: {},
});
