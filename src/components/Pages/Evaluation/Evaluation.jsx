import React, { Component } from "react";
import {  Mutation } from 'react-apollo'

import {
    CREATE_COMMENT_MUTATION,
    CREATE_FAVORITE_MUTATION
} from '../../../graphql'

import "./Evaluation.css";
export default class SearchBar extends Component {
    static defaultProps = {
        canClick: true,
        rateNum: 10,
        handleSelectRate: null,
        rateValue: 0
    }

    constructor (props) {
        super(props)
        this.state = {
            comment: '',
            rateValue: 0,
            rateArray: new Array(Number(props.rateNum)).fill(''),
            click:false
        }
    }

    handleSelectRate (value) {
        if (!this.props.canClick) {
            return
        }
        this.setState({
            rateValue: value
        })
        this.props.handleSelectRate && this.props.handleSelectRate(value)
    }
    handleSubmit = ()=>{
        if(!this.state.comment || !this.state.rateValue) return;
        this.createcomment({
            variables:{
                content: this.state.comment,
                stars: this.state.rateValue,
                movieid: parseInt(this.props.movie.id)
            }
        })
        this.setState({
            comment: '',
            rateValue: 0,
            rateArray: new Array(Number(this.props.rateNum)).fill('')
        })
    }


    handleLike = (e) =>{
        if (this.state.click===false){
            this.createfavorite({
                variables:{
                    userId:this.props.userId,
                    movie_poster:this.props.movie.poster_path,
                    movie_title:this.props.movie.original_title,
                    movieid:this.props.movie.id,
                }
            })
            this.setState({
                click:true
            })
        } 
        /*else {
            this.setState({
                click:false
            })
        }*/
    }

    render () {
        const {rateArray, rateValue} = this.state
        const {rateNum} = this.props
        let style ={opacity: "0.3"}
        if(this.state.click===true) style ={opacity: "1.0"}
        return (
            <Mutation mutation={CREATE_COMMENT_MUTATION}>
            {   
                createcomment =>{
                    this.createcomment = createcomment;
                    return(
                        <div style={{padding:'20px'}}>
                            <div className="title_container">
                                <textarea 
                                    name="title"
                                    value={this.state.comment}
                                    id="title"
                                    placeholder="Post title..."
                                    onChange={e =>
                                        this.setState({ comment: e.target.value })
                                    }
                                ></textarea>
                            </div>
                            <div className="rate">
                                <div className="rate__bg">
                                    {rateArray.map((item, index) => <span onClick={() => this.handleSelectRate(index+1)} key={`rate_${index}`}>☆</span>)}
                                    <div className="bg__realrate" style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                        {rateArray.map((item, index) => <span onClick={() => this.handleSelectRate(index+1)} key={`rate_selected_${index}`}>★</span>)}
                                    </div>
                                </div>
                                <button className="evalution-send" onClick={this.handleSubmit}>send</button>
                                {
                                    this.props.userId ? 
                                        <Mutation mutation={CREATE_FAVORITE_MUTATION}>{
                                            createfavorite =>{
                                                this.createfavorite =createfavorite;
                                                return  <i className="favorite fas fa-heart" onClick={this.handleLike} style={style}></i>
                                            }
                                        }
                                        </Mutation> :null                                         
                                }
                            </div>
                        </div>
                    )
                }
            }
            </Mutation>
        )
    }
}

