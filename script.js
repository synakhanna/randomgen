let jobs = ["a doctor","an actor","an influencer","a chef","an architect","an engineer"]
let input = document.getElementById("input");
let generator = document.getElementById("generator");
let result = document.getElementById("result");
let underline = ["solid","double","dotted","dashed","wavy"]

function generate(name) {
  let career = Math.floor(Math.random() * jobs.length);

  let output = name + ", you will be " + jobs[career] + ".";

  result.innerText = output;
  // console.log(jobs[career])
}

function restyle(){
  let line = Math.floor(Math.random() * underline.length);
  console.log(underline[line])
  result.style.textDecorationStyle = underline[line];

  let size = Math.random() * 30 + 20;
  result.style.fontSize = size + "px";

  let color = "rgb(" + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255) + ")";
  result.style.color = color;
}

generator.addEventListener("click", function(){
  let nameInput = input.value
  generate(nameInput);
  restyle()
})