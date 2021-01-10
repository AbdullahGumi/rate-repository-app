import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
    repositories{
    edges {
      node{
        fullName
        description
        ownerAvatarUrl
        stargazersCount
        forksCount
        ratingAverage
        reviewCount
        language
      }
    }
  }
}
`;

export const GET_USER = gql`
query{
  authorizedUser {
    id
    username
  }
}
`;

export const GET_REPOSITORIY = gql`
query repository($id: ID!){
  repository(id: $id){
    id
    fullName
    url
    description
    language
    ratingAverage
    forksCount
    stargazersCount
    ownerAvatarUrl
    reviewCount
  }
}
`

export const GET_REPOSITORIY_REVIEWS = gql`
query repository($id: ID!){
  repository(id: $id){
    id
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`