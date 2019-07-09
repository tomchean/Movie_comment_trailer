import { gql } from 'apollo-boost'

export const COMMENTS_SUBSCRIPTION = gql`
  subscription comments($movieid:String!){
    comments( query:$movieid) {
      mutation
      data {
        content
        stars
        id
        movieid
      }
    }
  }
`
export const FAVORITE_SUBSCRIPTION = gql`
  subscription users($userId:String!){
    users(query:$userId){
      mutation
      data {
        userId
        favorite{
          movie_poster
          movie_title
          movieid
        }       
      }
    }
  }
`