import React, { Component } from "react";
import RouteContext from "./RouteContext";

export default class Redirect extends Component {

    render () {
        return (
            <RouteContext.Consumer>
                {
                    (context) => {
                        const { push } = context.history;
                        push({}, this.props.to);
                        return null;
                    }
                }
            </RouteContext.Consumer>
        )
    }
}