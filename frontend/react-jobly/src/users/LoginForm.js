import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const LoginForm = ({ login }) => {
    const history = useHistory();
    const [formData, setFormData] = useState({ username:"", password:""});

    const [formErrors, setFormErrors] = useState([]);

    //handle form submit

    async function handleSubmit(e){
        e.preventDefault();
        let result = await login(formData);
        if (result.success){
            history.push("/companies");
        } else {
            setFormErrors(result.errors);
        }
    }

    //for handle-change
    function handleChange(e){
        const { name, value } = e.target;
        setFormData(form => ({ ...form, [name]: value}));
    }
    return (
        <div className="LoginForm">
          <div className="container col-md-6">
            <h3 >Log In</h3>
  
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">

                    <label>Username</label>
                    <input
                        name="username"
                        className="form-control"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="username"
                        required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />
                  </div>
  
  
                  <button
                      className="btn btn-primary"
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

export default LoginForm;