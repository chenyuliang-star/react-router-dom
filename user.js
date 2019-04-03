import React, { Component } from "react";
import Link from "./Link";
import Route from "./Route";
import UserAdd from "./UserAdd";
import Usershow from "./UserShow";
import UserDetail from "./UserDetail";

export default class User extends Component {

    render () {
        return (
            <div>
                <span></span>
                <Link to = "/mainpage/useradd" >用户添加</Link>
                <Link to = "/mainpage/usershow" >用户展示</Link>
                 {/* <a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" /> </a> */}
                <Route src = "/mainpage/useradd" component = { UserAdd } />
                <Route src = "/mainpage/usershow" component = { Usershow } />
                <Route src = "/mainpage/userdetail/:id" component = { UserDetail } />
            </div>
        )
    }
}