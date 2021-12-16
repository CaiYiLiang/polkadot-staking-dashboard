import { gql } from '@apollo/client';

export const GET_VALIDATORS = gql`
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
      curSessionIndex
    }
  }

  query GetValidators($curSessionIdx: Int!) {
    validators(filter: { sessionIdx: { equalTo: $curSessionIdx } }) {
      totalCount
      nodes {
        id
        sessionIdx
        era
        stashAddress
        totalStake
        ownStake
        nominatorCount
        commission
        blocked
        slashInEra
        identityDisplayName
        eraRewardsPoints
        eraProducedBlockCount
        latestPayoutBlock
        latestPayoutFor
        latestPayoutTimestamp
      }
    }
  }

  query GetEraStakings {
    stakings(last: 7, orderBy: BLOCK_NUM_DESC) {
      nodes {
        id
        blockNum
        timestamp
        totalIssuance
        auctionCounter
        startSessionIdx
        stakingAmount
        stakingEraPayout
        stakingEraRewardPoints
        stakingValidatorCount
        counterForNominators
        counterForValidators
      }
    }
  }

  query GetStakingChronicles {
    stakingChronicle(id: "StakingChronicle") {
      blockNum
      timestamp
      historyDepth
      maxNominatorsCount
      maxValidatorsCount
      minNominatorBond
      minValidatorBond
      minimumValidatorCount
      slashRewardFraction
      earliestUnappliedSlash
    }
  }
`;
