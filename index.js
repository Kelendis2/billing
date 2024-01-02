const buttonTip = document.querySelector(".page__button-tips");
const chooseTip = document.querySelector(".page__choose-tips");
const form = document.querySelector(".page__form");

buttonTip.addEventListener("click", (evt) => {
  if (bill === "" || people === "") {
      Swal.fire({
        icon: "error",
        title: "Error!.",
        text: "Please eneter your information!",
      })
  }
  evt.preventDefault();
  chooseTip.style.display = "block";
});

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const bill = document.querySelector("#bill").value;
  const people = document.querySelector("#people").value;
  const firstAnswer = document.querySelector("#bill-result");
  firstAnswer.textContent = (bill / people).toFixed(2);
  const tip = document.querySelector(".page__choose-tips").value;
  const secondAnswer = document.querySelector("#tip-result");
  secondAnswer.textContent = ((bill * tip) / 100 / people).toFixed(2);;
  const total = document.querySelector("#total-result");
  total.textContent = (Number(firstAnswer.textContent) + Number(secondAnswer.textContent)).toFixed(2); ;
});
