function yourWelcome() {
if (document.getElementById("welcome").value != "") {
	confirm("Do you want to submit?" + " " + new Date().toLocaleString());
	document.getElementById("time").submit();
	
}else {
	alert("Welcome to Coin Changer" + " " + new Date().toLocaleString());
 };
}

