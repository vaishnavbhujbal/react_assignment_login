import React from "react";

function Form() {
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign-in
      </p>
      <form className="form1" align="center">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
        <br />
        <br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <br/>
        <div className="check">
          <input type="checkbox" />
          <label type="text">Remember me </label>
        </div>
        <br />
        <br />
        <button type="submit" >Submit</button>
        <p className="forgot" align="center">
          <a href="#">Forgot Password? </a>
        </p>
      </form>
    </div>
  );
}

export default Form;
