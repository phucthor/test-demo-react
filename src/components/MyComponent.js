// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {

    render(){
        const myInfor = ['ab', 'c', 'd'];
        return (
            <div> 
                <UserInfor/>
                <br/><br/>
                <DisplayInfor name='Tommy' age='39'/>
                <hr/>
                <DisplayInfor name={'Guffy'} age={21} myInfor={myInfor} />
            </div>
            
        );
    }
}


export default MyComponent;