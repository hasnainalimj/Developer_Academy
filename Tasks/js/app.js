_handleTab = id => {
  let tab = document.getElementById(id);
  tab.style.backgroundColor = "green";
  _changeToDefault(id);
  _renderDetail(id);
};

_changeToDefault = id => {
  if (id == "tab1") {
    let tab2 = document.getElementById("tab2");
    let tab3 = document.getElementById("tab3");
    tab2.style.backgroundColor = "grey";
    tab3.style.backgroundColor = "grey";
  } else if (id == "tab2") {
    let tab1 = document.getElementById("tab1");
    let tab3 = document.getElementById("tab3");
    tab1.style.backgroundColor = "grey";
    tab3.style.backgroundColor = "grey";
  } else {
    let tab1 = document.getElementById("tab1");
    let tab2 = document.getElementById("tab2");
    tab1.style.backgroundColor = "grey";
    tab2.style.backgroundColor = "grey";
  }
};

_renderDetail = id => {
  if (id == "tab1") {
    document.getElementById("detail1").style.display = "flex";
    document.getElementById("detail2").style.display = "none";
    document.getElementById("detail3").style.display = "none";
  } else if (id == "tab2") {
    document.getElementById("detail1").style.display = "none";
    document.getElementById("detail2").style.display = "flex";
    document.getElementById("detail3").style.display = "none";
  } else {
    document.getElementById("detail1").style.display = "none";
    document.getElementById("detail2").style.display = "none";
    document.getElementById("detail3").style.display = "flex";
  }
};
