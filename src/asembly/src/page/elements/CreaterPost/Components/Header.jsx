import React from "react";
import style from "./styles/Header.module.css"

class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.Header}>
                <p>
                    Add Post
                </p>
            </div>
        );
    }
}

export default Header;