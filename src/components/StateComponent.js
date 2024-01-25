import React from "react";
class StateComponent extends React.Component {
    constructor(props) {
        super()//act as constructor
        this.state = {
            name: props.name,
            course: props.course,
            dept: props.dept
        }
    }
    changeState = (params) => {
        this.setState((prevState)=>({
            name:"Kongu Engineering College"
        }))
    }
    render() {
        return (
            <div>
                <h1 style={{"color":"red"}}>This is state component</h1>
                <h2>hello,{this.state.name} and the course is {this.state.course} in {this.state.dept}</h2>
                <h3>I am changing the state of the {this.state.name}  {this.changeState()}</h3>
                <button onClick={this.changeState}>Submit</button></div>
        )
    }
}
export default StateComponent;