var loginCounter=false;
function abrirLogin() {
	if (loginCounter) {
		document.getElementById("floatContainer").style.display="none";
		document.getElementById("negro").style.display="none";
		loginCounter=false;
		console.log("ah");
	}else{
		document.getElementById("floatContainer").style.display="block";
		document.getElementById("negro").style.display="block";
		loginCounter=true;
		console.log("he");
	}
}