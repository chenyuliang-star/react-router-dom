import React, { Component } from "react";

export default class Login extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        localStorage.setItem("login", true);
    }

    render () {
        return (
            <div >
                <button onClick = { this.handleClick}>登录</button>
            </div>
        )
    }
}