import React ,{ Component } from "react";
import {Query} from 'react-apollo'
import Comment from "./Comment"
import {
    COMMENTS_QUERY,
    COMMENTS_SUBSCRIPTION
  }from '../../../graphql'

import "./Comments.css";


let unsubscribe = null

export default class Comments extends Component {
    componentWillUnmount(){
        if(unsubscribe){
            unsubscribe()
            unsubscribe = null
        }
            
    }
    render(){
        return (
            <div className="rmdb-grid">
                <input type="checkbox" id={this.props.header} className="collapsegrid-input"></input>
                <label htmlFor={this.props.header} id="collapse_label"><h1>{this.props.header}</h1></label>
                <Query query={COMMENTS_QUERY} variables={{movieid: this.props.movieId}}>
                {({ loading, error, data, subscribeToMore }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <p>Error :(((</p>       
                    const comments = data.comments.map( (comment) =>
                        <Comment key={comment.id} data={comment}></Comment>
                    );
                    if (!unsubscribe)
                        unsubscribe = subscribeToMore({
                        document: COMMENTS_SUBSCRIPTION,
                        variables:{movieid: this.props.movieId},
                        updateQuery: (prev, { subscriptionData }) => {
                            if (!subscriptionData.data) return prev
                            const newPost = subscriptionData.data.comments.data
                            return {
                                ...prev,
                                comments: [newPost, ...prev.comments]
                            }                 
                        }
                    })
                    return <ul className="comment_comtainer">{comments}</ul>
                }}
                </Query>    
            </div>
        );
    }
    
};


