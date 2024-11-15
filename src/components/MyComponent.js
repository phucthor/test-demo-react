// class component
// function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name: 'Tom', age: '32'},
            {id: 2, name: 'Andy', age: '27'},
            {id: 3, name: 'Joli', age: '18'}
        ]
    }

    handleAddNewUser = (userObj) => {
        let listUsersNew = this.state.listUsers;
        listUsersNew.unshift(userObj);
        this.setState({
            listUsers: listUsersNew
        })

        // let listUsersClone = [...this.state.listUsers]

        // console.log('>>>Check data from parent: ', userObj);
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        //     listUsers: [...this.state.listUsers, userObj]
        // })
    }
    render(){
        //DRY: don't repeat yourself
        return (
            <div> 
                <AddUserInfor 
                    handleAddNewUser = {this.handleAddNewUser}
                />
                <br/><br/>
                <DisplayInfor 
                    listUsers={this.state.listUsers}
                />
            </div>
            
        );
    }
}


export default MyComponent;