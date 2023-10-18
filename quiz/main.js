//  button event listener
document.getElementById("btn").addEventListener("click", BtnClicked);

//function
function BtnClicked() {
  //things
  let howmany = +document.getElementById("howmany").value;
  let howmanyc = document.getElementById("howmanyc");
  let pick = document.getElementById("pick").value.toLowerCase();
  let pickc = document.getElementById("pickc");
  let sunset = document.getElementById("sunset").value.toLowerCase();
  let sunsetc = document.getElementById("sunsetc");
  let controllers = document.getElementById("controller").value.toLowerCase();
  let controllersc = document.getElementById("con");
  let percent = document.getElementById("percentage");
  let comp = document.getElementById("compliment");
  let i = 0;

  //check if questions are right
  //question 1
  if (howmany === 22) {
    howmanyc.innerHTML = "Correct";
    i += 100;
    console.log(i);
    howmanyc.style.color = "green";
  } else {
    howmanyc.innerHTML = "Incorrect";
    console.log(i);
    howmanyc.style.color = "red";
  }

  //questin 2
  if (pick === "reyna") {
    pickc.innerHTML = "Correct";
    i += 100;
    console.log(i);
    pickc.style.color = "green";
  } else {
    pickc.innerHTML = "Incorrect";
    console.log(i);
    pickc.style.color = "red";
  }

  //question 3
  if (sunset === "sunset") {
    sunsetc.innerHTML = "Correct";
    i += 100;
    console.log(i);
    sunsetc.style.color = "green";
  } else {
    sunsetc.innerHTML = "Incorrect";
    console.log(i);
    sunsetc.style.color = "red";
  }

  //question 4
  if (
    controllers === "omen" ||
    controllers === "astra" ||
    controllers === "brimstone" ||
    controllers === "viper" ||
    controllers === "harbor" ||
    controllers === "harbour"
  ) {
    controllersc.innerHTML = "Correct";
    controllersc.style.color = "green";
    i += 100;
    console.log(i);
  } else {
    controllersc.innerHTML = "Incorrect";
    controllersc.style.color = "red";
  }

  let percentsolved = i / 4;
  let outOf4 = i / 100;

  //percetngate
  percent.innerHTML = `${percentsolved}% or ${outOf4}/4`;

  //inspiration
  if (percentsolved === 0) {
    comp.innerHTML = "You can at least try!";
  } else if (percentsolved === 25) {
    comp.innerHTML = "Try again, you can do it!";
  } else if (percentsolved === 50) {
    comp.innerHTML = "You have a basic understanding.";
  } else if (percentsolved === 75) {
    comp.innerHTML = "You're so close!";
  } else {
    comp.innerHTML = "Perfect!";
  }
}
