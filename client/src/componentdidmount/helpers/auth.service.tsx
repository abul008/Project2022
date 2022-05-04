import axios from "axios";

const setUser = (user:any) => {
    //   console.log(JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
  };



  const login = (email:any, password:any) => {
    return 

     axios.post("/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          // localStorage.setItem("user", JSON.stringify(response.data));
          setUser(response.data);
        }
  
        return response.data;
      });
  };





  const authService = {
    setUser
  };


  export default authService;