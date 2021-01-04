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