/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
};

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['BigFloat']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']>>;
};

/** A filter to be used against Boolean fields. All fields are combined with a logical ‘and.’ */
export type BooleanFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Boolean']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Boolean']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Boolean']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type Chronicle = Node & {
  __typename?: 'Chronicle';
  curAuctionCounter?: Maybe<Scalars['Int']>;
  curBlockNum?: Maybe<Scalars['Int']>;
  curEra?: Maybe<Scalars['Int']>;
  curSessionIndex?: Maybe<Scalars['Int']>;
  curTotalIssuance?: Maybe<Scalars['BigFloat']>;
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** A filter to be used against `Chronicle` object types. All fields are combined with a logical ‘and.’ */
export type ChronicleFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ChronicleFilter>>;
  /** Filter by the object’s `curAuctionCounter` field. */
  curAuctionCounter?: InputMaybe<IntFilter>;
  /** Filter by the object’s `curBlockNum` field. */
  curBlockNum?: InputMaybe<IntFilter>;
  /** Filter by the object’s `curEra` field. */
  curEra?: InputMaybe<IntFilter>;
  /** Filter by the object’s `curSessionIndex` field. */
  curSessionIndex?: InputMaybe<IntFilter>;
  /** Filter by the object’s `curTotalIssuance` field. */
  curTotalIssuance?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ChronicleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ChronicleFilter>>;
};

/** A connection to a list of `Chronicle` values. */
export type ChroniclesConnection = {
  __typename?: 'ChroniclesConnection';
  /** A list of edges which contains the `Chronicle` and cursor to aid in pagination. */
  edges: Array<ChroniclesEdge>;
  /** A list of `Chronicle` objects. */
  nodes: Array<Maybe<Chronicle>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Chronicle` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Chronicle` edge in the connection. */
export type ChroniclesEdge = {
  __typename?: 'ChroniclesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Chronicle` at the end of the edge. */
  node?: Maybe<Chronicle>;
};

/** Methods to use when ordering `Chronicle`. */
export enum ChroniclesOrderBy {
  CurAuctionCounterAsc = 'CUR_AUCTION_COUNTER_ASC',
  CurAuctionCounterDesc = 'CUR_AUCTION_COUNTER_DESC',
  CurBlockNumAsc = 'CUR_BLOCK_NUM_ASC',
  CurBlockNumDesc = 'CUR_BLOCK_NUM_DESC',
  CurEraAsc = 'CUR_ERA_ASC',
  CurEraDesc = 'CUR_ERA_DESC',
  CurSessionIndexAsc = 'CUR_SESSION_INDEX_ASC',
  CurSessionIndexDesc = 'CUR_SESSION_INDEX_DESC',
  CurTotalIssuanceAsc = 'CUR_TOTAL_ISSUANCE_ASC',
  CurTotalIssuanceDesc = 'CUR_TOTAL_ISSUANCE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Datetime']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']>>;
};

/** A connection to a list of `Identity` values. */
export type IdentitiesConnection = {
  __typename?: 'IdentitiesConnection';
  /** A list of edges which contains the `Identity` and cursor to aid in pagination. */
  edges: Array<IdentitiesEdge>;
  /** A list of `Identity` objects. */
  nodes: Array<Maybe<Identity>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Identity` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Identity` edge in the connection. */
export type IdentitiesEdge = {
  __typename?: 'IdentitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Identity` at the end of the edge. */
  node?: Maybe<Identity>;
};

/** Methods to use when ordering `Identity`. */
export enum IdentitiesOrderBy {
  DepositAsc = 'DEPOSIT_ASC',
  DepositDesc = 'DEPOSIT_DESC',
  DisplayAsc = 'DISPLAY_ASC',
  DisplayDesc = 'DISPLAY_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RiotAsc = 'RIOT_ASC',
  RiotDesc = 'RIOT_DESC',
  WebAsc = 'WEB_ASC',
  WebDesc = 'WEB_DESC',
}

export type Identity = Node & {
  __typename?: 'Identity';
  deposit?: Maybe<Scalars['BigFloat']>;
  display?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  riot?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

/** A filter to be used against `Identity` object types. All fields are combined with a logical ‘and.’ */
export type IdentityFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<IdentityFilter>>;
  /** Filter by the object’s `deposit` field. */
  deposit?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `display` field. */
  display?: InputMaybe<StringFilter>;
  /** Filter by the object’s `email` field. */
  email?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<IdentityFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<IdentityFilter>>;
  /** Filter by the object’s `riot` field. */
  riot?: InputMaybe<StringFilter>;
  /** Filter by the object’s `web` field. */
  web?: InputMaybe<StringFilter>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NoBondRecordAccount = Node & {
  __typename?: 'NoBondRecordAccount';
  firstRewardAt: Scalars['Int'];
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** A filter to be used against `NoBondRecordAccount` object types. All fields are combined with a logical ‘and.’ */
export type NoBondRecordAccountFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NoBondRecordAccountFilter>>;
  /** Filter by the object’s `firstRewardAt` field. */
  firstRewardAt?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NoBondRecordAccountFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NoBondRecordAccountFilter>>;
};

/** A connection to a list of `NoBondRecordAccount` values. */
export type NoBondRecordAccountsConnection = {
  __typename?: 'NoBondRecordAccountsConnection';
  /** A list of edges which contains the `NoBondRecordAccount` and cursor to aid in pagination. */
  edges: Array<NoBondRecordAccountsEdge>;
  /** A list of `NoBondRecordAccount` objects. */
  nodes: Array<Maybe<NoBondRecordAccount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `NoBondRecordAccount` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `NoBondRecordAccount` edge in the connection. */
export type NoBondRecordAccountsEdge = {
  __typename?: 'NoBondRecordAccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `NoBondRecordAccount` at the end of the edge. */
  node?: Maybe<NoBondRecordAccount>;
};

/** Methods to use when ordering `NoBondRecordAccount`. */
export enum NoBondRecordAccountsOrderBy {
  FirstRewardAtAsc = 'FIRST_REWARD_AT_ASC',
  FirstRewardAtDesc = 'FIRST_REWARD_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type Nominator = Node & {
  __typename?: 'Nominator';
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Validator` that is related to this `Nominator`. */
  nominateTo?: Maybe<Validator>;
  nominateToId: Scalars['String'];
  stashAddress: Scalars['String'];
  totalStake?: Maybe<Scalars['BigFloat']>;
};

/** A filter to be used against `Nominator` object types. All fields are combined with a logical ‘and.’ */
export type NominatorFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<NominatorFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nominateToId` field. */
  nominateToId?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<NominatorFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<NominatorFilter>>;
  /** Filter by the object’s `stashAddress` field. */
  stashAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `totalStake` field. */
  totalStake?: InputMaybe<BigFloatFilter>;
};

/** A connection to a list of `Nominator` values. */
export type NominatorsConnection = {
  __typename?: 'NominatorsConnection';
  /** A list of edges which contains the `Nominator` and cursor to aid in pagination. */
  edges: Array<NominatorsEdge>;
  /** A list of `Nominator` objects. */
  nodes: Array<Maybe<Nominator>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Nominator` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Nominator` edge in the connection. */
export type NominatorsEdge = {
  __typename?: 'NominatorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Nominator` at the end of the edge. */
  node?: Maybe<Nominator>;
};

/** Methods to use when ordering `Nominator`. */
export enum NominatorsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  NominateToIdAsc = 'NOMINATE_TO_ID_ASC',
  NominateToIdDesc = 'NOMINATE_TO_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StashAddressAsc = 'STASH_ADDRESS_ASC',
  StashAddressDesc = 'STASH_ADDRESS_DESC',
  TotalStakeAsc = 'TOTAL_STAKE_ASC',
  TotalStakeDesc = 'TOTAL_STAKE_DESC',
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  _metadata?: Maybe<_Metadata>;
  chronicle?: Maybe<Chronicle>;
  /** Reads a single `Chronicle` using its globally unique `ID`. */
  chronicleByNodeId?: Maybe<Chronicle>;
  /** Reads and enables pagination through a set of `Chronicle`. */
  chronicles?: Maybe<ChroniclesConnection>;
  /** Reads and enables pagination through a set of `Identity`. */
  identities?: Maybe<IdentitiesConnection>;
  identity?: Maybe<Identity>;
  /** Reads a single `Identity` using its globally unique `ID`. */
  identityByNodeId?: Maybe<Identity>;
  noBondRecordAccount?: Maybe<NoBondRecordAccount>;
  /** Reads a single `NoBondRecordAccount` using its globally unique `ID`. */
  noBondRecordAccountByNodeId?: Maybe<NoBondRecordAccount>;
  /** Reads and enables pagination through a set of `NoBondRecordAccount`. */
  noBondRecordAccounts?: Maybe<NoBondRecordAccountsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  nominator?: Maybe<Nominator>;
  /** Reads a single `Nominator` using its globally unique `ID`. */
  nominatorByNodeId?: Maybe<Nominator>;
  /** Reads and enables pagination through a set of `Nominator`. */
  nominators?: Maybe<NominatorsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  rewardAndSlashSum?: Maybe<RewardAndSlashSum>;
  /** Reads a single `RewardAndSlashSum` using its globally unique `ID`. */
  rewardAndSlashSumByNodeId?: Maybe<RewardAndSlashSum>;
  /** Reads and enables pagination through a set of `RewardAndSlashSum`. */
  rewardAndSlashSums?: Maybe<RewardAndSlashSumsConnection>;
  staking?: Maybe<Staking>;
  /** Reads a single `Staking` using its globally unique `ID`. */
  stakingByNodeId?: Maybe<Staking>;
  stakingChronicle?: Maybe<StakingChronicle>;
  /** Reads a single `StakingChronicle` using its globally unique `ID`. */
  stakingChronicleByNodeId?: Maybe<StakingChronicle>;
  /** Reads and enables pagination through a set of `StakingChronicle`. */
  stakingChronicles?: Maybe<StakingChroniclesConnection>;
  stakingReward?: Maybe<StakingReward>;
  /** Reads a single `StakingReward` using its globally unique `ID`. */
  stakingRewardByNodeId?: Maybe<StakingReward>;
  /** Reads and enables pagination through a set of `StakingReward`. */
  stakingRewards?: Maybe<StakingRewardsConnection>;
  stakingSlash?: Maybe<StakingSlash>;
  /** Reads a single `StakingSlash` using its globally unique `ID`. */
  stakingSlashByNodeId?: Maybe<StakingSlash>;
  /** Reads and enables pagination through a set of `StakingSlash`. */
  stakingSlashes?: Maybe<StakingSlashesConnection>;
  /** Reads and enables pagination through a set of `Staking`. */
  stakings?: Maybe<StakingsConnection>;
  validator?: Maybe<Validator>;
  /** Reads a single `Validator` using its globally unique `ID`. */
  validatorByNodeId?: Maybe<Validator>;
  /** Reads and enables pagination through a set of `Validator`. */
  validators?: Maybe<ValidatorsConnection>;
};

/** The root query type which gives access points into the data universe. */
export type QueryChronicleArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryChronicleByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryChroniclesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ChronicleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ChroniclesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryIdentitiesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<IdentityFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<IdentitiesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryIdentityArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryIdentityByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryNoBondRecordAccountArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryNoBondRecordAccountByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryNoBondRecordAccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<NoBondRecordAccountFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NoBondRecordAccountsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryNominatorArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryNominatorByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryNominatorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<NominatorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NominatorsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryRewardAndSlashSumArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRewardAndSlashSumByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryRewardAndSlashSumsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<RewardAndSlashSumFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RewardAndSlashSumsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingChronicleArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingChronicleByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingChroniclesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StakingChronicleFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StakingChroniclesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingRewardArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingRewardByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingRewardsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StakingRewardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StakingRewardsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingSlashArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingSlashByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingSlashesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StakingSlashFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StakingSlashesOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryStakingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StakingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StakingsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryValidatorArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryValidatorByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryValidatorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ValidatorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ValidatorsOrderBy>>;
};

export type RewardAndSlashSum = Node & {
  __typename?: 'RewardAndSlashSum';
  accountReward: Scalars['BigFloat'];
  accountSlash: Scalars['BigFloat'];
  accountTotal: Scalars['BigFloat'];
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `StakingReward`. */
  rewards: StakingRewardsConnection;
  /** Reads and enables pagination through a set of `StakingSlash`. */
  slashs: StakingSlashesConnection;
};

export type RewardAndSlashSumRewardsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StakingRewardFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StakingRewardsOrderBy>>;
};

export type RewardAndSlashSumSlashsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StakingSlashFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StakingSlashesOrderBy>>;
};

/** A filter to be used against `RewardAndSlashSum` object types. All fields are combined with a logical ‘and.’ */
export type RewardAndSlashSumFilter = {
  /** Filter by the object’s `accountReward` field. */
  accountReward?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `accountSlash` field. */
  accountSlash?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `accountTotal` field. */
  accountTotal?: InputMaybe<BigFloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RewardAndSlashSumFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RewardAndSlashSumFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RewardAndSlashSumFilter>>;
};

/** A connection to a list of `RewardAndSlashSum` values. */
export type RewardAndSlashSumsConnection = {
  __typename?: 'RewardAndSlashSumsConnection';
  /** A list of edges which contains the `RewardAndSlashSum` and cursor to aid in pagination. */
  edges: Array<RewardAndSlashSumsEdge>;
  /** A list of `RewardAndSlashSum` objects. */
  nodes: Array<Maybe<RewardAndSlashSum>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RewardAndSlashSum` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `RewardAndSlashSum` edge in the connection. */
export type RewardAndSlashSumsEdge = {
  __typename?: 'RewardAndSlashSumsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `RewardAndSlashSum` at the end of the edge. */
  node?: Maybe<RewardAndSlashSum>;
};

/** Methods to use when ordering `RewardAndSlashSum`. */
export enum RewardAndSlashSumsOrderBy {
  AccountRewardAsc = 'ACCOUNT_REWARD_ASC',
  AccountRewardDesc = 'ACCOUNT_REWARD_DESC',
  AccountSlashAsc = 'ACCOUNT_SLASH_ASC',
  AccountSlashDesc = 'ACCOUNT_SLASH_DESC',
  AccountTotalAsc = 'ACCOUNT_TOTAL_ASC',
  AccountTotalDesc = 'ACCOUNT_TOTAL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export type Staking = Node & {
  __typename?: 'Staking';
  auctionCounter?: Maybe<Scalars['Int']>;
  blockNum: Scalars['Int'];
  counterForNominators?: Maybe<Scalars['Int']>;
  counterForValidators?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  stakingAmount?: Maybe<Scalars['BigFloat']>;
  stakingEraPayout?: Maybe<Scalars['BigFloat']>;
  stakingEraRewardPoints?: Maybe<Scalars['Int']>;
  stakingValidatorCount?: Maybe<Scalars['Int']>;
  startSessionIdx?: Maybe<Scalars['Int']>;
  timestamp: Scalars['Datetime'];
  totalIssuance: Scalars['BigFloat'];
  /** Reads and enables pagination through a set of `Validator`. */
  validators: ValidatorsConnection;
};

export type StakingValidatorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ValidatorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ValidatorsOrderBy>>;
};

export type StakingChronicle = Node & {
  __typename?: 'StakingChronicle';
  blockNum?: Maybe<Scalars['Int']>;
  earliestUnappliedSlash?: Maybe<Scalars['Int']>;
  historyDepth?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  maxNominatorsCount?: Maybe<Scalars['Int']>;
  maxValidatorsCount?: Maybe<Scalars['Int']>;
  minNominatorBond?: Maybe<Scalars['BigFloat']>;
  minValidatorBond?: Maybe<Scalars['BigFloat']>;
  minimumValidatorCount?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  slashRewardFraction?: Maybe<Scalars['BigFloat']>;
  timestamp?: Maybe<Scalars['Datetime']>;
};

/** A filter to be used against `StakingChronicle` object types. All fields are combined with a logical ‘and.’ */
export type StakingChronicleFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<StakingChronicleFilter>>;
  /** Filter by the object’s `blockNum` field. */
  blockNum?: InputMaybe<IntFilter>;
  /** Filter by the object’s `earliestUnappliedSlash` field. */
  earliestUnappliedSlash?: InputMaybe<IntFilter>;
  /** Filter by the object’s `historyDepth` field. */
  historyDepth?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `maxNominatorsCount` field. */
  maxNominatorsCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `maxValidatorsCount` field. */
  maxValidatorsCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `minNominatorBond` field. */
  minNominatorBond?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `minValidatorBond` field. */
  minValidatorBond?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `minimumValidatorCount` field. */
  minimumValidatorCount?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<StakingChronicleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<StakingChronicleFilter>>;
  /** Filter by the object’s `slashRewardFraction` field. */
  slashRewardFraction?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `StakingChronicle` values. */
export type StakingChroniclesConnection = {
  __typename?: 'StakingChroniclesConnection';
  /** A list of edges which contains the `StakingChronicle` and cursor to aid in pagination. */
  edges: Array<StakingChroniclesEdge>;
  /** A list of `StakingChronicle` objects. */
  nodes: Array<Maybe<StakingChronicle>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `StakingChronicle` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `StakingChronicle` edge in the connection. */
export type StakingChroniclesEdge = {
  __typename?: 'StakingChroniclesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `StakingChronicle` at the end of the edge. */
  node?: Maybe<StakingChronicle>;
};

/** Methods to use when ordering `StakingChronicle`. */
export enum StakingChroniclesOrderBy {
  BlockNumAsc = 'BLOCK_NUM_ASC',
  BlockNumDesc = 'BLOCK_NUM_DESC',
  EarliestUnappliedSlashAsc = 'EARLIEST_UNAPPLIED_SLASH_ASC',
  EarliestUnappliedSlashDesc = 'EARLIEST_UNAPPLIED_SLASH_DESC',
  HistoryDepthAsc = 'HISTORY_DEPTH_ASC',
  HistoryDepthDesc = 'HISTORY_DEPTH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MaxNominatorsCountAsc = 'MAX_NOMINATORS_COUNT_ASC',
  MaxNominatorsCountDesc = 'MAX_NOMINATORS_COUNT_DESC',
  MaxValidatorsCountAsc = 'MAX_VALIDATORS_COUNT_ASC',
  MaxValidatorsCountDesc = 'MAX_VALIDATORS_COUNT_DESC',
  MinimumValidatorCountAsc = 'MINIMUM_VALIDATOR_COUNT_ASC',
  MinimumValidatorCountDesc = 'MINIMUM_VALIDATOR_COUNT_DESC',
  MinNominatorBondAsc = 'MIN_NOMINATOR_BOND_ASC',
  MinNominatorBondDesc = 'MIN_NOMINATOR_BOND_DESC',
  MinValidatorBondAsc = 'MIN_VALIDATOR_BOND_ASC',
  MinValidatorBondDesc = 'MIN_VALIDATOR_BOND_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SlashRewardFractionAsc = 'SLASH_REWARD_FRACTION_ASC',
  SlashRewardFractionDesc = 'SLASH_REWARD_FRACTION_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
}

/** A filter to be used against `Staking` object types. All fields are combined with a logical ‘and.’ */
export type StakingFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<StakingFilter>>;
  /** Filter by the object’s `auctionCounter` field. */
  auctionCounter?: InputMaybe<IntFilter>;
  /** Filter by the object’s `blockNum` field. */
  blockNum?: InputMaybe<IntFilter>;
  /** Filter by the object’s `counterForNominators` field. */
  counterForNominators?: InputMaybe<IntFilter>;
  /** Filter by the object’s `counterForValidators` field. */
  counterForValidators?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<StakingFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<StakingFilter>>;
  /** Filter by the object’s `stakingAmount` field. */
  stakingAmount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `stakingEraPayout` field. */
  stakingEraPayout?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `stakingEraRewardPoints` field. */
  stakingEraRewardPoints?: InputMaybe<IntFilter>;
  /** Filter by the object’s `stakingValidatorCount` field. */
  stakingValidatorCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `startSessionIdx` field. */
  startSessionIdx?: InputMaybe<IntFilter>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `totalIssuance` field. */
  totalIssuance?: InputMaybe<BigFloatFilter>;
};

export type StakingReward = Node & {
  __typename?: 'StakingReward';
  /** Reads a single `RewardAndSlashSum` that is related to this `StakingReward`. */
  account?: Maybe<RewardAndSlashSum>;
  accountId: Scalars['String'];
  balance: Scalars['BigFloat'];
  block: Scalars['Int'];
  date: Scalars['Datetime'];
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** A filter to be used against `StakingReward` object types. All fields are combined with a logical ‘and.’ */
export type StakingRewardFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<StakingRewardFilter>>;
  /** Filter by the object’s `balance` field. */
  balance?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `block` field. */
  block?: InputMaybe<IntFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<StakingRewardFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<StakingRewardFilter>>;
};

/** A connection to a list of `StakingReward` values. */
export type StakingRewardsConnection = {
  __typename?: 'StakingRewardsConnection';
  /** A list of edges which contains the `StakingReward` and cursor to aid in pagination. */
  edges: Array<StakingRewardsEdge>;
  /** A list of `StakingReward` objects. */
  nodes: Array<Maybe<StakingReward>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `StakingReward` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `StakingReward` edge in the connection. */
export type StakingRewardsEdge = {
  __typename?: 'StakingRewardsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `StakingReward` at the end of the edge. */
  node?: Maybe<StakingReward>;
};

/** Methods to use when ordering `StakingReward`. */
export enum StakingRewardsOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  BlockAsc = 'BLOCK_ASC',
  BlockDesc = 'BLOCK_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export type StakingSlash = Node & {
  __typename?: 'StakingSlash';
  /** Reads a single `RewardAndSlashSum` that is related to this `StakingSlash`. */
  account?: Maybe<RewardAndSlashSum>;
  accountId: Scalars['String'];
  balance: Scalars['BigFloat'];
  block: Scalars['Int'];
  date: Scalars['Datetime'];
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** A filter to be used against `StakingSlash` object types. All fields are combined with a logical ‘and.’ */
export type StakingSlashFilter = {
  /** Filter by the object’s `accountId` field. */
  accountId?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<StakingSlashFilter>>;
  /** Filter by the object’s `balance` field. */
  balance?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `block` field. */
  block?: InputMaybe<IntFilter>;
  /** Filter by the object’s `date` field. */
  date?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<StakingSlashFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<StakingSlashFilter>>;
};

/** A connection to a list of `StakingSlash` values. */
export type StakingSlashesConnection = {
  __typename?: 'StakingSlashesConnection';
  /** A list of edges which contains the `StakingSlash` and cursor to aid in pagination. */
  edges: Array<StakingSlashesEdge>;
  /** A list of `StakingSlash` objects. */
  nodes: Array<Maybe<StakingSlash>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `StakingSlash` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `StakingSlash` edge in the connection. */
export type StakingSlashesEdge = {
  __typename?: 'StakingSlashesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `StakingSlash` at the end of the edge. */
  node?: Maybe<StakingSlash>;
};

/** Methods to use when ordering `StakingSlash`. */
export enum StakingSlashesOrderBy {
  AccountIdAsc = 'ACCOUNT_ID_ASC',
  AccountIdDesc = 'ACCOUNT_ID_DESC',
  BalanceAsc = 'BALANCE_ASC',
  BalanceDesc = 'BALANCE_DESC',
  BlockAsc = 'BLOCK_ASC',
  BlockDesc = 'BLOCK_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

/** A connection to a list of `Staking` values. */
export type StakingsConnection = {
  __typename?: 'StakingsConnection';
  /** A list of edges which contains the `Staking` and cursor to aid in pagination. */
  edges: Array<StakingsEdge>;
  /** A list of `Staking` objects. */
  nodes: Array<Maybe<Staking>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Staking` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Staking` edge in the connection. */
export type StakingsEdge = {
  __typename?: 'StakingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Staking` at the end of the edge. */
  node?: Maybe<Staking>;
};

/** Methods to use when ordering `Staking`. */
export enum StakingsOrderBy {
  AuctionCounterAsc = 'AUCTION_COUNTER_ASC',
  AuctionCounterDesc = 'AUCTION_COUNTER_DESC',
  BlockNumAsc = 'BLOCK_NUM_ASC',
  BlockNumDesc = 'BLOCK_NUM_DESC',
  CounterForNominatorsAsc = 'COUNTER_FOR_NOMINATORS_ASC',
  CounterForNominatorsDesc = 'COUNTER_FOR_NOMINATORS_DESC',
  CounterForValidatorsAsc = 'COUNTER_FOR_VALIDATORS_ASC',
  CounterForValidatorsDesc = 'COUNTER_FOR_VALIDATORS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StakingAmountAsc = 'STAKING_AMOUNT_ASC',
  StakingAmountDesc = 'STAKING_AMOUNT_DESC',
  StakingEraPayoutAsc = 'STAKING_ERA_PAYOUT_ASC',
  StakingEraPayoutDesc = 'STAKING_ERA_PAYOUT_DESC',
  StakingEraRewardPointsAsc = 'STAKING_ERA_REWARD_POINTS_ASC',
  StakingEraRewardPointsDesc = 'STAKING_ERA_REWARD_POINTS_DESC',
  StakingValidatorCountAsc = 'STAKING_VALIDATOR_COUNT_ASC',
  StakingValidatorCountDesc = 'STAKING_VALIDATOR_COUNT_DESC',
  StartSessionIdxAsc = 'START_SESSION_IDX_ASC',
  StartSessionIdxDesc = 'START_SESSION_IDX_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TotalIssuanceAsc = 'TOTAL_ISSUANCE_ASC',
  TotalIssuanceDesc = 'TOTAL_ISSUANCE_DESC',
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: InputMaybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: InputMaybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: InputMaybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: InputMaybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: InputMaybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: InputMaybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: InputMaybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: InputMaybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: InputMaybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: InputMaybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: InputMaybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: InputMaybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: InputMaybe<Scalars['String']>;
};

export type Validator = Node & {
  __typename?: 'Validator';
  blocked?: Maybe<Scalars['Boolean']>;
  commission?: Maybe<Scalars['BigFloat']>;
  era: Scalars['String'];
  eraProducedBlockCount?: Maybe<Scalars['Int']>;
  eraRewardsPoints?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  identityDisplayName?: Maybe<Scalars['String']>;
  latestPayoutBlock?: Maybe<Scalars['Int']>;
  latestPayoutFor?: Maybe<Scalars['String']>;
  latestPayoutTimestamp?: Maybe<Scalars['Datetime']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  nominatorCount?: Maybe<Scalars['Int']>;
  /** Reads and enables pagination through a set of `Nominator`. */
  nominators: NominatorsConnection;
  ownStake?: Maybe<Scalars['BigFloat']>;
  sessionIdx: Scalars['Int'];
  slashInEra?: Maybe<Scalars['Boolean']>;
  /** Reads a single `Staking` that is related to this `Validator`. */
  stakingEra?: Maybe<Staking>;
  stakingEraId?: Maybe<Scalars['String']>;
  stashAddress: Scalars['String'];
  totalStake?: Maybe<Scalars['BigFloat']>;
};

export type ValidatorNominatorsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<NominatorFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NominatorsOrderBy>>;
};

/** A filter to be used against `Validator` object types. All fields are combined with a logical ‘and.’ */
export type ValidatorFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ValidatorFilter>>;
  /** Filter by the object’s `blocked` field. */
  blocked?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `commission` field. */
  commission?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `era` field. */
  era?: InputMaybe<StringFilter>;
  /** Filter by the object’s `eraProducedBlockCount` field. */
  eraProducedBlockCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `eraRewardsPoints` field. */
  eraRewardsPoints?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `identityDisplayName` field. */
  identityDisplayName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `latestPayoutBlock` field. */
  latestPayoutBlock?: InputMaybe<IntFilter>;
  /** Filter by the object’s `latestPayoutFor` field. */
  latestPayoutFor?: InputMaybe<StringFilter>;
  /** Filter by the object’s `latestPayoutTimestamp` field. */
  latestPayoutTimestamp?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `nominatorCount` field. */
  nominatorCount?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ValidatorFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ValidatorFilter>>;
  /** Filter by the object’s `ownStake` field. */
  ownStake?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `sessionIdx` field. */
  sessionIdx?: InputMaybe<IntFilter>;
  /** Filter by the object’s `slashInEra` field. */
  slashInEra?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `stakingEraId` field. */
  stakingEraId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `stashAddress` field. */
  stashAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `totalStake` field. */
  totalStake?: InputMaybe<BigFloatFilter>;
};

/** A connection to a list of `Validator` values. */
export type ValidatorsConnection = {
  __typename?: 'ValidatorsConnection';
  /** A list of edges which contains the `Validator` and cursor to aid in pagination. */
  edges: Array<ValidatorsEdge>;
  /** A list of `Validator` objects. */
  nodes: Array<Maybe<Validator>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Validator` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Validator` edge in the connection. */
export type ValidatorsEdge = {
  __typename?: 'ValidatorsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Validator` at the end of the edge. */
  node?: Maybe<Validator>;
};

/** Methods to use when ordering `Validator`. */
export enum ValidatorsOrderBy {
  BlockedAsc = 'BLOCKED_ASC',
  BlockedDesc = 'BLOCKED_DESC',
  CommissionAsc = 'COMMISSION_ASC',
  CommissionDesc = 'COMMISSION_DESC',
  EraAsc = 'ERA_ASC',
  EraDesc = 'ERA_DESC',
  EraProducedBlockCountAsc = 'ERA_PRODUCED_BLOCK_COUNT_ASC',
  EraProducedBlockCountDesc = 'ERA_PRODUCED_BLOCK_COUNT_DESC',
  EraRewardsPointsAsc = 'ERA_REWARDS_POINTS_ASC',
  EraRewardsPointsDesc = 'ERA_REWARDS_POINTS_DESC',
  IdentityDisplayNameAsc = 'IDENTITY_DISPLAY_NAME_ASC',
  IdentityDisplayNameDesc = 'IDENTITY_DISPLAY_NAME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LatestPayoutBlockAsc = 'LATEST_PAYOUT_BLOCK_ASC',
  LatestPayoutBlockDesc = 'LATEST_PAYOUT_BLOCK_DESC',
  LatestPayoutForAsc = 'LATEST_PAYOUT_FOR_ASC',
  LatestPayoutForDesc = 'LATEST_PAYOUT_FOR_DESC',
  LatestPayoutTimestampAsc = 'LATEST_PAYOUT_TIMESTAMP_ASC',
  LatestPayoutTimestampDesc = 'LATEST_PAYOUT_TIMESTAMP_DESC',
  Natural = 'NATURAL',
  NominatorCountAsc = 'NOMINATOR_COUNT_ASC',
  NominatorCountDesc = 'NOMINATOR_COUNT_DESC',
  OwnStakeAsc = 'OWN_STAKE_ASC',
  OwnStakeDesc = 'OWN_STAKE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  SessionIdxAsc = 'SESSION_IDX_ASC',
  SessionIdxDesc = 'SESSION_IDX_DESC',
  SlashInEraAsc = 'SLASH_IN_ERA_ASC',
  SlashInEraDesc = 'SLASH_IN_ERA_DESC',
  StakingEraIdAsc = 'STAKING_ERA_ID_ASC',
  StakingEraIdDesc = 'STAKING_ERA_ID_DESC',
  StashAddressAsc = 'STASH_ADDRESS_ASC',
  StashAddressDesc = 'STASH_ADDRESS_DESC',
  TotalStakeAsc = 'TOTAL_STAKE_ASC',
  TotalStakeDesc = 'TOTAL_STAKE_DESC',
}

export type _Metadata = {
  __typename?: '_Metadata';
  chain?: Maybe<Scalars['String']>;
  genesisHash?: Maybe<Scalars['String']>;
  indexerHealthy?: Maybe<Scalars['Boolean']>;
  indexerNodeVersion?: Maybe<Scalars['String']>;
  lastProcessedHeight?: Maybe<Scalars['Int']>;
  lastProcessedTimestamp?: Maybe<Scalars['Date']>;
  queryNodeVersion?: Maybe<Scalars['String']>;
  specName?: Maybe<Scalars['String']>;
  targetHeight?: Maybe<Scalars['Int']>;
};

export type GetMetaDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetMetaDataQuery = {
  __typename?: 'Query';
  _metadata?:
    | {
        __typename?: '_Metadata';
        chain?: string | null | undefined;
        specName?: string | null | undefined;
        targetHeight?: number | null | undefined;
        lastProcessedHeight?: number | null | undefined;
      }
    | null
    | undefined;
};

export type GetChronicleQueryVariables = Exact<{ [key: string]: never }>;

export type GetChronicleQuery = {
  __typename?: 'Query';
  chronicle?:
    | {
        __typename?: 'Chronicle';
        id: string;
        curBlockNum?: number | null | undefined;
        curEra?: number | null | undefined;
        curTotalIssuance?: any | null | undefined;
        curAuctionCounter?: number | null | undefined;
        curSessionIndex?: number | null | undefined;
      }
    | null
    | undefined;
};

export type GetValidatorsQueryVariables = Exact<{
  curSessionIdx: Scalars['Int'];
}>;

export type GetValidatorsQuery = {
  __typename?: 'Query';
  validators?:
    | {
        __typename?: 'ValidatorsConnection';
        totalCount: number;
        nodes: Array<
          | {
              __typename?: 'Validator';
              id: string;
              sessionIdx: number;
              era: string;
              stashAddress: string;
              totalStake?: any | null | undefined;
              ownStake?: any | null | undefined;
              nominatorCount?: number | null | undefined;
              commission?: any | null | undefined;
              blocked?: boolean | null | undefined;
              slashInEra?: boolean | null | undefined;
              identityDisplayName?: string | null | undefined;
              eraRewardsPoints?: number | null | undefined;
              eraProducedBlockCount?: number | null | undefined;
              latestPayoutBlock?: number | null | undefined;
              latestPayoutFor?: string | null | undefined;
              latestPayoutTimestamp?: any | null | undefined;
            }
          | null
          | undefined
        >;
      }
    | null
    | undefined;
};

export type GetEraStakingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetEraStakingsQuery = {
  __typename?: 'Query';
  stakings?:
    | {
        __typename?: 'StakingsConnection';
        nodes: Array<
          | {
              __typename?: 'Staking';
              id: string;
              blockNum: number;
              timestamp: any;
              totalIssuance: any;
              auctionCounter?: number | null | undefined;
              startSessionIdx?: number | null | undefined;
              stakingAmount?: any | null | undefined;
              stakingEraPayout?: any | null | undefined;
              stakingEraRewardPoints?: number | null | undefined;
              stakingValidatorCount?: number | null | undefined;
              counterForNominators?: number | null | undefined;
              counterForValidators?: number | null | undefined;
            }
          | null
          | undefined
        >;
      }
    | null
    | undefined;
};

export type GetStakingChroniclesQueryVariables = Exact<{ [key: string]: never }>;

export type GetStakingChroniclesQuery = {
  __typename?: 'Query';
  stakingChronicle?:
    | {
        __typename?: 'StakingChronicle';
        blockNum?: number | null | undefined;
        timestamp?: any | null | undefined;
        historyDepth?: number | null | undefined;
        maxNominatorsCount?: number | null | undefined;
        maxValidatorsCount?: number | null | undefined;
        minNominatorBond?: any | null | undefined;
        minValidatorBond?: any | null | undefined;
        minimumValidatorCount?: number | null | undefined;
        slashRewardFraction?: any | null | undefined;
        earliestUnappliedSlash?: number | null | undefined;
      }
    | null
    | undefined;
};

export const GetMetaDataDocument = gql`
  query GetMetaData {
    _metadata {
      chain
      specName
      targetHeight
      lastProcessedHeight
    }
  }
`;

/**
 * __useGetMetaDataQuery__
 *
 * To run a query within a React component, call `useGetMetaDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMetaDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMetaDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMetaDataQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMetaDataQuery, GetMetaDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMetaDataQuery, GetMetaDataQueryVariables>(GetMetaDataDocument, options);
}
export function useGetMetaDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMetaDataQuery, GetMetaDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMetaDataQuery, GetMetaDataQueryVariables>(
    GetMetaDataDocument,
    options
  );
}
export type GetMetaDataQueryHookResult = ReturnType<typeof useGetMetaDataQuery>;
export type GetMetaDataLazyQueryHookResult = ReturnType<typeof useGetMetaDataLazyQuery>;
export type GetMetaDataQueryResult = Apollo.QueryResult<
  GetMetaDataQuery,
  GetMetaDataQueryVariables
>;
export function refetchGetMetaDataQuery(variables?: GetMetaDataQueryVariables) {
  return { query: GetMetaDataDocument, variables: variables };
}
export const GetChronicleDocument = gql`
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
`;

/**
 * __useGetChronicleQuery__
 *
 * To run a query within a React component, call `useGetChronicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChronicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChronicleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChronicleQuery(
  baseOptions?: Apollo.QueryHookOptions<GetChronicleQuery, GetChronicleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetChronicleQuery, GetChronicleQueryVariables>(
    GetChronicleDocument,
    options
  );
}
export function useGetChronicleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetChronicleQuery, GetChronicleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetChronicleQuery, GetChronicleQueryVariables>(
    GetChronicleDocument,
    options
  );
}
export type GetChronicleQueryHookResult = ReturnType<typeof useGetChronicleQuery>;
export type GetChronicleLazyQueryHookResult = ReturnType<typeof useGetChronicleLazyQuery>;
export type GetChronicleQueryResult = Apollo.QueryResult<
  GetChronicleQuery,
  GetChronicleQueryVariables
>;
export function refetchGetChronicleQuery(variables?: GetChronicleQueryVariables) {
  return { query: GetChronicleDocument, variables: variables };
}
export const GetValidatorsDocument = gql`
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
`;

/**
 * __useGetValidatorsQuery__
 *
 * To run a query within a React component, call `useGetValidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidatorsQuery({
 *   variables: {
 *      curSessionIdx: // value for 'curSessionIdx'
 *   },
 * });
 */
export function useGetValidatorsQuery(
  baseOptions: Apollo.QueryHookOptions<GetValidatorsQuery, GetValidatorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetValidatorsQuery, GetValidatorsQueryVariables>(
    GetValidatorsDocument,
    options
  );
}
export function useGetValidatorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetValidatorsQuery, GetValidatorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetValidatorsQuery, GetValidatorsQueryVariables>(
    GetValidatorsDocument,
    options
  );
}
export type GetValidatorsQueryHookResult = ReturnType<typeof useGetValidatorsQuery>;
export type GetValidatorsLazyQueryHookResult = ReturnType<typeof useGetValidatorsLazyQuery>;
export type GetValidatorsQueryResult = Apollo.QueryResult<
  GetValidatorsQuery,
  GetValidatorsQueryVariables
>;
export function refetchGetValidatorsQuery(variables: GetValidatorsQueryVariables) {
  return { query: GetValidatorsDocument, variables: variables };
}
export const GetEraStakingsDocument = gql`
  query GetEraStakings {
    stakings(first: 7, orderBy: BLOCK_NUM_DESC) {
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
`;

/**
 * __useGetEraStakingsQuery__
 *
 * To run a query within a React component, call `useGetEraStakingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEraStakingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEraStakingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEraStakingsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetEraStakingsQuery, GetEraStakingsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEraStakingsQuery, GetEraStakingsQueryVariables>(
    GetEraStakingsDocument,
    options
  );
}
export function useGetEraStakingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetEraStakingsQuery, GetEraStakingsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEraStakingsQuery, GetEraStakingsQueryVariables>(
    GetEraStakingsDocument,
    options
  );
}
export type GetEraStakingsQueryHookResult = ReturnType<typeof useGetEraStakingsQuery>;
export type GetEraStakingsLazyQueryHookResult = ReturnType<typeof useGetEraStakingsLazyQuery>;
export type GetEraStakingsQueryResult = Apollo.QueryResult<
  GetEraStakingsQuery,
  GetEraStakingsQueryVariables
>;
export function refetchGetEraStakingsQuery(variables?: GetEraStakingsQueryVariables) {
  return { query: GetEraStakingsDocument, variables: variables };
}
export const GetStakingChroniclesDocument = gql`
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

/**
 * __useGetStakingChroniclesQuery__
 *
 * To run a query within a React component, call `useGetStakingChroniclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStakingChroniclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStakingChroniclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStakingChroniclesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetStakingChroniclesQuery,
    GetStakingChroniclesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetStakingChroniclesQuery, GetStakingChroniclesQueryVariables>(
    GetStakingChroniclesDocument,
    options
  );
}
export function useGetStakingChroniclesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStakingChroniclesQuery,
    GetStakingChroniclesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetStakingChroniclesQuery, GetStakingChroniclesQueryVariables>(
    GetStakingChroniclesDocument,
    options
  );
}
export type GetStakingChroniclesQueryHookResult = ReturnType<typeof useGetStakingChroniclesQuery>;
export type GetStakingChroniclesLazyQueryHookResult = ReturnType<
  typeof useGetStakingChroniclesLazyQuery
>;
export type GetStakingChroniclesQueryResult = Apollo.QueryResult<
  GetStakingChroniclesQuery,
  GetStakingChroniclesQueryVariables
>;
export function refetchGetStakingChroniclesQuery(variables?: GetStakingChroniclesQueryVariables) {
  return { query: GetStakingChroniclesDocument, variables: variables };
}
