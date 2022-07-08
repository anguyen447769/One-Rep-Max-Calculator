let form = document.getElementById("form");

const calculateMax = () => {
  let reps = document.querySelector("#reps").value;
  let weight = document.querySelector("#weight").value;
  console.log(reps);
  console.log(reps);

  let maxRep = weight * (1 + reps / 30);
  let roundedMaxRep = Math.round(maxRep);
  console.log(roundedMaxRep);

  /*Displays output of 1 rep max calculation*/
  const displayMax = document.querySelector(".output");
  displayMax.innerText = "Your One Rep Max is " + roundedMaxRep + " lbs";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  calculateMax();
});
