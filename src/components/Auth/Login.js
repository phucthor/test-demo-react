import "./Login.scss";
import { useState } from "react";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("click login");
  }
  return (
    <div className="login-container">
      <div className="header">
        Don't have an account? <span>Sign up</span>
      </div>
      <div className="title col-4 mx-auto">Tommy React</div>
      <div className="welcome col-4 mx-auto">Hello, who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type={"password"}
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <span className="forgot-password">Forgot your password?</span>
        <div>
          <button
            className="btn-submit"
            onClick={() => handleLogin()}
          >
            Login to Tommy React
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
