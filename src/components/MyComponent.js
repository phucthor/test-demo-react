// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name: 'Tom', age: '30'},
            {id: 2, name: 'Andy', age: '27'},
            {id: 3, name: 'Joli', age: '22'}
        ]
    }
    render(){
        //DRY: don't repeat yourself
        return (
            <div> 
                <UserInfor/>
                <br/><br/>
                <DisplayInfor 
                listUsers={this.state.listUsers} 
                />
            </div>
            
        );
    }
}


export default MyComponent;