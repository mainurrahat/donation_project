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
  const play_section = document.getElementById("history_id");
  play_section.classList.add("hidden");
}
function playhistory() {
  const play_section = document.getElementById("history_id");
  const main_section = document.getElementById("main_id");
  main_section.classList.add("hidden");
  play_section.classList.remove("hidden");
  // const date = new Date();
  // const historyItem = document.createElement("li");
  // historyItem.innerHTML = `<span>Donated: <strong>${amount} BDT</strong> on ${date}</span>`;
  // historyItem.classList.add("bg-gray-200", "p-3", "rounded-lg", "border-4");

  // // Append the new history item to the history list
  // document.getElementById("history").appendChild(historyItem);
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
    !isNaN(input_man) &&
    typeof input_int_man === "number" &&
    input_int_man < my_balance_int
  ) {
    curnt_money.innerText = input_int_man + parseFloat(curnt_money_now); //ami ja dichi+eder aga ja chilo
    const now_blnce = my_balance_int - input_int_man; //amar ache=age cha chilo-ekn ja dichi
    my_balance.innerText = now_blnce;
    const card = document.getElementById("cong1");
    card.classList.remove("hidden");
    const date = new Date();
    const historyItem = document.createElement("li");
    const mall = document.getElementById("head1");
    const mal = mall.innerText;
    historyItem.innerHTML = `<span><strong>${input_int_man} BDT is donated for ${mal} <br> Date:- on ${date}</span></strong>`;
    historyItem.classList.add(
      "p-9",
      "rounded-lg",
      "border-4",
      "w-fit",
      "item-center",
      "mx-auto"
    );

    // Append the new history item to the history list
    document.getElementById("history").appendChild(historyItem);
  } else {
    alert("please,currectly input data");
  }
}

function closee() {
  const cards = document.getElementById("cong1");
  console.log("close e clicked");
  cards.classList.add("hidden");
  const cardss = document.getElementById("cong2");
  console.log("close e clicked");
  cardss.classList.add("hidden");
  const cardsss = document.getElementById("cong3");
  console.log("close e clicked");
  cardsss.classList.add("hidden");
}
// function closeee() {
//   const cards = document.getElementById("cong1");
//   console.log("close e clicked");
//   cards.classList.add("hidden");
//   const cardss = document.getElementById("cong2");
//   console.log("close e clicked");
//   cardss.classList.add("hidden");
//   const cardsss = document.getElementById("cong3");
//   console.log("close e clicked");
//   cardsss.classList.add("hidden");
// }
// function closeeee() {
//   const cards = document.getElementById("cong1");
//   console.log("close e clicked");
//   cards.classList.add("hidden");
//   const cardss = document.getElementById("cong2");
//   console.log("close e clicked");
//   cardss.classList.add("hidden");
//   const cardsss = document.getElementById("cong3");
//   console.log("close e clicked");
//   cardsss.classList.add("hidden");
// }

function func() {
  console.log("donate btn clicked");
  const input_man = document.getElementById("ammountt").value; //jeita ami dichi
  const input_int_man = parseFloat(input_man); //jeita ami dichi
  const my = document.getElementById("my_balance"); //amar je taka ache
  const my_balance_taka = my.innerText; //amar jei taka ache
  const my_balance_int = parseFloat(my_balance_taka); //my main acc blnce
  const curnt_money = document.getElementById("individuals_moneyyy"); //nokhali the kotho diche
  const curnt_money_now = curnt_money.innerText; //noakhli the main taka
  document.getElementById("ammountt").value = ""; //clear the input
  if (
    input_int_man >= 0 &&
    !isNaN(input_man) &&
    typeof input_int_man === "number" &&
    input_int_man < my_balance_int
  ) {
    curnt_money.innerText = input_int_man + parseFloat(curnt_money_now); //ami ja dichi+eder aga ja chilo
    const now_blnce = my_balance_int - input_int_man; //amar ache=age cha chilo-ekn ja dichi
    my_balance.innerText = now_blnce;
    const card = document.getElementById("cong2");
    card.classList.remove("hidden");
    const date = new Date();
    const historyItem = document.createElement("li");
    const mall = document.getElementById("head2");
    const mal = mall.innerText;
    historyItem.innerHTML = `<span><strong>${input_int_man} BDT is donated for ${mal} <br> Date:- on ${date}</span></strong>`;
    historyItem.classList.add(
      "p-9",
      "rounded-lg",
      "border-4",
      "w-fit",
      "item-center",
      "mx-auto"
    );

    // Append the new history item to the history list
    document.getElementById("history").appendChild(historyItem);
  } else {
    alert("please,currectly input data");
  }
}

function fact() {
  console.log("donate btn clicked");
  const input_man = document.getElementById("ammounttt").value; //jeita ami dichi
  // console.log(isNaN(input_man));
  const input_int_man = parseFloat(input_man); //jeita ami dichi
  const my = document.getElementById("my_balance"); //amar je taka ache
  const my_balance_taka = my.innerText; //amar jei taka ache
  const my_balance_int = parseFloat(my_balance_taka); //my main acc blnce
  const curnt_money = document.getElementById("individuals_moneyyyy"); //nokhali the kotho diche
  const curnt_money_now = curnt_money.innerText; //noakhli the main taka
  document.getElementById("ammounttt").value = ""; //clear the input
  if (
    input_int_man >= 0 &&
    !isNaN(input_man) &&
    typeof input_int_man === "number" &&
    input_int_man < my_balance_int
  ) {
    curnt_money.innerText = input_int_man + parseFloat(curnt_money_now); //ami ja dichi+eder aga ja chilo
    const now_blnce = my_balance_int - input_int_man; //amar ache=age cha chilo-ekn ja dichi
    my_balance.innerText = now_blnce;
    const card = document.getElementById("cong3");
    card.classList.remove("hidden");
    const date = new Date();
    const historyItem = document.createElement("li");
    const mall = document.getElementById("head3");
    const mal = mall.innerText;
    historyItem.innerHTML = `<span><strong>${input_int_man} BDT is donated for ${mal} <br> Date:- on ${date}</span></strong>`;
    historyItem.classList.add(
      "p-9",
      "rounded-lg",
      "border-4",
      "w-fit",
      "item-center",
      "mx-auto"
    );

    // Append the new history item to the history list
    document.getElementById("history").appendChild(historyItem);
  } else {
    alert("please,currectly input data");
  }
}

function checkButton() {
  // console.log("chk btn cnctd");
  const btn1 = document.getElementById("main_id");
  const btn2 = document.getElementById("Donation_btn");
  const btn3 = document.getElementById("history_id");
  const btn4 = document.getElementById("history_btn");

  if (!btn1.classList.contains("hidden")) {
    btn2.classList.add("bg-slate-600");
  }
  if (btn1.classList.contains("hidden")) {
    btn2.classList.remove("bg-slate-600");
  }
  if (!btn3.classList.contains("hidden")) {
    btn4.classList.add("bg-slate-600");
  }
  if (btn3.classList.contains("hidden")) {
    btn4.classList.remove("bg-slate-600");
  }
}

checkButton();
