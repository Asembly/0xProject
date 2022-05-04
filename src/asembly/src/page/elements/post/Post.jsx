import React from "react";
import Avatar from "./Components/Avatar";
import Likes from "./Components/Likes";
import style from "./Post.module.css"

class Post extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.Post}>
                <div className={style.element}>
                    <Likes likes={this.props.likes}/>
                </div>
                
                <p  className={style.item}>
                    {this.props.text}
                </p>
                

                <div className={style.element}>
                    <Avatar avatar={this.props.avatar} likes={this.props.likes}/> 
                </div>
            </div>
        )
    }
}

export default Post;