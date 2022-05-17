/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      price
      cat
      csere
      tradetype
      email
      phone
      irszam
      telepules
      jaras
      megye
      images
      ownerid
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        price
        cat
        csere
        tradetype
        email
        phone
        irszam
        telepules
        jaras
        megye
        images
        ownerid
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const productsByDate = /* GraphQL */ `
  query ProductsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        price
        cat
        csere
        tradetype
        email
        phone
        irszam
        telepules
        jaras
        megye
        images
        ownerid
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
