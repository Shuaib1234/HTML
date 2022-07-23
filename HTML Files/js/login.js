function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
var emailaddress=document.getElementById("emailaddress").value;
var answer=(username=="admin" && password=="user" && emailaddress=="adminuser@gmail.com");
if (answer)
{
	alert("login successful");
	window.open("index.html")
}
else
{
	alert("login failed");
}


}
