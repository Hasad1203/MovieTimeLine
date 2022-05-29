import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="login_main">
      <a href="" className="login_header">
        MOVIETIMELINE.
      </a>
      <a href="/register" className="sign_up">
        Sign up
      </a>
      <div className="login_background">
        <h1>Sign In</h1>

        <div>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form_group"
            type="text"
            name="username"
            id="username "
            placeholder="Username:"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form_group"
            type="password"
            name="password"
            id="password "
            placeholder="Password:"
          />
        </div>
        <button
          onClick={async () => {
            let data;
            await Axios.post("/login", {
              username,
              password,
            }).then((res) => (data = res.data));
            if (data === "1") setStatus("Login unsuccessful.");
            else {
              setStatus("Redirecting...");
              navigate("/movies", {state:{metadata:data}});
            }
          }}
          className="login_button"
          value="LOGIN"
          src=""
        >
          Login
        </button>
        {status}
      </div>
    </div>
  );
};

export default Login;
