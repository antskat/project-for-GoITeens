window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    document.getElementById("back-top-btn").style.display = "block";
  } else {
    document.getElementById("back-top-btn").style.display = "none";
  }
}
function scrollTop() {
  document
    .getElementById("scroll-top-object")
    .scrollIntoView({ behavior: "smooth" }, 1500);
}
document.getElementById("back-top-btn").addEventListener("click", scrollTop);

var li1 = document.getElementById("li1");

li1.addEventListener("mouseover", (event) => {
  document.getElementById("title1").style.opacity = "0.90";
  document.getElementById("text11").style.color = "#FFA537";
  document.getElementById("text12").style.opacity = "0.78";
  document.getElementById("visitbtn1").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn1").style.color = "#fff";
});
li1.addEventListener("mouseout", (event) => {
  document.getElementById("title1").style.opacity = "0.78";
  document.getElementById("text11").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text12").style.opacity = "0.55";
  document.getElementById("visitbtn1").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn1").style.color =
    "rgba(255, 255, 255, 0.55)";
});

var li2 = document.getElementById("li2");

li2.addEventListener("mouseover", (event) => {
  document.getElementById("title2").style.opacity = "0.90";
  document.getElementById("text21").style.color = "#FFA537";
  document.getElementById("text22").style.opacity = "0.78";
  document.getElementById("visitbtn2").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn2").style.color = "#fff";
});
li2.addEventListener("mouseout", (event) => {
  document.getElementById("title2").style.opacity = "0.78";
  document.getElementById("text21").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text22").style.opacity = "0.55";
  document.getElementById("visitbtn2").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn2").style.color =
    "rgba(255, 255, 255, 0.55)";
});

var li3 = document.getElementById("li3");

li3.addEventListener("mouseover", (event) => {
  document.getElementById("title3").style.opacity = "0.90";
  document.getElementById("text31").style.color = "#FFA537";
  document.getElementById("text32").style.opacity = "0.78";
  document.getElementById("visitbtn3").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn3").style.color = "#fff";
});
li3.addEventListener("mouseout", (event) => {
  document.getElementById("title3").style.opacity = "0.78";
  document.getElementById("text31").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text32").style.opacity = "0.55";
  document.getElementById("visitbtn3").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn3").style.color =
    "rgba(255, 255, 255, 0.55)";
});

var li4 = document.getElementById("li4");

li4.addEventListener("mouseover", (event) => {
  document.getElementById("title4").style.opacity = "0.90";
  document.getElementById("text41").style.color = "#FFA537";
  document.getElementById("text42").style.opacity = "0.78";
  document.getElementById("visitbtn4").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn4").style.color = "#fff";
});
li4.addEventListener("mouseout", (event) => {
  document.getElementById("title4").style.opacity = "0.78";
  document.getElementById("text41").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text42").style.opacity = "0.55";
  document.getElementById("visitbtn4").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn4").style.color =
    "rgba(255, 255, 255, 0.55)";
});

var li5 = document.getElementById("li5");

li5.addEventListener("mouseover", (event) => {
  document.getElementById("title5").style.opacity = "0.90";
  document.getElementById("text51").style.color = "#FFA537";
  document.getElementById("text52").style.opacity = "0.78";
  document.getElementById("visitbtn5").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn5").style.color = "#fff";
});
li5.addEventListener("mouseout", (event) => {
  document.getElementById("title5").style.opacity = "0.78";
  document.getElementById("text51").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text52").style.opacity = "0.55";
  document.getElementById("visitbtn5").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn5").style.color =
    "rgba(255, 255, 255, 0.55)";
});

var li6 = document.getElementById("li6");

li6.addEventListener("mouseover", (event) => {
  document.getElementById("title6").style.opacity = "0.90";
  document.getElementById("text61").style.color = "#FFA537";
  document.getElementById("text62").style.opacity = "0.78";
  document.getElementById("visitbtn6").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn6").style.color = "#fff";
});
li6.addEventListener("mouseout", (event) => {
  document.getElementById("title6").style.opacity = "0.78";
  document.getElementById("text61").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text62").style.opacity = "0.55";
  document.getElementById("visitbtn6").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn6").style.color =
    "rgba(255, 255, 255, 0.55)";
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
function like4() {
  let elem = document.getElementById("like-icon-active4");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active4").style.display = "inline";
    document.getElementById("like-icon4").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active4").style.display = "none";
    document.getElementById("like-icon4").style.display = "inline";
  }
}
function like5() {
  let elem = document.getElementById("like-icon-active5");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active5").style.display = "inline";
    document.getElementById("like-icon5").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active5").style.display = "none";
    document.getElementById("like-icon5").style.display = "inline";
  }
}
function like6() {
  let elem = document.getElementById("like-icon-active6");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active6").style.display = "inline";
    document.getElementById("like-icon6").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active6").style.display = "none";
    document.getElementById("like-icon6").style.display = "inline";
  }
}

var li11 = document.getElementById("li1-1");

li11.addEventListener("mouseover", (event) => {
  document.getElementById("title1-1").style.opacity = "0.90";
  document.getElementById("text11-1").style.color = "#FFA537";
  document.getElementById("text12-1").style.opacity = "0.78";
  document.getElementById("visitbtn11").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn11").style.color = "#fff";
});
li11.addEventListener("mouseout", (event) => {
  document.getElementById("title1-1").style.opacity = "0.78";
  document.getElementById("text11-1").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text12-1").style.opacity = "0.55";
  document.getElementById("visitbtn11").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn11").style.color =
    "rgba(255, 255, 255, 0.55)";
});
var li21 = document.getElementById("li2-1");

li21.addEventListener("mouseover", (event) => {
  document.getElementById("title2-1").style.opacity = "0.90";
  document.getElementById("text21-1").style.color = "#FFA537";
  document.getElementById("text22-1").style.opacity = "0.78";
  document.getElementById("visitbtn21").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn21").style.color = "#fff";
});
li21.addEventListener("mouseout", (event) => {
  document.getElementById("title2-1").style.opacity = "0.78";
  document.getElementById("text21-1").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text22-1").style.opacity = "0.55";
  document.getElementById("visitbtn21").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn21").style.color =
    "rgba(255, 255, 255, 0.55)";
});
var li11 = document.getElementById("li1-1");

li11.addEventListener("mouseover", (event) => {
  document.getElementById("title1-1").style.opacity = "0.90";
  document.getElementById("text11-1").style.color = "#FFA537";
  document.getElementById("text12-1").style.opacity = "0.78";
  document.getElementById("visitbtn11").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn11").style.color = "#fff";
});
li11.addEventListener("mouseout", (event) => {
  document.getElementById("title1-1").style.opacity = "0.78";
  document.getElementById("text11-1").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text12-1").style.opacity = "0.55";
  document.getElementById("visitbtn11").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn11").style.color =
    "rgba(255, 255, 255, 0.55)";
});
var li31 = document.getElementById("li3-1");

li31.addEventListener("mouseover", (event) => {
  document.getElementById("title3-1").style.opacity = "0.90";
  document.getElementById("text31-1").style.color = "#FFA537";
  document.getElementById("text32-1").style.opacity = "0.78";
  document.getElementById("visitbtn31").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn31").style.color = "#fff";
});
li31.addEventListener("mouseout", (event) => {
  document.getElementById("title3-1").style.opacity = "0.78";
  document.getElementById("text31-1").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text32-1").style.opacity = "0.55";
  document.getElementById("visitbtn31").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn31").style.color =
    "rgba(255, 255, 255, 0.55)";
});
var li41 = document.getElementById("li4-1");

li41.addEventListener("mouseover", (event) => {
  document.getElementById("title4-1").style.opacity = "0.90";
  document.getElementById("text41-1").style.color = "#FFA537";
  document.getElementById("text42-1").style.opacity = "0.78";
  document.getElementById("visitbtn41").style.backgroundColor = "#FF6E30";
  document.getElementById("vistibtn41").style.color = "#fff";
});
li41.addEventListener("mouseout", (event) => {
  document.getElementById("title4-1").style.opacity = "0.78";
  document.getElementById("text41-1").style.color = "rgba(255, 165, 55, 0.55)";
  document.getElementById("text42-1").style.opacity = "0.55";
  document.getElementById("visitbtn41").style.backgroundColor = "#1E252B";
  document.getElementById("vistibtn41").style.color =
    "rgba(255, 255, 255, 0.55)";
});
function like11() {
  let elem = document.getElementById("like-icon-active1-1");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active1-1").style.display = "inline";
    document.getElementById("like-icon1-1").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active1-1").style.display = "none";
    document.getElementById("like-icon1-1").style.display = "inline";
  }
}
function like21() {
  let elem = document.getElementById("like-icon-active2-1");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active2-1").style.display = "inline";
    document.getElementById("like-icon2-1").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active2-1").style.display = "none";
    document.getElementById("like-icon2-1").style.display = "inline";
  }
}
function like31() {
  let elem = document.getElementById("like-icon-active3-1");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active3-1").style.display = "inline";
    document.getElementById("like-icon3-1").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active3-1").style.display = "none";
    document.getElementById("like-icon3-1").style.display = "inline";
  }
}
function like41() {
  let elem = document.getElementById("like-icon-active4-1");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active4-1").style.display = "inline";
    document.getElementById("like-icon4-1").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active4-1").style.display = "none";
    document.getElementById("like-icon4-1").style.display = "inline";
  }
}
function like51() {
  let elem = document.getElementById("like-icon-active5-1");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active5-1").style.display = "inline";
    document.getElementById("like-icon5-1").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active5-1").style.display = "none";
    document.getElementById("like-icon5-1").style.display = "inline";
  }
}
function like61() {
  let elem = document.getElementById("like-icon-active6-1");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("like-icon-active6-1").style.display = "inline";
    document.getElementById("like-icon6-1").style.display = "none";
  } else if (style.display !== "none") {
    document.getElementById("like-icon-active6-1").style.display = "none";
    document.getElementById("like-icon6-1").style.display = "inline";
  }
}

function addToFolder1() {
  let elem = document.getElementById("folderbtn-svg1");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg1").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg1").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder2() {
  let elem = document.getElementById("folderbtn-svg2");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg2").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg2").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder3() {
  let elem = document.getElementById("folderbtn-svg3");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg3").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg3").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder4() {
  let elem = document.getElementById("folderbtn-svg4");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg4").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg4").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder5() {
  let elem = document.getElementById("folderbtn-svg5");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg5").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg5").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder6() {
  let elem = document.getElementById("folderbtn-svg6");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg6").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg6").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder11() {
  let elem = document.getElementById("folderbtn-svg1-1");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg1-1").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg1-1").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder21() {
  let elem = document.getElementById("folderbtn-svg2-1");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg2-1").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg2-1").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder31() {
  let elem = document.getElementById("folderbtn-svg3-1");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg3-1").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg3-1").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder41() {
  let elem = document.getElementById("folderbtn-svg4-1");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg4-1").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg4-1").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder51() {
  let elem = document.getElementById("folderbtn-svg5-1");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg5-1").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg5-1").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function addToFolder61() {
  let elem = document.getElementById("folderbtn-svg6-1");
  let style = getComputedStyle(elem);
  if (style.fill === "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg6-1").style.fill = "#FF6E30";
  } else if (style.fill !== "rgba(255, 255, 255, 0.55)") {
    document.getElementById("folderbtn-svg6-1").style.fill =
      "rgba(255, 255, 255, 0.55)";
  }
}
function loadMore1() {
  document.getElementById("load-more").style.backgroundColor = "#FF6E30";
  document.getElementById("load-more").style.color = "white";
}
function loadMore2() {
  document.getElementById("load-more").style.backgroundColor = "#1e252b";
  document.getElementById("load-more").style.color = "#FF6E30";
  document.getElementById("load-more").style.border = "2px solid #FF6E30";
}
function loadMore3() {
  document.getElementById("load-more").style.border =
    "1px solid rgba(255, 255, 255, 0.1)";
}
function loadMore4() {
  document.getElementById("load-more").style.border = "2px solid #FF6E30";
}
function loadMore1_1() {
  document.getElementById("login").style.backgroundColor = "#FF6E30";
  document.getElementById("login").style.color = "white";
}
function loadMore2_1() {
  document.getElementById("login").style.backgroundColor = "#1e252b";
  document.getElementById("login").style.color = "white";
  document.getElementById("login").style.border = "2px solid #FF6E30";
}
function loadMore3_1() {
  document.getElementById("login").style.border =
    "1px solid rgba(255, 255, 255, 0.1)";
}
function loadMore4_1() {
  document.getElementById("login").style.border = "2px solid #FF6E30";
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
new Swiper(".swiper", {
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});

var scrollhref1 = document.getElementById("design-href");
var scrollhref2 = document.getElementById("development-href");
var scrollObject1 = document.getElementById("design");
var scrollObject2 = document.getElementById("development");

function scroll1() {
  scrollObject1.scrollIntoView({ behavior: "smooth" }, 1500);
}
function scroll2() {
  scrollObject2.scrollIntoView({ behavior: "smooth" }, 1500);
}
scrollhref1.addEventListener("click", scroll1);
scrollhref2.addEventListener("click", scroll2);

function showPassword1() {
  var x = document.getElementById("login-password");
  if (x.type === "password") {
    x.type = "text";
    document.getElementById("visibility-off1").style.display = "none";
    document.getElementById("visibility-on1").style.display = "block";
  } else {
    x.type = "password";
    document.getElementById("visibility-off1").style.display = "block";
    document.getElementById("visibility-on1").style.display = "none";
  }
}
function hidePassword1() {
  var x = document.getElementById("login-password");
  if (x.type === "text") {
    x.type = "password";
    document.getElementById("visibility-off1").style.display = "block";
    document.getElementById("visibility-on1").style.display = "none";
  } else {
    x.type = "text";
    document.getElementById("visibility-off1").style.display = "none";
    document.getElementById("visibility-on1").style.display = "block";
  }
}
document
  .getElementById("visibility-off1")
  .addEventListener("click", showPassword1);
document
  .getElementById("visibility-on1")
  .addEventListener("click", hidePassword1);

  function showPassword2() {
    var x = document.getElementById("register-password");
    if (x.type === "password") {
      x.type = "text";
      document.getElementById("visibility-off").style.display = "none";
      document.getElementById("visibility-on").style.display = "block";
    } else {
      x.type = "password";
      document.getElementById("visibility-off").style.display = "block";
      document.getElementById("visibility-on").style.display = "none";
    }
  }
  function hidePassword2() {
    var x = document.getElementById("register-password");
    if (x.type === "text") {
      x.type = "password";
      document.getElementById("visibility-off").style.display = "block";
      document.getElementById("visibility-on").style.display = "none";
    } else {
      x.type = "text";
      document.getElementById("visibility-off").style.display = "none";
      document.getElementById("visibility-on").style.display = "block";
    }
  }
  document
    .getElementById("visibility-off")
    .addEventListener("click", showPassword2);
  document
    .getElementById("visibility-on")
    .addEventListener("click", hidePassword2);
var loginBtn = document.getElementById("login");
var signUpBtn = document.getElementById("sign-up");
var closeLoginPopupBtn = document.getElementById("closebtn1");
var closeRegisterPopupBtn = document.getElementById("closebtn2");
var blurbg = document.getElementById("blur-bg");

function showPopup1() {
  let elem = document.getElementById("login-popup");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("login-popup").style.display = "block";
  } else if (style.display !== "none") {
    document.getElementById("login-popup").style.disply = "none";
  }

  if (style.display === "block") {
    document.getElementById("blur-bg").style.display = "block";
    document.body.style.overflowY = "hidden";
  } else if (style.display !== "block") {
    document.getElementById("blur-bg").style.display = "none";
    document.body.style.overflowY = "scroll";
  }
}

function closePopup1() {
  let elem = document.getElementById("login-popup");
  let style = getComputedStyle(elem);
  if (style.display === "block") {
    document.getElementById("login-popup").style.display = "none";
    document.getElementById("blur-bg").style.display = "none";
    document.body.style.overflowY = "scroll";
  } else if (style.display !== "block") {
    document.getElementById("login-popup").style.display = "none";
    document.getElementById("blur-bg").style.display = "none";
    document.body.style.overflowY = "scroll";
  }
}
function showPopup2() {
  let elem = document.getElementById("register-popup");
  let style = getComputedStyle(elem);
  if (style.display === "none") {
    document.getElementById("register-popup").style.display = "block";
  } else if (style.display !== "none") {
    document.getElementById("register-popup").style.disply = "none";
  }

  if (style.display === "block") {
    document.getElementById("blur-bg").style.display = "block";
    document.body.style.overflowY = "hidden";
  } else if (style.display !== "block") {
    document.getElementById("blur-bg").style.display = "none";
    document.body.style.overflowY = "scroll";
  }
}

function closePopup2() {
  let elem = document.getElementById("register-popup");
  let style = getComputedStyle(elem);
  if (style.display === "block") {
    document.getElementById("register-popup").style.display = "none";
    document.getElementById("blur-bg").style.display = "none";
    document.body.style.overflowY = "scroll";
  } else if (style.display !== "block") {
    document.getElementById("register-popup").style.display = "none";
    document.getElementById("blur-bg").style.display = "none";
    document.body.style.overflowY = "scroll";
  }
}
function hoverCloseBtn() {
  document.getElementById('circlebg1').style.display = 'block'
}
function hoverCloseBtnn() {
  document.getElementById('circlebg1').style.display = 'none'
}
function changePopup1() {
  document.getElementById('login-popup').style.display = 'block';
  document.getElementById('register-popup').style.display = 'none';
}
function changePopup2() {
  document.getElementById('login-popup').style.display = 'none';
  document.getElementById('register-popup').style.display = 'block';
}
signUpBtn.addEventListener('click', showPopup2);
loginBtn.addEventListener("click", showPopup1);
closeLoginPopupBtn.addEventListener("click", closePopup1);
closeLoginPopupBtn.addEventListener('mouseover', hoverCloseBtn);
closeLoginPopupBtn.addEventListener('mouseout', hoverCloseBtnn);
closeRegisterPopupBtn.addEventListener("click", closePopup2);
closeRegisterPopupBtn.addEventListener('mouseover', hoverCloseBtn);
closeRegisterPopupBtn.addEventListener('mouseout', hoverCloseBtnn);
blurbg.addEventListener("click", closePopup1);
blurbg.addEventListener("click", closePopup2);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup1();
    closePopup2();
  }
});



