// console.log("js conneced");
document.getElementById("Blog-btn").addEventListener("click", function () {
  window.open("blog.html", "_blank");
});
function back() {
  window.location.href = "index.html";
}
function playmain() {
  const main_section = document.getElementById("main_id");
  main_section.classList.remove("hidden");
}
function playhistory() {
  const play_section = document.getElementById("histoty_id");
  const main_section = document.getElementById("main_id");
  main_section.classList.add("hidden");
  play_section.classList.remove("hidden");
}

function fun() {
  console.log("donate btn clicked");
  const input_man = document.getElementById("ammount").value; //jeita ami dichi
  const input_int_man = parseFloat(input_man); //jeita ami dichi
  const my = document.getElementById("my_balance"); //amar je taka ache
  const my_balance_taka = my.innerText; //amar jei taka ache
  const my_balance_int = parseFloat(my_balance_taka); //my main acc blnce
  const curnt_money = document.getElementById("individuals_moneyy"); //nokhali the kotho diche
  const curnt_money_now = curnt_money.innerText; //noakhli the main taka
  document.getElementById("ammount").value = ""; //clear the input
  if (
    input_int_man >= 0 &&
    typeof input_int_man === "number" &&
    input_int_man < my_balance_int
  ) {
    curnt_money.innerText = input_int_man + parseFloat(curnt_money_now); //ami ja dichi+eder aga ja chilo
    const now_blnce = my_balance_int - input_int_man; //amar ache=age cha chilo-ekn ja dichi
    my_balance.innerText = now_blnce;
  } else {
    alert("plz,currectly input data");
  }
}
