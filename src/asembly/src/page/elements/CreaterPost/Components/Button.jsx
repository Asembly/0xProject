import React from "react";
import style from "./styles/Button.module.css"

class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.Button}>
                <svg width="37" height="43" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 18.5001C0 16.7972 1.38046 15.4167 3.08333 15.4167H33.9167C35.6195 15.4167 37 16.7972 37 18.5001V18.5001C37 20.203 35.6195 21.5834 33.9167 21.5834H3.08333C1.38046 21.5834 0 20.203 0 18.5001V18.5001Z" fill="#121414"/>
                    <rect x="21.5834" width="37" height="6.16667" rx="3.08333" transform="rotate(90 21.5834 0)" fill="#121414"/>
                    <path d="M0 24.5001C0 22.7972 1.38046 21.4167 3.08333 21.4167H33.9167C35.6195 21.4167 37 22.7972 37 24.5001V24.5001C37 26.203 35.6195 27.5834 33.9167 27.5834H3.08333C1.38046 27.5834 0 26.203 0 24.5001V24.5001Z" fill="#121414" fill-opacity="0.11"/>
                    <rect x="21.5834" y="6" width="37" height="6.16667" rx="3.08333" transform="rotate(90 21.5834 6)" fill="#121414" fill-opacity="0.11"/>
                </svg>
            </div>
        );
    }
}

export default Button;