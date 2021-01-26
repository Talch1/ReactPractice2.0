class LoginService {
    constructor(){
        this.url ="http://localhost:8081/login/";
    }
    loggening = (email,password) => {
       return fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name:null,
            lastName:null,
            email:email,
            password:password,
            token: null,
            todos: [],
          }),
        })
        .then(res=> {if (res.status === 200){
          return res.text()
        }
        })
      };
}
export default LoginService;