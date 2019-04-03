import React, { Component } from "react";
import Route from "./Route";
import Redirect from "./Redirect";

export default function Protected({ component: Component, ...res }) { //高阶组件
    return (
        <Route { ...res }  render = { (props) => { //保护路由，检查login字段是否为true
            return localStorage.getItem("login")?<Component { ...props } />:<Redirect to = {{ pathname: `/login`, state: {}}} />
        }} />
    )
}