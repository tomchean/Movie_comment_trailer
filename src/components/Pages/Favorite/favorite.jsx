import React ,{ Component } from "react";
import {Query} from 'react-apollo'
import {FAVORITE_QUERY, FAVORITE_SUBSCRIPTION}from '../../../graphql'
import "./favorite.css";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";
import FourGrid from "../FourGrid/FourGrid";
import { POSTER_SIZE, IMAGE_BASE_URL } from "../../../configurations/config";
import noImage from "./../../../no_image.jpg";

let unsubscribe = null
let myrefetch = null
export default class Favorite extends Component {

    componentWillUnmount(){
        if(unsubscribe){
            unsubscribe()
            unsubscribe = null
        } 
    }
    componentDidMount(){
        if(myrefetch != null)  myrefetch()
    }
    render(){ 
        if(this.props.id !== null ){
            return (                
                <Query query={FAVORITE_QUERY} variables={{userId:this.props.id}}>
                {({ loading, error, data, subscribeToMore,refetch }) => {
                    myrefetch = refetch
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error :(((</p>  
                    const userFavorite = data.favorites.favorite.map( movie =>{
                        return(
                            <MovieThumbnail
                                key={movie.movieid}
                                clickable={true}
                                image={
                                    movie.movie_poster
                                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${
                                            movie.movie_poster
                                        }`
                                        : noImage
                                }
                                movieId={movie.movieid}
                                movieName={movie.movie_title}
                        />
                        )
                    }                        
                    );
                    if (!unsubscribe)
                        unsubscribe = subscribeToMore({
                        document: FAVORITE_SUBSCRIPTION,
                        variables:{userId:this.props.id},
                        updateQuery: (prev, { subscriptionData }) => {
                            console.log('update')
                            if (!subscriptionData.data.users.data) return prev
                            return {
                                ...prev,
                                favorites:{
                                    ...prev.favorites,
                                    favorite:subscriptionData.data.users.data.favorite
                                }
                            }                 
                        }
                    })
                    return (
                        <FourGrid
                        header={null}
                        loading={null}
                        >{userFavorite}</FourGrid>
                    )
                }}
                </Query> 
            );
        }
        
        else return (
            <div>null</div>
        )
    }
    
};
