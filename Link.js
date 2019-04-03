import React, { Component } from "react";
import RouteContext from "./RouteContext";
export default class Link extends Component {

    render () {
        return (
            <RouteContext.Consumer>
            {
                (context) => {
                    const  hashPush  = context.history.push; //简单就是一个a标签，然后就是利用history.push来跳转
                    return <a  href = "#" onClick = { (e) => { hashPush(e, this.props.to)} } >{ this.props.children }</a>
                }
            }    
            </RouteContext.Consumer>
        )
         
    }
}