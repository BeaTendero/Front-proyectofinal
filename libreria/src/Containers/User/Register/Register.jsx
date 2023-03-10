import React, { useEffect, useState } from "react";
import { errorCheck } from "../../../Services/errorManage";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import EyeIcon from "../../../Componentes/icons/Eyelcon";
import EyeSlashIcon from "../../../Componentes/icons/EyeSlashIcon";
import axios from "axios";

const Register = () => {

  const dataBase = "http://localhost:3008/";

  //Hooks
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    password2Error: "",
  });

  const [disabled, setDisabled] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  const SignIn = async () => {
    try {

      let signIn = await axios.post(dataBase + "auth/register", {
        name: user.name,
        email: user.email,
        password: user.password,
        rolIdrol: "user"
      });

      signIn();



    } catch (error) {
      console.log('registro fallido')
    }




  };

  const inputHandler = (e) => {
    // setUser((prevState) => ({
    //     ...prevState,
    //     [e.target.name]: e.target.value
    // }));
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const userIsNotFilled = Object.values(user).some((property) => {
      return property === "";
    });
    setDisabled(userIsNotFilled || !acceptedTerms);
  }, [user, acceptedTerms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const errorHandler = (field, value, type) => {
    let error = "";
    error = errorCheck(value, type);
    setUserError((prevState) => ({
      ...prevState,
      [field + "Error"]: error,
    }));
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="registerDesign">
      <div className="formRegisterSquare">
        <h1 className="registerTittleDesign">Bienvenido</h1>
        <form onSubmit={SignIn} >
          <input
            type="text"
            name="name"
            className="registerInputs"
            placeholder="Name"
            required
            onChange={inputHandler}
            onInput={(e) => errorHandler(e.target.name, e.target.value, "text")}
          />
          <div className="errorInput">{userError.nameError}</div>
        
          <input
            type="text"
            name="email"
            className="registerInputs"
            placeholder="Email"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "email")
            }
          />
          <div className="errorInput">{userError.emailError}</div>

          <div className="registerInputs inputContainer">
            <input
              className="inputDesign passwordInput"
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={inputHandler}
              onInput={(e) =>
                errorHandler(e.target.name, e.target.value, "password")
              }
            />
            {passwordShown ? (
              <EyeSlashIcon classes="eyeIcon" onClick={togglePassword} />
            ) : (
              <EyeIcon classes="eyeIcon" onClick={togglePassword} />
            )}
          </div>
          <div className="errorInput">{userError.passwordError}</div>
          <input
            type="password"
            name="password2"
            className="registerInputs"
            placeholder="Repeat your password"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "password")
            }
          />
          <div className="errorInput">{userError.password2Error}</div>
          <div className="registerAdviseDesign">

            <input
              type="checkbox"
              defaultChecked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />
            <p>

              He leido la <i>politica</i> de <i>privacidad</i> de la empresa{" "}
            </p>
          </div>
          <br></br>
          <input
            type="submit"
            value="Sign In"
            className="submitButton"
            disabled={disabled}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;