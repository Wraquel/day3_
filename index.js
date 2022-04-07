function areaDeveloper() {
  let answer = document.getElementById("area1").value;
  let areaChosen = answer.toUpperCase();
  document.getElementById("start").classList.add("start-display");
  let Firstanswer = document.getElementById("show-message-start");
  if (areaChosen === "FRONT-END") {
    Firstanswer.innerHTML = "Do you want to learn React or Vue?";
  } else if (areaChosen === "BACK-END") {
    Firstanswer.innerHTML = "Do you want to learn C# or Java?";
  } else alert("Preencha o campo corretamente 😉");
}
function questions() {
  let areaChosen = document.getElementById("area1").value;
  document.getElementById("middle").classList.add("middle-display");
  document.getElementById("end").classList.add("end-display");
  let inputNumber = document.getElementById("message3").value;
  let languageName = document.getElementById("language2").value;
  let messageMid = document.getElementById("show-message-title");
  if (languageName.length > 0 && inputNumber == 1) {
    messageMid.innerHTML = `Great, keep studing ${languageName} to learn about ${areaChosen}!`;
  } else if (languageName.length > 0 && inputNumber == 2) {
    messageMid.innerHTML = `It's time to start learning languages other than  ${languageName} if you want to become a fullstack!`;
  } else alert("Preencha o campo corretamente 😉");
  document.getElementById("area1").value = "";
  document.getElementById("language2").value = "";
  document.getElementById("message3").value = "";
}

function List() {
  let newLanguage = document.getElementById("answer").value;
  if (newLanguage.length > 0) {
    let messageEnd = document.getElementById("show-message-end");
    let elementonewLanguage = "<li>" + newLanguage + "</li>";
    messageEnd.innerHTML = messageEnd.innerHTML + elementonewLanguage;
  } else alert("Preencha o campo corretamente 😉");
}
