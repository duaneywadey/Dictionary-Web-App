const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const dictinfo = document.getElementById("dictinfo");
const btn = document.getElementById("searchButton");
const clearbtn = document.getElementById("clearButton");
var input = document.getElementById("inp-word");


btn.addEventListener("click", () => {
	let inpWord = document.getElementById("inp-word").value;
	fetch(`${url}${inpWord}`)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		dictinfo.innerHTML = `
				<div class="word" style="font-size:2em;">
				<p>${inpWord}</p>
				</div>
				<div class="definition"style=font-size:1em;">
				 <p><i>${data[0].meanings[0].partOfSpeech}</i></p>
				</div>  
				<div class="definition"style=font-size:1.5em;">
				 <p>${data[0].meanings[0].definitions[0].definition}</p>
				 </div>
				<div class="example"  style="color:gray;font-size:1em;">
				<td>Example: </td><i> ${data[0].meanings[0].definitions[0].example || ""}</i>
				</div>
		`
	})
	 .catch(() => {
            alert("Can't find word");
        });
	
});

clearbtn.addEventListener("click", () =>{
	document.getElementById("inp-word").value = "";

});

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchButton").click();
  }
});






