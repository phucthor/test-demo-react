import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiServices";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async() => {
    // validate
    const isValidEmail = validateEmail(email);
    // console.log('CHECKKKKKKKKKKKKKKKK email', isValidEmail);
    if (!isValidEmail) {
      toast.error("Invalid email format");
      return;
    }

    if (!password || password.length < 6) {
      toast.error("Invalid password");
      return;
    }

    setIsLoading(true);
    // call api
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
      setIsLoading(false);
    }
  }
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account?</span>
        <button onClick={() => navigate('/register')}>Sign up</button>
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
            disabled={isLoading}
          >
            {isLoading === true && 
              <ImSpinner10 className='loader-icon'/>
            }
            <span>Login to Tommy React</span>
          </button>
        </div>
        <div className="text-center">
          <span className='back' onClick={() => { navigate('/')}}>&#8920;Go to HomePage</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
