import React from "react";
import style from "./styles/Input.module.css"

class Input extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.Input}>
                <input placeholder={this.props.placeholder}/>
            </div>
        )
    }

}

export default Input;