import "./Register.css";

const Register = () => {
  return (
    <div className="login_main">
      <a href="" className="login_header">
        MOVIETIMELINE.
      </a>
      <a href="" className="sign_up">
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
            className="form_group_signup"
            type="text"
            name="username"
            id="username "
            placeholder="New Username:"
          />
        </div>
        <div>
          <input
            className="form_group_signup"
            type="text"
            name="password"
            id="password "
            placeholder="New Password:"
          />
          <input
            className="form_group_signup"
            type="text"
            name="password"
            id="password "
            placeholder="Confirm Password:"
          />
        </div>
        <button className="login_button" value="Register" src="">
          Register
        </button>
        <p>
          Already have an account?
          <span className="back_to_signin" href="">
            {" "}
            Sign In{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
