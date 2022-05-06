import React from "react";
import Button from "./Components/Button";
import Header from "./Components/Header";
import style from "./CreaterPost.module.css"

class CreaterPost extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.CreaterPost}>
                <div className={style.element}>
                    <Button/>
                </div>
                <div className={style.element}>
                    <Header/>
                </div>   
            </div>
        );
    }
}

export default CreaterPost;