import "./Login.css";

const Login = () => {
  return (
    <div className="login_main">
      <a href="" className="login_header">
        MOVIETIMELINE.
      </a>
      <a href="" className="sign_up">
        Sign up
      </a>
      <div className="login_background">
        <h1>Sign In</h1>

        <div>
          <input
            className="form_group"
            type="text"
            name="username"
            id="username "
            placeholder="Username:"
          />
        </div>
        <div>
          <input
            className="form_group"
            type="text"
            name="password"
            id="password "
            placeholder="Password:"
          />
        </div>
        <button className="login_button" value="LOGIN" src="">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
