import React, { Component } from "react";

export default class UserDetail extends Component {
    constructor (props) {
        super(props);
        const users = JSON.parse(localStorage.getItem("users"));
        this.state = {};
        users.map( (item) => {
            if (item.id == this.props.match.params.id) {
                this.state.user = item;
            }
        })
    }
    
    render () {
        return (
            <div>{
                this.state.user?<p>{ `id: ${ this.state.user.id } 姓名: ${ this.state.user.name }` }</p>: null
            }
                
            </div>
        )
    }
}