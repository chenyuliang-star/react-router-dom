import React, { Component } from "react";
import Link from "./Link";

export default class UserShow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount () {
        const users = JSON.parse(localStorage.getItem("users"));
        this.setState({
            users: users || []
        })
    }
    render () {
        return (
            <div>
                <ul>
                    {
                        this.state.users.map( (item) => {
                            return (<li key = { item.id }><Link to = { `/mainpage/userdetail/${ item.id }` }>{ item.id }</Link></li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}