import React, { Component } from "react";
import RouteContext from "./RouteContext";
 

export default class HashRouter extends Component {
    constructor (props) {
        super(props);
        this.state = { location: {}, history: {}, match: {}};
        this.handleHash = this.handleHash.bind(this);
    }
    handleHash () {
        const hash = window.location.hash.slice(1); //获取#后面的路径
        this.setState( (perProps, perState) => {
            return {
                ...perState,
                location: {
                   ...perState.location,
                   pathname: hash  //也就是pathname里面的值
                },
                history: {
                    ...perState.history,
                    push: (event, pa ) => { //push函数很简单，就是改变当前window下面的hash
                         
                        if (typeof  pa !== "object") {
                            event.preventDefault();
                            window.location.hash =  pa;
                        } else {

                            const { pathname, state } =  pa;

                            this.setState((perProps, perState) => {
                                return {
                                    ...perState,
                                location: {
                                    ...perState.location,
                                    state
                                }
                                }
                                 
                            }, () => {
                                window.location.hash = pathname;
                            }) 
                        }
                    }
                }
            }
        })
    }
    componentDidMount () {
       // window.location.hash = window.location.hash || "/";
        this.handleHash();
        window.addEventListener("hashchange", () => { //在window上注册hashchange事件
            this.handleHash();
        } )
         
    }
    render () {
        return (<RouteContext.Provider value = { this.state } > 
            { this.props.children } 
        </RouteContext.Provider>)
    }
}


 