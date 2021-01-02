import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
query {
    repositories{
    edges {
      cursor
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