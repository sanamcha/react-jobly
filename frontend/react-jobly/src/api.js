import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

//create jobly-api, get token
class JoblyApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

//added here for get-companies by name
  static async getCompanies(name) {
    let res = await this.request("companies", { name });
    return res.companies;
  }
//added here to get current-user by username
static async getCurrentUser(username){
  let res = await this.request(`users/${username}`);
  return res.user;
}

//to get list of jobs filtered with title
static async getJobs(title){
  let res = await this.request("jobs", { title });
  return res.jobs;
}


//added to apply for job
static async apply(username, id){
  await this.request(`users/${username}/jobs/${id}`, {}, "post");
}


//to get token for login 
static async login(data){
  let res = await this.request(`auth/token`, data, "post");
  return res.token;
}


//added for sign up
static async signup(data){
  let res = await this.request(`auth/register`, data, "post");
  return res.token;
}


//added here for profile page
static async saveProfile(username, data) {
  let res = await this.request(`users/${username}`, data, "patch");
  return res.user;
} 

}

// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default JoblyApi;