import React from "react";
import style from "./styles/Avatar.module.css"

class Avatar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.Avatar}>
                <img src={this.props.avatar}/>
            </div>
        )
    }
}

export default Avatar;