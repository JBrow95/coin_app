function yourWelcome() {
if (document.getElementById("welcome").value != "") {
	alert(new Date().toLocaleString());
	document.getElementById("time").submit();
	
}else {
	alert("Welcome to Coin Changer" + " " + new Date().toLocaleString());
 };
}


function showTime() {
	document.getElementById("showTime").innerHTML = new Date().toLocaleString();
}

function randombg(){
  var random= Math.floor(Math.random() * 2) + 0;
  var bigSize = ["url('https://images.pexels.com/photos/36026/amazing-beautiful-beauty-blue.jpg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940')",               
             	"urk('https://images.pexels.com/photos/375732/pexels-photo-375732.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940')"
              ];
  document.getElementById("random").style.backgroundImage=bigSize[random];
}


function reveal() {
	showTime();
	randombg();

}