import React, {useState} from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

// stateless, stateful
// class DisplayInfor extends React.Component {

//   render() {
//     console.log(">>> call render: 3");
//     //destructuring array/object
//     const { listUsers } = this.props; //object
//     // console.log(listUsers);
//     // console.table(listUsers);
//     //const listUser = this.props.listUsers;

//     return (
//       <div>
//         <div className="display-infor-container">
//         </div>
//         {true && (
//           <>
//             {listUsers.map((user, index) => {
//               // console.log(">>> check map user: ", user);

//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name's {user.name}</div>
//                     <div>My age's {user.age} </div>
//                   </div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props; //object
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  }
  return (
    <div>
      <div className="display-infor-container"></div>
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide List User" : "Show List User"}</span>
      </div>
      {isShowHideListUser && (
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
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfor;
