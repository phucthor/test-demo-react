import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";
import { use } from "react";

// stateless, stateful

const DisplayInfor = (props) => {
  const { listUsers } = props; //object
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log(">>> call render: 3");

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("You deleted all users!");
    }
    console.log(">>> call render: usseEffect: 1");
  }, [listUsers]);

  return (
    <div>
      <div className="display-infor-container"></div>
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide List User" : "Show List User"}
        </span>
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
