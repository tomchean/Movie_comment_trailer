import { gql } from 'apollo-boost'
 
export const COMMENTS_QUERY = gql`
  query comments($movieid:String){
    comments(query:$movieid) {
      content
      stars
      movieid
      id
    }
  }
`
export const FAVORITE_QUERY = gql`
  query  favorites($userId:String){
    favorites(query:$userId) {
      userId
      favorite{
        movie_poster
        movie_title
        movieid
      }
    }
  }
`
