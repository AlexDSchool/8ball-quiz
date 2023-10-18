//  ball Event Listener
document.getElementById("8ball").addEventListener("click", BtnClicked);

// some little things
let ballin = document.getElementById("8ball");
let textin = document.getElementById("text");
let textout = document.getElementById("output");

//ball answers
function BtnClicked() {
  if (textin.value.toLowerCase() === "does a magic 8 ball actually work?") {
    textout.innerHTML = "How dare you doubt me!";
  } else if (textin.value.toLowerCase() === "is javascript awesome?") {
    textout.innerHTML = "Of Course!";
  } else if (textin.value === "") {
    textout.innerHTML = "Please ask a question...";
  } else {
    //number
    let math = Math.random();
    console.log(math);

    //find random answer
    if (math < 0.2) {
      textout.innerHTML = "Without a doubt.";
    } else if (math < 0.4) {
      textout.innerHTML = "As I see it, yes.";
    } else if (math < 0.6) {
      textout.innerHTML = "Concentrate and ask again";
    } else if (math < 0.8) {
      textout.innerHTML = "Don't count on it";
    } else {
      textout.innerHTML = "Outlook not so good";
    }
  }
}
