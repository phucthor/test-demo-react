import React from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>> call constructor: 1");
    super(props); //call constructor of parent class
    this.state = {
      //state: object
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>> call componentDidMount: 2");
    setTimeout(() => {
      document.title = "Hey Tommy";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(">>> call componentDidUpdate: 4", this.props, prevProps);
    if (prevProps.listUsers !== this.props.listUsers) {
      if(this.props.listUsers.length === 5) {
        alert("You got 5 users!");
      }
    }
    if (prevState.isShowListUser !== this.state.isShowListUser) {
      console.log(">>> call componentDidUpdate: 4.2");
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    console.log(">>> call render: 3");
    //destructuring array/object
    const { listUsers } = this.props; //object
    // console.log(listUsers);
    // console.table(listUsers);
    //const listUser = this.props.listUsers;

    return (
      <div>
        <div className="display-infor-container">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide User List"
              : "Show User List"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <>
            {listUsers.map((user, index) => {
              // console.log(">>> check map user: ", user);

              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>
                    <div>My name's {user.name}</div>
                    <div>My age's {user.age} </div>
                  </div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
