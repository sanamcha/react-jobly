import React, { useState, useContext } from "react";
import JoblyApi from "../api";
import UserContext from "../users/UserContext";

function ProfileForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    let initialValue = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
    }
    const [formData, setFormData] = useState(initialValue);
    const [formErrors, setFormErrors] = useState([]);

    const [saveConfirmed, setSaveConfirmed] = useState(false);

    //handle submit
    async function handleSubmit(e) {
        e.preventDefault();
        let profileData = {
            firstName:formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };
        let username = formData.username;
        let updatedUser;
        try{
            updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch(errors) {
            setFormErrors(errors);
            return;
        }

        setFormData( form => ({ ...form, password: "" }));
        setFormErrors([]);
        setSaveConfirmed(true);

        setCurrentUser(updatedUser);
    }

    //handle form data
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(form => ({...form, [name]: value }));
    }

    return (
        <div className="col-md-6">
          <h3>Profile</h3>
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <p className="form-control">{formData.username}</p>
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
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password to make changes :</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                  />
                </div>
  
                {formErrors.length
                    ? <h3 type= "danger">Sorry couldn't find the page....</h3>
                    : null}
  
                {saveConfirmed
                    ?
                    <h3 type = "success">Updated successfully</h3>
                    : null}
  
                <button
                    className="btn btn-primary btn-block mt-4"
                    onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
    );
}
  
  export default ProfileForm;
