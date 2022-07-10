var objPeople = [
  {
    username: "Hizi",
    password: "1234"
  },
    {
    username: "NyanPVP",
    password: "komputer1978"
  },
    {
    username: "Hizitest",
    password: "1234"
  },
    {
    username: "Hizitest2",
    password: "1234"
  }
]
function getInfo(){
  var username =  document.getElementById("username").value;
  var password =  document.getElementById("password").value;
}

  for(var i = 0;  i < objPeople.lenght; i++){
      if(username == objPeople[i].username 
         &&  password == objPeople[i].password){
        alert("zalogowano jako " + username + " !!!");
        console.log("zalogowano jako " + username + " !!!");
        return;
      }
    alert("Użytkownik nie istnieje lub hasło jest niepoprawne");
    console.log("Użytkownik nie istnieje lub hasło jest niepoprawne");
  }
