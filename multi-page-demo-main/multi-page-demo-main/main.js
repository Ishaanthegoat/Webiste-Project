// Btn
document.getElementById("btn").addEventListener("click", btnClicked);
function btnClicked() {
  // let elements
  let answer1 = document.getElementById("car").value.toLowerCase();
  let answer2 = document.getElementById("user").value.toLowerCase();
  let answer3 = document.getElementById("fa").value.toLowerCase();
  let answer4 = document.getElementById("it").value.toLowerCase();
  let percentage = 0;

  let car = 0;
  let user = 0;
  let fa = 0;
  let it = 0;

  // Console.log
  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  console.log(answer4);

  // If statements
  if (answer1 === "bugatti chiron") {
    document.getElementById("output1").innerHTML = `<p>Correct!</p>`; 
    car++
  } else {
    document.getElementById("output1").innerHTML = `<p>Incorrect!</p>`;
  }
  if (answer2 === "bugatti La voiture noire") {
    document.getElementById("output2").innerHTML = `<p>Correct!</p>`;
    user++
  } else {
    document.getElementById(
      "output2"
    ).innerHTML = `<p>bugatti La voiture noire or Rolls-Royce Sweptail would be correct</p>`;
  }
  if (answer3 === "horse") {
    document.getElementById("output3").innerHTML = `<p>Correct!</p>`;
    fa++
  } else {
    document.getElementById("output3").innerHTML = `<p>Incorrect!</p>`;
  }
  if (answer4 === "tractors") {
    document.getElementById("output4").innerHTML = `<p>Correct!</p>`;
    it++
  } else {
    document.getElementById("output4").innerHTML = `<p>Incorrect!</p>`;
  }
  let Grade = (car + user + fa + it) * 25;
  
  document.getElementById("output").innerHTML = Math.round(Grade);
}
