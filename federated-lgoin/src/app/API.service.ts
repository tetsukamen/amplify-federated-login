/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreatePictureInput = {
  type: string;
  id?: string | null;
  bucket: string;
  key: string;
  region: string;
};

export type ModelPictureConditionInput = {
  type?: ModelStringInput | null;
  bucket?: ModelStringInput | null;
  key?: ModelStringInput | null;
  region?: ModelStringInput | null;
  and?: Array<ModelPictureConditionInput | null> | null;
  or?: Array<ModelPictureConditionInput | null> | null;
  not?: ModelPictureConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Picture = {
  __typename: "Picture";
  type: string;
  id?: string | null;
  bucket: string;
  key: string;
  region: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePictureInput = {
  type?: string | null;
  id: string;
  bucket?: string | null;
  key?: string | null;
  region?: string | null;
};

export type DeletePictureInput = {
  id: string;
};

export type ModelPictureFilterInput = {
  type?: ModelStringInput | null;
  id?: ModelIDInput | null;
  bucket?: ModelStringInput | null;
  key?: ModelStringInput | null;
  region?: ModelStringInput | null;
  and?: Array<ModelPictureFilterInput | null> | null;
  or?: Array<ModelPictureFilterInput | null> | null;
  not?: ModelPictureFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPictureConnection = {
  __typename: "ModelPictureConnection";
  items?: Array<Picture | null> | null;
  nextToken?: string | null;
};

export type CreatePictureMutation = {
  __typename: "Picture";
  type: string;
  id?: string | null;
  bucket: string;
  key: string;
  region: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePictureMutation = {
  __typename: "Picture";
  type: string;
  id?: string | null;
  bucket: string;
  key: string;
  region: string;
  createdAt: string;
  updatedAt: string;
};

export type DeletePictureMutation = {
  __typename: "Picture";
  type: string;
  id?: string | null;
  bucket: string;
  key: string;
  region: string;
  createdAt: string;
  updatedAt: string;
};

export type GetPictureQuery = {
  __typename: "Picture";
  type: string;
  id?: string | null;
  bucket: string;
  key: string;
  region: string;
  createdAt: string;
  updatedAt: string;
};

export type ListPicturesQuery = {
  __typename: "ModelPictureConnection";
  items?: Array<{
    __typename: "Picture";
    type: string;
    id?: string | null;
    bucket: string;
    key: string;
    region: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreatePictureSubscription = {
  __typename: "Picture";
  type: string;
  id?: string | null;
  bucket: string;
  key: string;
  region: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePictureSubscription = {
  __typename: "Picture";
  type: string;
  id?: string | null;
  bucket: string;
  key: string;
  region: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePictureSubscription = {
  __typename: "Picture";
  type: string;
  id?: string | null;
  bucket: string;
  key: string;
  region: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePicture(
    input: CreatePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<CreatePictureMutation> {
    const statement = `mutation CreatePicture($input: CreatePictureInput!, $condition: ModelPictureConditionInput) {
        createPicture(input: $input, condition: $condition) {
          __typename
          type
          id
          bucket
          key
          region
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePictureMutation>response.data.createPicture;
  }
  async UpdatePicture(
    input: UpdatePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<UpdatePictureMutation> {
    const statement = `mutation UpdatePicture($input: UpdatePictureInput!, $condition: ModelPictureConditionInput) {
        updatePicture(input: $input, condition: $condition) {
          __typename
          type
          id
          bucket
          key
          region
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePictureMutation>response.data.updatePicture;
  }
  async DeletePicture(
    input: DeletePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<DeletePictureMutation> {
    const statement = `mutation DeletePicture($input: DeletePictureInput!, $condition: ModelPictureConditionInput) {
        deletePicture(input: $input, condition: $condition) {
          __typename
          type
          id
          bucket
          key
          region
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePictureMutation>response.data.deletePicture;
  }
  async GetPicture(id: string): Promise<GetPictureQuery> {
    const statement = `query GetPicture($id: ID!) {
        getPicture(id: $id) {
          __typename
          type
          id
          bucket
          key
          region
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPictureQuery>response.data.getPicture;
  }
  async ListPictures(
    filter?: ModelPictureFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPicturesQuery> {
    const statement = `query ListPictures($filter: ModelPictureFilterInput, $limit: Int, $nextToken: String) {
        listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            type
            id
            bucket
            key
            region
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPicturesQuery>response.data.listPictures;
  }
  OnCreatePictureListener: Observable<
    SubscriptionResponse<OnCreatePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePicture {
        onCreatePicture {
          __typename
          type
          id
          bucket
          key
          region
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePictureSubscription>>;

  OnUpdatePictureListener: Observable<
    SubscriptionResponse<OnUpdatePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePicture {
        onUpdatePicture {
          __typename
          type
          id
          bucket
          key
          region
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePictureSubscription>>;

  OnDeletePictureListener: Observable<
    SubscriptionResponse<OnDeletePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePicture {
        onDeletePicture {
          __typename
          type
          id
          bucket
          key
          region
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePictureSubscription>>;
}
