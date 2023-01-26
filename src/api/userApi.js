const   URL="http://localhost:3030" 









export async function login(data)

{
  return   fetch(URL+"/users/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
       

}


