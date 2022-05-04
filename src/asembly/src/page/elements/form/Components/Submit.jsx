import React from "react";
import style from "./styles/Submit.module.css"

class Submit extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.Submit}>
                <button>{this.props.title}</button>
            </div>
        )
    }

}

export default Submit;