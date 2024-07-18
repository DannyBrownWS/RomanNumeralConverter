const numberInput = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const outputDiv = document.getElementById("output-div");


const isInputInvalid = () => {
  if (numberInput.value === "") {
    output.innerText = "Please enter a valid number";
    outputDiv.classList.remove("hide");
    return true;
  } else if (numberInput.value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    outputDiv.classList.remove("hide");
    return true;
  } else if (numberInput.value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    outputDiv.classList.remove("hide");
    return true;
  } else {
    return false;
  }
};

const conversion = (input) => {
  
  if (input >= 1000) {
    return "M".repeat(Math.floor(input / 1000)) + conversion(input % 1000);
  } else if (input >= 900) {
    return "CM".repeat(Math.floor(input / 900)) + conversion(input % 900);
  } else if (input >= 500) {
    return "D".repeat(Math.floor(input / 500)) + conversion(input % 500);
  } else if (input >= 400) {
    return "CD".repeat(Math.floor(input / 400)) + conversion(input % 400);
  } else if (input >= 100) {
    return "C".repeat(Math.floor(input / 100)) + conversion(input % 100);
  } else if (input >= 90) {
    return "XC".repeat(Math.floor(input / 90)) + conversion(input % 90);
  } else if (input >= 50) {
    return "L".repeat(Math.floor(input / 50)) + conversion(input % 50);
  } else if (input >= 40) {
    return "XL".repeat(Math.floor(input / 40)) + conversion(input % 40);
  } else if (input >= 10) {
    return "X".repeat(Math.floor(input / 10)) + conversion(input % 10);
  } else if (input >= 9) {
    return "IX".repeat(Math.floor(input / 9)) + conversion(input % 9);
  } else if (input >= 5) {
    return "V".repeat(Math.floor(input / 5)) + conversion(input % 5);
  } else if (input >= 4) {
    return "IV".repeat(Math.floor(input / 4)) + conversion(input % 4);
  } else if (input >= 1) {
    return "I".repeat(Math.floor(input / 1)) + conversion(input % 1);
  } else {
    return "";
  };

}

const checkUserInput = () => {
  
  if(isInputInvalid()) {
    return;
  };
  
  outputDiv.classList.remove("hide");
  output.innerText = conversion(numberInput.value);
};

convertButton.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  };
});
