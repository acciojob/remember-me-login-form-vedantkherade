//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function(){
	const username = document.getElementById("username");
	const password = document.getElementById("password");
	const checkBox = document.getElementById("checkbox");
	const submit = document.getElementById("submit");
	const existing = document.getElementById("existing");

	if(localStorage.getItem("username")){
		existing.style.display = "block";
	}

	submit.addEventListener("click", function(e) {
		e.preventDefault();
		alert("Logged in as " + username.value);

		if(checkBox.checked){
			localStorage.setItem("username", username.value);
			localStorage.setItem("password", password.value);
		}else{
			localStorage.removeItem("username");
			localStorage.removeItem("password");
		}
	});

	existing.addEventListener("click", () => {
		alert("Logged in as " + localStorage.getItem("username"));
	})
});

