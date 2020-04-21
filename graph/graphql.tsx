import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Auth = {
  Token: Scalars['String'],
};

export type Bee = {
   __typename?: 'Bee',
  Author: Scalars['String'],
  Name: Scalars['String'],
  PkgName: Scalars['String'],
  Description: Scalars['String'],
  Repo: Scalars['String'],
  Port: Scalars['Int'],
  License: Scalars['String'],
  Keywords: Array<Scalars['String']>,
  DevLang: Scalars['Int'],
  Framework?: Maybe<Framework>,
  Rpcs: Array<Rpc>,
};

export type BeeDetails = {
   __typename?: 'BeeDetails',
  Readme: Scalars['String'],
};

export type BeeReq = {
  Author: Scalars['String'],
  Name: Scalars['String'],
  Auth: Auth,
};

export type Framework = {
   __typename?: 'Framework',
  Author: Scalars['String'],
  Name: Scalars['String'],
};

export type FullBee = {
   __typename?: 'FullBee',
  Bee: Bee,
  Details: BeeDetails,
};

export type Hive = {
   __typename?: 'Hive',
  Author: Scalars['String'],
  Name: Scalars['String'],
  Repo: Scalars['String'],
};

export type Home = {
   __typename?: 'Home',
  Bees: Array<Bee>,
  Hives: Array<Hive>,
};

export type HomeReq = {
  Token: Scalars['String'],
};

export type LoginRes = {
   __typename?: 'LoginRes',
  Status: Scalars['Boolean'],
  TokenErr: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  Login: LoginRes,
  GetHome: Home,
  GetBee: Bee,
  GetBeeDetails: BeeDetails,
  GetFullBee: FullBee,
  Register: RegisterRes,
};


export type QueryLoginArgs = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type QueryGetHomeArgs = {
  input: HomeReq
};


export type QueryGetBeeArgs = {
  input: BeeReq
};


export type QueryGetBeeDetailsArgs = {
  input: BeeReq
};


export type QueryGetFullBeeArgs = {
  input: BeeReq
};


export type QueryRegisterArgs = {
  input: RegisterReq
};

export type RegisterReq = {
  email: Scalars['String'],
  username: Scalars['String'],
  password: Scalars['String'],
  password2: Scalars['String'],
};

export type RegisterRes = {
   __typename?: 'RegisterRes',
  Status: Scalars['Boolean'],
  StatusMessage: Scalars['String'],
};

export type Rpc = {
   __typename?: 'Rpc',
  Name: Scalars['String'],
  Input: Scalars['String'],
  Output: Scalars['String'],
  Line: Scalars['String'],
};

export type LoginQueryVariables = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type LoginQuery = (
  { __typename?: 'Query' }
  & { Login: (
    { __typename?: 'LoginRes' }
    & Pick<LoginRes, 'Status' | 'TokenErr'>
  ) }
);

export type RegisterQueryVariables = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  password2: Scalars['String']
};


export type RegisterQuery = (
  { __typename?: 'Query' }
  & { Register: (
    { __typename?: 'RegisterRes' }
    & Pick<RegisterRes, 'Status' | 'StatusMessage'>
  ) }
);

export type GetHomeQueryVariables = {
  token: Scalars['String']
};


export type GetHomeQuery = (
  { __typename?: 'Query' }
  & { GetHome: (
    { __typename?: 'Home' }
    & { Bees: Array<(
      { __typename?: 'Bee' }
      & Pick<Bee, 'Author' | 'Description' | 'DevLang' | 'Keywords' | 'License' | 'Name' | 'PkgName' | 'Port' | 'Repo'>
      & { Framework: Maybe<(
        { __typename?: 'Framework' }
        & Pick<Framework, 'Author' | 'Name'>
      )>, Rpcs: Array<(
        { __typename?: 'Rpc' }
        & Pick<Rpc, 'Name' | 'Input' | 'Output' | 'Line'>
      )> }
    )>, Hives: Array<(
      { __typename?: 'Hive' }
      & Pick<Hive, 'Author' | 'Name' | 'Repo'>
    )> }
  ) }
);

export type GetFullBeeQueryVariables = {
  token: Scalars['String'],
  author: Scalars['String'],
  name: Scalars['String']
};


export type GetFullBeeQuery = (
  { __typename?: 'Query' }
  & { GetFullBee: (
    { __typename?: 'FullBee' }
    & { Bee: (
      { __typename?: 'Bee' }
      & Pick<Bee, 'Author' | 'Description' | 'DevLang' | 'Keywords' | 'License' | 'Name' | 'PkgName' | 'Port' | 'Repo'>
      & { Framework: Maybe<(
        { __typename?: 'Framework' }
        & Pick<Framework, 'Author' | 'Name'>
      )>, Rpcs: Array<(
        { __typename?: 'Rpc' }
        & Pick<Rpc, 'Name' | 'Input' | 'Output' | 'Line'>
      )> }
    ), Details: (
      { __typename?: 'BeeDetails' }
      & Pick<BeeDetails, 'Readme'>
    ) }
  ) }
);

export type GetBeeDetailsQueryVariables = {
  token: Scalars['String'],
  author: Scalars['String'],
  name: Scalars['String']
};


export type GetBeeDetailsQuery = (
  { __typename?: 'Query' }
  & { GetBeeDetails: (
    { __typename?: 'BeeDetails' }
    & Pick<BeeDetails, 'Readme'>
  ) }
);


export const LoginDocument = gql`
    query login($username: String!, $password: String!) {
  Login(username: $username, password: $password) {
    Status
    TokenErr
  }
}
    `;
export type LoginComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LoginQuery, LoginQueryVariables>, 'query'> & ({ variables: LoginQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Query<LoginQuery, LoginQueryVariables> query={LoginDocument} {...props} />
    );
    
export type LoginProps<TChildProps = {}> = ApolloReactHoc.DataProps<LoginQuery, LoginQueryVariables> & TChildProps;
export function withLogin<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginQuery,
  LoginQueryVariables,
  LoginProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, LoginQuery, LoginQueryVariables, LoginProps<TChildProps>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};
export type LoginQueryResult = ApolloReactCommon.QueryResult<LoginQuery, LoginQueryVariables>;
export const RegisterDocument = gql`
    query register($username: String!, $email: String!, $password: String!, $password2: String!) {
  Register(input: {username: $username, email: $email, password: $password, password2: $password2}) {
    Status
    StatusMessage
  }
}
    `;
export type RegisterComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RegisterQuery, RegisterQueryVariables>, 'query'> & ({ variables: RegisterQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Query<RegisterQuery, RegisterQueryVariables> query={RegisterDocument} {...props} />
    );
    
export type RegisterProps<TChildProps = {}> = ApolloReactHoc.DataProps<RegisterQuery, RegisterQueryVariables> & TChildProps;
export function withRegister<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterQuery,
  RegisterQueryVariables,
  RegisterProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RegisterQuery, RegisterQueryVariables, RegisterProps<TChildProps>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};
export type RegisterQueryResult = ApolloReactCommon.QueryResult<RegisterQuery, RegisterQueryVariables>;
export const GetHomeDocument = gql`
    query getHome($token: String!) {
  GetHome(input: {Token: $token}) {
    Bees {
      Author
      Description
      DevLang
      Framework {
        Author
        Name
      }
      Keywords
      License
      Name
      PkgName
      Port
      Repo
      Rpcs {
        Name
        Input
        Output
        Line
      }
    }
    Hives {
      Author
      Name
      Repo
    }
  }
}
    `;
export type GetHomeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetHomeQuery, GetHomeQueryVariables>, 'query'> & ({ variables: GetHomeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetHomeComponent = (props: GetHomeComponentProps) => (
      <ApolloReactComponents.Query<GetHomeQuery, GetHomeQueryVariables> query={GetHomeDocument} {...props} />
    );
    
export type GetHomeProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetHomeQuery, GetHomeQueryVariables> & TChildProps;
export function withGetHome<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetHomeQuery,
  GetHomeQueryVariables,
  GetHomeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetHomeQuery, GetHomeQueryVariables, GetHomeProps<TChildProps>>(GetHomeDocument, {
      alias: 'getHome',
      ...operationOptions
    });
};
export type GetHomeQueryResult = ApolloReactCommon.QueryResult<GetHomeQuery, GetHomeQueryVariables>;
export const GetFullBeeDocument = gql`
    query getFullBee($token: String!, $author: String!, $name: String!) {
  GetFullBee(input: {Auth: {Token: $token}, Author: $author, Name: $name}) {
    Bee {
      Author
      Description
      DevLang
      Framework {
        Author
        Name
      }
      Keywords
      License
      Name
      PkgName
      Port
      Repo
      Rpcs {
        Name
        Input
        Output
        Line
      }
    }
    Details {
      Readme
    }
  }
}
    `;
export type GetFullBeeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetFullBeeQuery, GetFullBeeQueryVariables>, 'query'> & ({ variables: GetFullBeeQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetFullBeeComponent = (props: GetFullBeeComponentProps) => (
      <ApolloReactComponents.Query<GetFullBeeQuery, GetFullBeeQueryVariables> query={GetFullBeeDocument} {...props} />
    );
    
export type GetFullBeeProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetFullBeeQuery, GetFullBeeQueryVariables> & TChildProps;
export function withGetFullBee<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetFullBeeQuery,
  GetFullBeeQueryVariables,
  GetFullBeeProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetFullBeeQuery, GetFullBeeQueryVariables, GetFullBeeProps<TChildProps>>(GetFullBeeDocument, {
      alias: 'getFullBee',
      ...operationOptions
    });
};
export type GetFullBeeQueryResult = ApolloReactCommon.QueryResult<GetFullBeeQuery, GetFullBeeQueryVariables>;
export const GetBeeDetailsDocument = gql`
    query getBeeDetails($token: String!, $author: String!, $name: String!) {
  GetBeeDetails(input: {Auth: {Token: $token}, Author: $author, Name: $name}) {
    Readme
  }
}
    `;
export type GetBeeDetailsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBeeDetailsQuery, GetBeeDetailsQueryVariables>, 'query'> & ({ variables: GetBeeDetailsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetBeeDetailsComponent = (props: GetBeeDetailsComponentProps) => (
      <ApolloReactComponents.Query<GetBeeDetailsQuery, GetBeeDetailsQueryVariables> query={GetBeeDetailsDocument} {...props} />
    );
    
export type GetBeeDetailsProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetBeeDetailsQuery, GetBeeDetailsQueryVariables> & TChildProps;
export function withGetBeeDetails<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBeeDetailsQuery,
  GetBeeDetailsQueryVariables,
  GetBeeDetailsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetBeeDetailsQuery, GetBeeDetailsQueryVariables, GetBeeDetailsProps<TChildProps>>(GetBeeDetailsDocument, {
      alias: 'getBeeDetails',
      ...operationOptions
    });
};
export type GetBeeDetailsQueryResult = ApolloReactCommon.QueryResult<GetBeeDetailsQuery, GetBeeDetailsQueryVariables>;