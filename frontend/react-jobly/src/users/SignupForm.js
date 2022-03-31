import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Signup form

function SignupForm({ signup }){
    const history = useHistory();

    let initialValue = { username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""}

    const [formData, setFormData] = useState( initialValue)
    const [formErrors, setFormErrors] = useState([]);


    //handle form submit
    async function handleSubmit(e) {
        e.preventDefault();
        let result = await signup(formData);
        if (result.success) {
            history.push("/companies");
        } else {
            setFormErrors(result.errors);
        }
    }

    //update form data
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(form => ({ ...form, [name]: value }));
      }

      return (
        <div className="SignupForm">
          <div className="container col-md-6">
            <h2>Sign Up </h2>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Username :</label>
                    <input
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password :</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                    />
                  </div>
  
                  <div className="form-group">
                    <label>First Name :</label>
                    <input
                        name="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name :</label>
                    <input
                        name="lastName"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email :</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                    />
                  </div>
  
                  {formErrors.length
                      ? <h3 type="danger">Sorry, something went wrong...</h3>
                      : null
                  }
  
                  <button
                      type="submit"
                      className="btn btn-primary float-right"
                      onSubmit={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
  
  export default SignupForm;

