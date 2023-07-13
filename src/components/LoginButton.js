import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const LoginButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={faRightToBracket} />
    </button>
  );
};

export default LoginButton;
