import Axios from "axios";
import { useState } from "react";

import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="login_main">
      <a href="" className="login_header">
        MOVIETIMELINE.
      </a>
      <a href="/" className="sign_up">
        Sign In
      </a>
      <div className="signin_background">
        <h1>Sign Up</h1>
        <div>
          <input
            className="form_group_signup"
            type="text"
            name="username"
            id="username "
            placeholder="Email Address"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form_group_signup"
            type="text"
            name="username"
            id="username "
            placeholder="New Username:"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form_group_signup"
            type="password"
            name="password"
            id="password "
            placeholder="New Password:"
          />
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            className="form_group_signup"
            type="password"
            name="password"
            id="password "
            placeholder="Confirm Password:"
          />
        </div>
        <button
          onClick={async () => {
            let data;
            if (password === confirmPassword)
              await Axios.post("/reg", {
                username,
                password,
              }).then((res) => (data = res.data));
            if (data === "1") setStatus("User already exists.");
            else setStatus("Account created!");
          }}
          className="login_button"
          value="Register"
          src=""
        >
          Register
        </button>
        {status}
        <p>
          Already have an account?
          <a className="back_to_signin" href="/">
            {" "}
            Sign In{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
