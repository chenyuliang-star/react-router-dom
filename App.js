import React, { Component } from "react";
import HashRouter from "./HashRouter";
import Link from "./Link";

export default class App extends Component {

    render () {
        return (
            <HashRouter >
                <div>
                    <span>管理系统</span>
                    <Link to = "/mainpage" >主页面</Link>
                    <Link to = "/home" >个人页面</Link>
                    <Link to = "" />
                </div>
                { this.props.children }
            </HashRouter>
        )
    }
}