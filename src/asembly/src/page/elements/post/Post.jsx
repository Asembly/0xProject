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
                    <Likes likes={this.props.likes}/>
                    {this.props.text}
                    <Avatar avatar={this.props.avatar} likes={this.props.likes}/>
            </div>
        )
    }
}

export default Post;