import { useState } from "react";
import { signUp } from "../util/api";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({})
  const navigate = useNavigate()
  let username, password

  const changeHandler = (e) => {
    console.log(credentials)
    setCredentials({...credentials, [e.target.name.toString()] : e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    signUp(credentials)
    setTimeout(() => navigate("/login"), 200)
  }

  return (
    <section className="hero is-primary is-fullheight">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" className="box">
            <div className="title has-text-centered has-text-grey-darker">
              Sign Up
            </div>
            <div className="field">
              <label for="" className="label">Username</label>
              <div className="control">
                <input type="username" name="username" value={username} placeholder="bobsmith" className="input" required onChange={changeHandler}/>

              </div>
            </div>
            <div className="field">
              <label for="" className="label">Password</label>
              <div className="control">
                <input type="password" name="password" value={password} placeholder="*******" className="input" required onChange={changeHandler} />

              </div>
            </div>

            <div className="field">
              <button className="button is-success" onClick={handleSubmit}>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Register;
