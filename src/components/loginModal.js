import React from "react";

export default function LoginModal({ handleClose }) {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label for="Email">Email:</label>
        <br></br>
        <input type="text" id="Email" name="Email"></input>
        <br></br>
        <label for="Password">Password:</label>
        <br></br>
        <input type="text" id="Password" name="Password"></input>
        <br></br>
      </form>
      <button onClick={handleClose}>Close</button>
    </div>
  );
}
