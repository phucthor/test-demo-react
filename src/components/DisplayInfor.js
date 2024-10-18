import React from "react";

class DisplayInfor extends React.Component{
    render() {
        //destructuring array/object
        const { listUsers } = this.props; //object
        console.log(listUsers);
        //const listUser = this.props.listUsers;

        return (
            <div>
                { listUsers.map((user, index) => {
                    console.log(index);
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age} </div>
                            <hr/>   
                        </div>
                    )
                })}
                {/* <div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr/>
                <div>My name's {name}</div>
                <div>My age's {age}</div>
                <hr/>
                <div>My name's {name}</div>
                <div>My age's {age}</div> */}
            </div>
        );
    }
}

export default DisplayInfor;