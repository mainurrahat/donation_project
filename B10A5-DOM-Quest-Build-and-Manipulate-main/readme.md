# Welcome to Assignment 5

## <img width=30px src="assets/logo.png"/> DONATE BANGLADESH

## Key Rule

- Do not ask about mark distribution in the group, as it will not be provided.
- Do not post assignment feedback after receiving it. If you encounter issues or have complaints, please join a support session for discussion.
- Avoid using "lorem ipsum" text. Use relevant and meaningful content instead.
- Feel free to modify the color or design, but ensure the design is visually appealing and professional.
- You are **not allowed** to use any JavaScript library or framework for this assignment.

## Design

- **Navbar**: Create a visually appealing navbar with the following structure:
  - Logo positioned in the middle.
  - "Blog" button on the left.
  - Account balance with a coin icon on the right.
  - "Donation" and "History" buttons in the center (as per Figma).
- **Donation Cards**: Create 3 donation cards with the following details:
  - Image on the left.
  - Donation title.
  - Donation info.
  - Current donation amount.
  - Input field for donation amount.
  - Button for submitting the donation.
- **History Section**: Initially hidden and empty.

## Functionalities

- **Donation and History Button Functionality**:
  - Clicking the "History" button will hide the donation data and display the history.
  - Clicking the "Donation" button will hide the history and display the donation data.
- **Donation Functionality for Each Card**:
  - When the "Donate Now" button is clicked:
    - The donation input will be deducted from the total account balance, and the updated balance will be shown.
    - The card’s current donation amount will increase.
    - A meaningful notification will be added to the History section.
- **Input Validation**:
  - Show an alert if invalid data is found and stop the transaction.
  - Validate the donation amount:
    - If the donation amount is greater than the account balance.
    - If the input field contains an invalid number.
    - If the input field is empty.
- **History Section**:
  - The history section will display transaction notifications, including:
    - Date and time of the transaction.
    - Donation amount.
    - Donation name.

## Challenges

- **Sticky Navbar**: Make the navbar sticky to the top of the page.
- **Blog Page**: Create a `blog.html` file and link it to the main page:
  - The blog page should contain 4 questions and their answers:
    1. What is the Document Object Model (DOM)?
    2. How do you select an element from the DOM?
    3. What is event delegation in the context of the DOM, and why is it useful?
    4. How do you manipulate an element's attributes and styles using the DOM?
- **Toggle Active Status**: Toggle the active status of the "Donation" and "History" buttons:
  - Change the button color to indicate when it's active.
- **Static Modal**: Display a static modal instead of an alert on a successful donation.
- **Reusable Functions**: Use at least 2 common functions.
- **Responsive Design**: Ensure the application is responsive for different screen sizes.

- **Input Validation**:
- Validate the donation amount:

  - If the donation amount is greater than the account balance.
  - If the input field contains an invalid number.
  - If the input field is empty.
    <!-- main card gula eikhane -->
    // console.log("js conneced");
    document.getElementById("Blog-btn").addEventListener("click", function () {
    window.open("blog.html", "\_blank");
    });
    function back() {
    window.location.href = "index.html";
    }
    function playmain() {
    const main_section = document.getElementById("main_id");
    main_section.classList.remove("hidden");
    const play_section = document.getElementById("histoty_id");
    play_section.classList.add("hidden");
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
const card = document.getElementById("cong1");
card.classList.remove("hidden");
} else {
alert("plz,currectly input data");
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
// const cards = document.getElementById("cong1");
// console.log("close e clicked");
// cards.classList.add("hidden");
// const cardss = document.getElementById("cong2");
// console.log("close e clicked");
// cardss.classList.add("hidden");
// const cardsss = document.getElementById("cong3");
// console.log("close e clicked");
// cardsss.classList.add("hidden");
// }
// function closeeee() {
// const cards = document.getElementById("cong1");
// console.log("close e clicked");
// cards.classList.add("hidden");
// const cardss = document.getElementById("cong2");
// console.log("close e clicked");
// cardss.classList.add("hidden");
// const cardsss = document.getElementById("cong3");
// console.log("close e clicked");
// cardsss.classList.add("hidden");
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
typeof input_int_man === "number" &&
input_int_man < my_balance_int
) {
curnt_money.innerText = input_int_man + parseFloat(curnt_money_now); //ami ja dichi+eder aga ja chilo
const now_blnce = my_balance_int - input_int_man; //amar ache=age cha chilo-ekn ja dichi
my_balance.innerText = now_blnce;
const card = document.getElementById("cong2");
card.classList.remove("hidden");
} else {
alert("plz,currectly input data");
}
}

function fact() {
console.log("donate btn clicked");
const input_man = document.getElementById("ammounttt").value; //jeita ami dichi
const input_int_man = parseFloat(input_man); //jeita ami dichi
const my = document.getElementById("my_balance"); //amar je taka ache
const my_balance_taka = my.innerText; //amar jei taka ache
const my_balance_int = parseFloat(my_balance_taka); //my main acc blnce
const curnt_money = document.getElementById("individuals_moneyyyy"); //nokhali the kotho diche
const curnt_money_now = curnt_money.innerText; //noakhli the main taka
document.getElementById("ammounttt").value = ""; //clear the input
if (
input_int_man >= 0 &&
typeof input_int_man === "number" &&
input_int_man < my_balance_int
) {
curnt_money.innerText = input_int_man + parseFloat(curnt_money_now); //ami ja dichi+eder aga ja chilo
const now_blnce = my_balance_int - input_int_man; //amar ache=age cha chilo-ekn ja dichi
my_balance.innerText = now_blnce;
const card = document.getElementById("cong3");
card.classList.remove("hidden");
} else {
alert("plz,currectly input data");
}
}

 <main id="histoty_id" class="py-9 bg-white container mx-auto mt-48 hidden">

        <!-- history packet  -->
        <section>
            <!-- noakhali history start -->
            <section
                class="flex flex-col md:flex-row justify-center mt-12 border-4 w-[430px] h-[120px]   md:w-[1140px] md:h-[134px] mx-auto rounded-xl p-5">
                <h1>96500 Taka is Donated for famine-2024 at noakhali, Bangladesh</h1>
            </section>
            <!-- feni history start -->
            <section
                class="flex flex-col md:flex-row justify-center mt-12 border-4 w-[430px] h-[120px] md:w-[1140px] md:h-[134px] mx-auto rounded-xl p-5">
                <h1>6500 Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
            </section>
            <!-- quata history movement -->
            <section
                class="flex flex-col md:flex-row justify-center mt-12 border-4 w-[430px] h-[120px] md:w-[1140px] md:h-[134px] mx-auto rounded-xl p-5">
                <h1>15500 Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
            </section>

        </section>
    </main>
