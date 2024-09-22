// console.log("js conneced");
document.getElementById("Blog-btn").addEventListener("click", function () {
  window.open("blog.html", "_blank");
});
document.getElementById("Donation_btn").addEventListener("click", function () {
  window.location.href = "main.html";
});

function back() {
  window.location.href = "index.html";
  //   console.log("back btn pressed");
}
