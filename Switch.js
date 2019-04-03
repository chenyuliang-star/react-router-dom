
import React, { Component } from "react";
import RouteContext from "./RouteContext";
import pathToRegexp from "path-to-regexp";
export default class Switch extends Component {//作用匹配唯一一个路由

    render () {
        const children = this.props.children;
        return (
           <RouteContext.Consumer>
               {
                   (context) => {
                       const { pathname } = context.location;
                       for (let i = 0; i < children.length; i++) { //如果匹配到第一个就返回
                           let child = children[i];
                           const { src } = child.props;
                           const regexp = pathToRegexp(src, [], { end: false });
                           if (regexp.test(pathname)) return child;
                       }
                   }
               }
           </RouteContext.Consumer>
        )
    }
}