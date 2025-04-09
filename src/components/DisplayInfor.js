import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';
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
            <img src={logo} alt="logo" className="logo" />
            <span onClick={() => {this.handleShowHide()}}>
                {this.state.isShowListUser === true ? 'Hide User List' : 'Show User List'}</span>
        </div>
        {this.state.isShowListUser &&
            <>
            {listUsers.map((user, index) => {
                console.log(">>> check map user: ", user);

                return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                    <div>My name's {user.name}</div>
                    <div>My age's {user.age} </div>
                    <hr />
                </div>
                );
            })}
            </>
        }
      </div>
    );
  }
}

export default DisplayInfor;
