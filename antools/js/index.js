var li1 = document.getElementById("li1");

li1.addEventListener("mouseover", (event) => {
  document.getElementById("title1").style.opacity = "0.90";
  document.getElementById("text11").style.color = "#FFA537";
  document.getElementById("text12").style.opacity = "0.78";
  document.getElementById("visitbtn1").style.border = "2px solid #FF6E30";
});
li1.addEventListener("mouseout", (event) => {
  document.getElementById("title1").style.opacity = "0.78";
  document.getElementById("text11").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text12").style.opacity = "0.55";
  document.getElementById("visitbtn1").style.border = "none";
});

var li2 = document.getElementById("li2");

li2.addEventListener("mouseover", (event) => {
  document.getElementById("title2").style.opacity = "0.90";
  document.getElementById("text21").style.color = "#FFA537";
  document.getElementById("text22").style.opacity = "0.78";
  document.getElementById("visitbtn2").style.border = "2px solid #FF6E30";
});
li2.addEventListener("mouseout", (event) => {
  document.getElementById("title2").style.opacity = "0.78";
  document.getElementById("text21").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text22").style.opacity = "0.55";
  document.getElementById("visitbtn2").style.border = "none";
});

var li3 = document.getElementById("li3");

li3.addEventListener("mouseover", (event) => {
  document.getElementById("title3").style.opacity = "0.90";
  document.getElementById("text31").style.color = "#FFA537";
  document.getElementById("text32").style.opacity = "0.78";
  document.getElementById("visitbtn3").style.border = "2px solid #FF6E30";
});
li3.addEventListener("mouseout", (event) => {
  document.getElementById("title3").style.opacity = "0.78";
  document.getElementById("text31").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text32").style.opacity = "0.55";
  document.getElementById("visitbtn3").style.border = "none";
});

function like1() {
  let elem = document.getElementById("like-icon-active1");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active1").style.display = "inline";
    document.getElementById("like-icon1").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active1").style.display = "none";
    document.getElementById("like-icon1").style.display = "inline";
  }
}
function like2() {
  let elem = document.getElementById("like-icon-active2");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active2").style.display = "inline";
    document.getElementById("like-icon2").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active2").style.display = "none";
    document.getElementById("like-icon2").style.display = "inline";
  }
}
function like3() {
  let elem = document.getElementById("like-icon-active3");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active3").style.display = "inline";
    document.getElementById("like-icon3").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active3").style.display = "none";
    document.getElementById("like-icon3").style.display = "inline";
  }
}
