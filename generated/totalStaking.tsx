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
  CurTotalIssuanceAsc = 'CUR_TOTAL_ISSUANCE_ASC',
  CurTotalIssuanceDesc = 'CUR_TOTAL_ISSUANCE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
}

export type CrowdloanFund = Node & {
  __typename?: 'CrowdloanFund';
  blockNum: Scalars['Int'];
  cap: Scalars['BigFloat'];
  deposit: Scalars['BigFloat'];
  depositor?: Maybe<Scalars['String']>;
  end: Scalars['Int'];
  era: Scalars['Int'];
  firstPeriod: Scalars['Int'];
  id: Scalars['String'];
  isParachain: Scalars['Boolean'];
  lastPeriod: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  paraId: Scalars['Int'];
  raised: Scalars['BigFloat'];
  timestamp: Scalars['Datetime'];
};

/** A filter to be used against `CrowdloanFund` object types. All fields are combined with a logical ‘and.’ */
export type CrowdloanFundFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<CrowdloanFundFilter>>;
  /** Filter by the object’s `blockNum` field. */
  blockNum?: InputMaybe<IntFilter>;
  /** Filter by the object’s `cap` field. */
  cap?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `deposit` field. */
  deposit?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `depositor` field. */
  depositor?: InputMaybe<StringFilter>;
  /** Filter by the object’s `end` field. */
  end?: InputMaybe<IntFilter>;
  /** Filter by the object’s `era` field. */
  era?: InputMaybe<IntFilter>;
  /** Filter by the object’s `firstPeriod` field. */
  firstPeriod?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `isParachain` field. */
  isParachain?: InputMaybe<BooleanFilter>;
  /** Filter by the object’s `lastPeriod` field. */
  lastPeriod?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<CrowdloanFundFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<CrowdloanFundFilter>>;
  /** Filter by the object’s `paraId` field. */
  paraId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `raised` field. */
  raised?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
};

/** A connection to a list of `CrowdloanFund` values. */
export type CrowdloanFundsConnection = {
  __typename?: 'CrowdloanFundsConnection';
  /** A list of edges which contains the `CrowdloanFund` and cursor to aid in pagination. */
  edges: Array<CrowdloanFundsEdge>;
  /** A list of `CrowdloanFund` objects. */
  nodes: Array<Maybe<CrowdloanFund>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CrowdloanFund` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `CrowdloanFund` edge in the connection. */
export type CrowdloanFundsEdge = {
  __typename?: 'CrowdloanFundsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CrowdloanFund` at the end of the edge. */
  node?: Maybe<CrowdloanFund>;
};

/** Methods to use when ordering `CrowdloanFund`. */
export enum CrowdloanFundsOrderBy {
  BlockNumAsc = 'BLOCK_NUM_ASC',
  BlockNumDesc = 'BLOCK_NUM_DESC',
  CapAsc = 'CAP_ASC',
  CapDesc = 'CAP_DESC',
  DepositorAsc = 'DEPOSITOR_ASC',
  DepositorDesc = 'DEPOSITOR_DESC',
  DepositAsc = 'DEPOSIT_ASC',
  DepositDesc = 'DEPOSIT_DESC',
  EndAsc = 'END_ASC',
  EndDesc = 'END_DESC',
  EraAsc = 'ERA_ASC',
  EraDesc = 'ERA_DESC',
  FirstPeriodAsc = 'FIRST_PERIOD_ASC',
  FirstPeriodDesc = 'FIRST_PERIOD_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IsParachainAsc = 'IS_PARACHAIN_ASC',
  IsParachainDesc = 'IS_PARACHAIN_DESC',
  LastPeriodAsc = 'LAST_PERIOD_ASC',
  LastPeriodDesc = 'LAST_PERIOD_DESC',
  Natural = 'NATURAL',
  ParaIdAsc = 'PARA_ID_ASC',
  ParaIdDesc = 'PARA_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RaisedAsc = 'RAISED_ASC',
  RaisedDesc = 'RAISED_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
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

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

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
  crowdloanFund?: Maybe<CrowdloanFund>;
  /** Reads a single `CrowdloanFund` using its globally unique `ID`. */
  crowdloanFundByNodeId?: Maybe<CrowdloanFund>;
  /** Reads and enables pagination through a set of `CrowdloanFund`. */
  crowdloanFunds?: Maybe<CrowdloanFundsConnection>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  staking?: Maybe<Staking>;
  /** Reads a single `Staking` using its globally unique `ID`. */
  stakingByNodeId?: Maybe<Staking>;
  /** Reads and enables pagination through a set of `Staking`. */
  stakings?: Maybe<StakingsConnection>;
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
export type QueryCrowdloanFundArgs = {
  id: Scalars['String'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCrowdloanFundByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** The root query type which gives access points into the data universe. */
export type QueryCrowdloanFundsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<CrowdloanFundFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CrowdloanFundsOrderBy>>;
};

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
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
export type QueryStakingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<StakingFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<StakingsOrderBy>>;
};

export type Staking = Node & {
  __typename?: 'Staking';
  auctionCounter?: Maybe<Scalars['Int']>;
  blockNum: Scalars['Int'];
  id: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  paraChainFunds?: Maybe<Scalars['BigFloat']>;
  paraThreadFunds?: Maybe<Scalars['BigFloat']>;
  stakingAmount: Scalars['BigFloat'];
  timestamp: Scalars['Datetime'];
  totalIssuance: Scalars['BigFloat'];
};

/** A filter to be used against `Staking` object types. All fields are combined with a logical ‘and.’ */
export type StakingFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<StakingFilter>>;
  /** Filter by the object’s `auctionCounter` field. */
  auctionCounter?: InputMaybe<IntFilter>;
  /** Filter by the object’s `blockNum` field. */
  blockNum?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<StakingFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<StakingFilter>>;
  /** Filter by the object’s `paraChainFunds` field. */
  paraChainFunds?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `paraThreadFunds` field. */
  paraThreadFunds?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `stakingAmount` field. */
  stakingAmount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `totalIssuance` field. */
  totalIssuance?: InputMaybe<BigFloatFilter>;
};

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
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  ParaChainFundsAsc = 'PARA_CHAIN_FUNDS_ASC',
  ParaChainFundsDesc = 'PARA_CHAIN_FUNDS_DESC',
  ParaThreadFundsAsc = 'PARA_THREAD_FUNDS_ASC',
  ParaThreadFundsDesc = 'PARA_THREAD_FUNDS_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StakingAmountAsc = 'STAKING_AMOUNT_ASC',
  StakingAmountDesc = 'STAKING_AMOUNT_DESC',
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
      }
    | null
    | undefined;
};

export type GetEraTotalStakingQueryVariables = Exact<{ [key: string]: never }>;

export type GetEraTotalStakingQuery = {
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
              stakingAmount: any;
              totalIssuance: any;
            }
          | null
          | undefined
        >;
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
export const GetEraTotalStakingDocument = gql`
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

/**
 * __useGetEraTotalStakingQuery__
 *
 * To run a query within a React component, call `useGetEraTotalStakingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEraTotalStakingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEraTotalStakingQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEraTotalStakingQuery(
  baseOptions?: Apollo.QueryHookOptions<GetEraTotalStakingQuery, GetEraTotalStakingQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEraTotalStakingQuery, GetEraTotalStakingQueryVariables>(
    GetEraTotalStakingDocument,
    options
  );
}
export function useGetEraTotalStakingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEraTotalStakingQuery,
    GetEraTotalStakingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEraTotalStakingQuery, GetEraTotalStakingQueryVariables>(
    GetEraTotalStakingDocument,
    options
  );
}
export type GetEraTotalStakingQueryHookResult = ReturnType<typeof useGetEraTotalStakingQuery>;
export type GetEraTotalStakingLazyQueryHookResult = ReturnType<
  typeof useGetEraTotalStakingLazyQuery
>;
export type GetEraTotalStakingQueryResult = Apollo.QueryResult<
  GetEraTotalStakingQuery,
  GetEraTotalStakingQueryVariables
>;
export function refetchGetEraTotalStakingQuery(variables?: GetEraTotalStakingQueryVariables) {
  return { query: GetEraTotalStakingDocument, variables: variables };
}
