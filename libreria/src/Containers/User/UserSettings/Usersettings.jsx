import React, { useEffect, useState } from "react";
import { errorCheck } from "../../../services/errorManage";
import { useNavigate } from "react-router-dom";
import "./Usersettings.scss";
import EyeIcon from "../../../components/icons/EyeIcon";
import EyeSlashIcon from "../../../components/icons/EyeSlashIcon";

import { useSelector } from "react-redux";
import { userData } from "../userSlice";
import { bringUsers, eraseUser, updateUser } from "../../../services/apiCalls"
const UserSettings = () => {

  const userReduxCredentials = useSelector(userData);

  const jwt = userReduxCredentials?.credentials?.jwt;
  //Hooks
  const [user, setUser] = useState({
    name: userReduxCredentials?.credentials?.name,
    email: userReduxCredentials?.credentials?.email,
    password: "",
    password2: "",
  });

  const [userError, setUserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    password2Error: "",
  });


  const [notEmail, setNotEmail] = useState("");

  console.log(userReduxCredentials)

  const [disabled, setDisabled] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);


  //bringing users from api
  const updateUsers = () => {
    bringUsers(jwt).then((users) => {
      console.log(users)
      setUsers(users);
    }).catch((error) => console.log(error))
  }

  useEffect(() => {
    updateUsers()
  }, [])

  const inputHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  };
  const inputEraseHandler = (e) => {
    setNotEmail(
      e.target.value
    )
    console.log(notEmail)
  };

  useEffect(() => {
    setDisabled(!acceptedTerms);
  }, [acceptedTerms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  //bringing users from ap

  const handleEraseSubmit = () => {
    try {

      if (notEmail !== userReduxCredentials?.credentials?.email) {

        eraseUser(notEmail, jwt);
      }

      updateUsers()


    } catch (error) {
      console.log('deleteo fallito ' + error)
    };
  }

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
    <div className="settingsViewDesign">


      <div className="settingsBoxDesign">


        <h1 className="updateTittleDesign">Introduce tus credenciales.</h1>
        <form onSubmit={handleSubmit} className="formSquare2">
          <p>Nombre</p>
          <input
            type="text"
            name="name"
            value={user.name}
            className="updateInputs"
            placeholder="Name"
            onChange={inputHandler}
            onInput={(e) => errorHandler(e.target.name, e.target.value, "text")}
          />
          
          <p>Email:</p>
          <input
            type="text"
            name="email"
            value={user.email}
            className="updateInputs"
            placeholder="Email"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "email")
            }
          />
          <div className="errorInput">{userError.emailError}</div>
          <p>Contraseña:</p>
          <div className="updateInputs inputContainer">
            <input
              className="inputDesign passwordInput"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={user.password}
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
          <p>Repite tu contraseña:</p>
          <input
            type="password"
            name="password2"
            className="updateInputs"
            value={user.password2}
            placeholder="Repeat your password"
            onChange={inputHandler}
            onInput={(e) =>
              errorHandler(e.target.name, e.target.value, "password")
            }
          />
          <div className="errorInput">{userError.password2Error}</div>
          <div className="adviseDesign">
            <input
              type="checkbox"
              defaultChecked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
            />

            <p> ¿Estás seguro ? </p>
          </div>
          <br></br>
          <input
            type="submit"
            value="Update Now!"
            className="submitButton"
            disabled={disabled}
          />
        </form>
      </div >
      <div className="settingsBoxDesign">

        <h1 className="updateTittleDesign">Admin Settings</h1>
        <div className="formSquare2">
          <form action="" className="eraseBox">

            <input type="text" name="notEmail" className="eraseInput" placeholder="user Email" onChange={inputEraseHandler} />
            <input type="button" className="eraseButton" value="Erase user" onClick={handleEraseSubmit} />
          </form>

          {users.map((user) => {
            return (
              <div className="usersBoxDesign">
                User: {user.name}{user.surname}
                <br />
                Email: {user.email}
                <br />

              </div>
            )


          })}
        </div>
      </div>
    </div>


  );
};

export default UserSettings;
