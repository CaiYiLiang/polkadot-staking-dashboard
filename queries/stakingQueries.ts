import { gql } from '@apollo/client';

export const GET_ERA_TOTAL_STAKING = gql`
  query GetMetaData {
    _metadata {
      chain
      specName
      targetHeight
      lastProcessedHeight
    }
  }
  query GetChronicle {
    chronicle(id: "Chronicle") {
      id
      curBlockNum
      curEra
      curTotalIssuance
      curAuctionCounter
    }
  }

  query GetEraTotalStaking {
    stakings(orderBy: BLOCK_NUM_DESC) {
      nodes {
        id
        blockNum
        timestamp
        stakingAmount
        totalIssuance
      }
    }
  }
`;
