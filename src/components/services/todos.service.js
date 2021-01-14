class TodoService {

  constructor(){
    this.url =  "http://localhost:8081/todos/";
  }
  getTodos = (token) => {
   return fetch(this.url, {
      headers: {
        method: "Get",
        "Content-Type": "application/json",
        token: token,
      },
    }).then((response) => {
      console.log(response)
      return response.json();
    });
  };
}

export default new TodoService();
