//Hi, I am Abraham, Contact me today at abreb1235@gmail.com
//I am open for collaboration


// Real Code
var colorDiv = document.querySelectorAll(".palette");
var btn = document.getElementById("generateBtn");

function generate() {
	for (let i = 0; i < colorDiv.length; i++) {
		colorDivAll = colorDiv[i]; //JavaScript Typography

		colorDivAll.style.backgroundColor = generateRandomColors(); //Apply the final color you got from generateRandomColors() to each div

		const backgroundColor = colorDivAll.style.backgroundColor;

		function componentToHex(c) {
			var hex = c.toString(16);
			return hex.length == 1 ? "0" + hex : hex;
		}
		function rgbToHex(r, g, b) {
			return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
		}

		var col = backgroundColor;
		var splitted = col.split(" ");
		const num1 = parseInt(splitted[0].split("(")[1]);
		const num2 = parseInt(splitted[1]);
		const num3 = parseInt(splitted[2]);

		colorDivAll.innerHTML = rgbToHex(num1, num2, num3); //The value of the color written

		// Some Algorithm
		if ((num1 || num2 || num3) > 200) {
			colorDivAll.style.color = "black";
		} else if (num2 < 155 && num3 < 155 && num1 < 155) {
			colorDivAll.style.color = "whitesmoke";
		} else {
			colorDivAll.style.color = "black";
		}
	}
}
generate();

//Adding event listener to the Generate button
btn.addEventListener("click", generate);

//Adding event listener to the spacebar in keyboard
window.addEventListener("keypress", function (e) {
	if (e.key == " ") {
		generate();
	}
});

// Where the work happens
function generateRandomColors() {
	//Generate a number from 1 - 225
	function randomNumber() {
		var n = Math.ceil(Math.random() * 255);
		return n;
	}

	//Get the number from randomNumber() and structure it to look like this 'rgba(126,20,35)'
	let color =
		"rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
	return color;
}

// Toggle Bulb Off And On
const bulb = document.getElementById("bulb");
const bulbClass = bulb.classList;
bulb.addEventListener("click", bulbFunc);
function bulbFunc() {
	if (bulbClass.contains("bi-lightbulb")) {
		bulbClass.remove("bi-lightbulb");
		bulbClass.add("bi-lightbulb-fill");
	} else {
		bulbClass.remove("bi-lightbulb-fill");
		bulbClass.add("bi-lightbulb");
	}
}

// Tips For You
var generateNewWords = document.getElementById("showModal");
var tip = document.querySelector(".modal-body");

generateNewWords.addEventListener("click", function () {
	function numGenerator() {
		let number = Math.ceil(Math.random() * 4);
		return number;
	}

	if (numGenerator() == 1) {
		tip.innerHTML =
			'This was created by <a href="https://showwcase.com/abrahame">Abraham</a>';
	} else if (numGenerator() == 2) {
		tip.innerHTML =
			"Did you know that you can also use the <strong>spacebar</strong> to generate new colours";
	} else if (numGenerator() == 3) {
		tip.innerHTML =
			'If you liked this mini-project, kindly star this on <a href="https://github.com/abrahamebij/colour-palette-generator">Github.</a>';
	} else if (numGenerator() == 4) {
		tip.innerHTML =
			'If you like to make improvements on this, <a href="https://github.com/abrahamebij/colour-palette-generator">fork this on Github.</a>';
	}
});

const closeModalBtn = document.querySelectorAll(".close-modal");
for (let i = 0; i < closeModalBtn.length; i++) {
	closeModalBtn[i].addEventListener("click", bulbFunc);
}

// Clipboard Copying
const copyBtn = document.querySelector("#copy"); //Clipboard Icon

function copyTextToClipboard(text) {
	if (!navigator.clipboard) {
		fallbackCopyTextToClipboard(text);
		return;
	}
	navigator.clipboard.writeText(text).then(
		function () {
			copyBtn.setAttribute("data-hint", "Copied as CSS comment");
		},
		function (err) {
			copyBtn.setAttribute("data-hint", "Couldn't copy to clipboard");
		}
	);
}

copyBtn.addEventListener("click", function (event) {
	//Generate the text content of divs and send it to the clipboard content

	var paletteValue = colorDiv; //Number of Palettes on the screen

	function returnPaletteNumber() {
		let colors = "";

		paletteValue.forEach(myFunc);

		function myFunc(item) {
			colors += item.innerHTML + ", ";
		}

		return colors;
	}
	var clipboardContent = "/* " + returnPaletteNumber().slice(0, -2) + " */"; //slice is to remove the extra comma and space
	copyTextToClipboard(clipboardContent);
});

// Sharing links
//Facebook
var facebookLink = document.getElementById("facebook");
var whatsappLink = document.getElementById("whatsapp");
var twitterLink = document.getElementById("twitter");
var telegramLink = document.getElementById("telegram");
const pageUrl = location.href; //Page's URL

//Facebook
facebookLink.setAttribute(
	"href",
	"https://www.facebook.com/sharer.php?u=" + pageUrl
);
//WhatsApp
whatsappLink.setAttribute(
	"href",
	"https://api.whatsapp.com/send?text=" + pageUrl
);
//Twitter
twitterLink.setAttribute(
	"href",
	"https://twitter.com/intent/tweet?url=" +
		pageUrl +
		"&text=Colour+Palette+Generator+built+by+@abraham_html&hashtags=javascript,colors,CSS3,html"
);
//Telegram
telegramLink.setAttribute(
	"href",
	"https://t.me/share/url?text=Colour+Palette+Generator&url=" + pageUrl
);



   // Register service worker to control making site work offline
	 const addBtn = document.getElementById('add');


	 if ('serviceWorker' in navigator) {
		 navigator.serviceWorker
			 .register('./sw.js')
			 .then(() => { console.log('Service Worker Registered'); });
	 }
	 
	 // Code to handle install prompt on desktop
	 
	 let deferredPrompt;
	 addBtn.style.display = 'none';
	 
	 window.addEventListener('beforeinstallprompt', (e) => {
		 // Prevent Chrome 67 and earlier from automatically showing the prompt
		 e.preventDefault();
		 // Stash the event so it can be triggered later.
		 deferredPrompt = e;
		 // Update UI to notify the user they can add to home screen
		 addBtn.style.display = 'block';
	 
		 addBtn.addEventListener('click', () => {
			 // hide our user interface that shows our A2HS button
			 addBtn.style.display = 'none';
			 // Show the prompt
			 deferredPrompt.prompt();
			 // Wait for the user to respond to the prompt
			 deferredPrompt.userChoice.then((choiceResult) => {
				 if (choiceResult.outcome === 'accepted') {
					 console.log('User accepted the A2HS prompt');
				 } else {
					 console.log('User dismissed the A2HS prompt');
				 }
				 deferredPrompt = null;
			 });
		 });
	 });
	 
