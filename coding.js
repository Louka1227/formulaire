function deelete() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("recoit").checked = false;
  document.getElementById("options").value = "unselected";
  document.getElementById("fem").checked = false;
  document.getElementById("masc").checked = false;
  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("dom")[i].checked = false;
  }
  document.getElementById("comnt").value = "";
}
function save() {
  const data = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    docs: document.getElementById("recoit").checked,
    pays: document.getElementById("options").value,
    sexe: document.getElementById("fem").checked,
    domaines: {
      ped: document.getElementsByClassName("dom")[0].checked,
      psy: document.getElementsByClassName("dom")[1].checked,
      info: document.getElementsByClassName("dom")[2].checked,
      autres: document.getElementsByClassName("dom")[3].checked,
    },
    comment: document.getElementById("comnt").value,
  };
  deelete();
  console.log(data);
}
