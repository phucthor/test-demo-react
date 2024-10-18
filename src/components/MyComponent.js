// class component
// function component
import React from "react";
class MyComponent extends React.Component {
    state = {
        name: 'Tom',
        address: 'ONE',
        age: 30
      }

    handleClick(event) {
        console.log(">> Click me my button");
        
        //merge State => React class
        this.setState({
            name: 'Tommy Nguyen',
            age: Math.floor((Math.random()*100) +1)
        })

    }

    handleOnMouseOver(event) {
        // console.log(event.pageX);
    }

    render(){
        return (
            <div> My name is {this.state.name} and I'm {this.state.age}
            <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
            <button onClick={(event) => {(this.handleClick(event))}}>Click me</button>
            </div>
            
        );
    }
}


export default MyComponent;