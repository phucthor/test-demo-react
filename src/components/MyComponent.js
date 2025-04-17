// class component
// function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Tom", age: "32" },
//       { id: 2, name: "Andy", age: "27" },
//       { id: 3, name: "Maika", age: "18" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     // let listUsersNew = this.state.listUsers;
//     // listUsersNew.unshift(userObj);
//     // this.setState({
//     //   listUsers: listUsersNew,
//     // });

//     // let listUsersClone = [...this.state.listUsers]

//     // console.log('>>>Check data from parent: ', userObj);
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//       // listUsers: [...this.state.listUsers, userObj]
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter(item => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };
//   render() {
//     //DRY: don't repeat yourself
//     return (
//       <>
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Tom", age: "32" },
    { id: 2, name: "Andy", age: "27" },
    { id: 3, name: "Maika", age: "18" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([userObj, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);

    // this.setState({
    //   listUsers: listUsersClone,
    // });
  };
  return (
    <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};
export default MyComponent;
