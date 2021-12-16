import { ApolloProvider, HttpLink, ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';

const kusamaStakingGraphQL = new HttpLink({
  uri: 'https://api.subquery.network/sq/subvis-io/kusama-staking-sum-memo__c3Vid',
});

const polkadotStakingGraphQL = new HttpLink({
  uri: 'https://api.subquery.network/sq/subvis-io/polkadot-staking-sum-memo__c3Vid',
});

const polkadotValidatorGraphQL = new HttpLink({
  uri: 'https://api.subquery.network/sq/subvis-io/polkadot-staking-indexer-hackthon__c3Vid',
});

const kusamaValidatorGraphQL = new HttpLink({
  uri: 'https://api.subquery.network/sq/subvis-io/subvis-staking-indexer__c3Vid',
});

const cache = new InMemoryCache();

const links = ApolloLink.split(
  (operation) => operation.getContext().clientName === 'kusama',
  kusamaStakingGraphQL,
  ApolloLink.split(
    (operation) => operation.getContext().clientName === 'polkadot_validators',
    polkadotValidatorGraphQL,
    ApolloLink.split(
      (operation) => operation.getContext().clientName === 'kusama_validators',
      kusamaValidatorGraphQL,
      polkadotStakingGraphQL
    )
  )
);

export const client = new ApolloClient({
  link: links,
  cache,
  credentials: 'include',
  resolvers: {},
});
