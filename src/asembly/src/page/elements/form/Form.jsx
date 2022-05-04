import React from "react";
import Header from "./Components/Header"
import Input from "./Components/Input";
import Submit from "./Components/Submit";
import style from "./Form.module.css"

const Data = {
    Button:{
        log_in:"Log In",
        register:"Register",
    },
    Input:{
        placeholders:{
            email:"Enter Email",
            password:"Enter Password",
            login:"Enter Login"
        }
    },
    Header:{
        title:{
            register:"Registration",
            Log_in:"Log In"
        }
    }
}

class Form extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={style.Form}>
                <Header title={Data.Header.title.register}/>
                <Input placeholder={Data.Input.placeholders.login}/>
                <Input placeholder={Data.Input.placeholders.email}/>
                <Input placeholder={Data.Input.placeholders.password}/>
                <Submit title={Data.Button.register}/>
            </div>
        )
    }

}

export default Form;