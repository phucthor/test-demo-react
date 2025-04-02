import React from "react";
import './DisplayInfor.scss';
class DisplayInfor extends React.Component {
    
    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
    //destructuring array/object
    const { listUsers } = this.props; //object
    // console.log(listUsers);
    // console.table(listUsers);
    //const listUser = this.props.listUsers;
    
    return (
      <div>
        <div className='display-infor-container'>
            <span onClick={() => {this.handleShowHide()}}>
                {this.state.isShowListUser === true ? 'Hide User List' : 'Show User List'}</span>
        </div>
        {this.state.isShowListUser &&
            <div>
            {listUsers.map((user, index) => {
                console.log(">>> check map user: ", user);

                return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                    <div style={{ color:'pink', paddingTop: '50px'}}>My name's {user.name}</div>
                    <div>My age's {user.age} </div>
                    <hr />
                </div>
                );
            })}
            </div>
        }
      </div>
    );
  }
}

export default DisplayInfor;
