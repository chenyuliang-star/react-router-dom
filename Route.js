import React, { Component } from "react";
import RouteContext from "./RouteContext";
import pathToRegexp from "path-to-regexp";

export default class Route extends Component {
    constructor (props) {
        super(props);
        const { src } = this.props;
        this.key = [];
        this.regexp = pathToRegexp(src, this.key, { end: false }) //生成正则
        this.key = this.key.map( (user) => (user.name) ); //获取:id :name这样的
    }

    render () {
        const { src, component: Component, render } = this.props;

        return (
            <RouteContext.Consumer >
               {
                   (context) => {
                       const { pathname } = context.location;
                       let result;
                       if (pathname)  result = pathname.match(this.regexp); //看是否匹配成功
    
                       if (result) {
                           const [url, ...values] = result; //如果成功那么就把match里面的一些属性生成，
                           const match = {
                               ...context.match,
                               url,
                               path: src,
                               params: this.key.reduce((memo, v, index) => {
                                   memo[v]  = values[index];
                                    
                                   return memo;
                               }, {})
                           }//返回component属性里面的组件
                           const props = {
                               location: context.location,
                               history: context.history,
                               match: match
                           }
                           if (Component) {
                              return <Component location = { context.location } history = { context.history } match = { match }/>
                           } else if (render) {
                               return render(props);
                           } else {
                               return null;
                           }
                       } else {
                           return null;
                       }
                    //    if ( pathname && (pathname === src || pathname.startsWith(src))) return <Component location = { context.location } history = { context.history }/>;
                    //    else return null;
                   }
               } 
            </RouteContext.Consumer>
        )
    }
}