import React, { Component } from "react";

export default class UserAdd extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            idValue: "",
            nameValue: ""
        }
        this.handleIdValue = this.handleIdValue.bind(this);
        this.handleNameValue = this.handleNameValue.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleIdValue (e) {
        this.setState({
            idValue: e.target.value
        })
    }
    handleNameValue (e) {
        this.setState({
            nameValue: e.target.value
        })
    }
    handleClick (e) {
        e.preventDefault();
       // console.log({ id: this.state.idValue, name: this.state.nameValue });
       // console.log("保存下来");
        //使用localStorage存下来
        const user = {
            id: this.state.idValue,
            name: this.state.nameValue
        }
        const userArr = localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")) : [];
       
        userArr.push(user);
        localStorage.setItem("users", JSON.stringify(userArr));
        this.props.history.push(e, "/mainpage/usershow");
    }
    render () {
        return (
            <div>
                <form>
                    <label htmlFor = "id" >用户ID</label>
                    <input 
                       id = "id" 
                       value = { this.state.idValue } 
                       onChange = { (e) => { this.handleIdValue(e) } } 
                       placeholder = "请输入id"
                    />
                    <label htmlFor = "name" >用户名字</label>
                    <input 
                       id = "name" 
                       value = { this.state.nameValue } 
                       onChange = { (e) => { this.handleNameValue(e) } } 
                       placeholder = "请输入名字"
                    />
                    <input 
                        type = "submit" 
                        onClick = { (e) => { this.handleClick(e) } }
                    />
                </form>
            </div>
        )
    }
}