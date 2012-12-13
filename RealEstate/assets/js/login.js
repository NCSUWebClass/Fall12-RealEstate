function login() {
	var userName = document.Login.username.value;
	var password = document.Login.password.value;
	
	if(userName == "username" && password == "password"){
		document.getElementById("Login").innerHTML = "SUCCESSFUL LOGIN!";
	}else{
		alert("Username and password combination incorrect.");
	}
}