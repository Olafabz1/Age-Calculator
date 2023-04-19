
let sendButton = document.querySelector("#send");
sendButton.addEventListener("click", function (e) {
  e.preventDefault();
});


const currentDate = new Date();
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); 
const currentYear = currentDate.getFullYear();


const dateString =
  currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;
console.log(dateString);


function calculateDate() {
   
    let day = document.forms["Form"]["dayInput"].value;
    let month = document.forms["Form"]["monthInput"].value;
    let year = document.forms["Form"]["yearInput"].value;
  
    let yearDiv = document.querySelector("#yearDiv");
    let monthDiv = document.querySelector("#monthDiv");
    let dayDiv = document.querySelector("#dayDiv");

     let datePast = `${year}-${month}-${day}`;

    let yearss = new Date(dateString).getFullYear() - new Date(datePast).getFullYear();
    let monthss = new Date(dateString).getMonth() - new Date(datePast).getMonth();
    let dayss = new Date(dateString).getDate() - Number(day);

    if (monthss < 0) {
      yearss -=1;
      monthss +=12;
    }
  
    if (dayss < 0) {
      dayss += getNoOfDays(year, month - 1);
    }
    
    if (day != "" && month != "" && year != "") {
    dayDiv.innerHTML = dayss;
    monthDiv.innerHTML = monthss;
    yearDiv.innerHTML = yearss;
    }
  };
  
  function getNoOfDays(y, m) {
    return new Date(y, m, 0).getDate();
  }

function validate() {
  let day = document.forms["Form"]["dayInput"].value;
  let month = document.forms["Form"]["monthInput"].value;
  let year = document.forms["Form"]["yearInput"].value;
  

  let errMsg1 = document.querySelector(".err-msg1");
  let errMsg2 = document.querySelector(".err-msg2");
  let errMsg3 = document.querySelector(".err-msg3");

  let label1 = document.querySelector("#label-red");
  let label2 = document.querySelector("#label-red2");
  let label3 = document.querySelector("#label-red3");

  
  if (day == "" || day > 31) {
    errMsg1.classList.remove("hide");
    document.forms["Form"]["dayInput"].classList.add("border-red");
    label1.classList.add("color-red");
  } else {
    errMsg1.classList.add("hide");
    document.forms["Form"]["dayInput"].classList.remove("border-red");
    label1.classList.remove("color-red");
  }
  if (month == "" || month > 12) {
    errMsg2.classList.remove("hide");
    document.forms["Form"]["monthInput"].classList.add("border-red");
    label2.classList.add("color-red");
  } else {
    errMsg2.classList.add("hide");
    document.forms["Form"]["monthInput"].classList.remove("border-red");
    label2.classList.remove("color-red");
  }
  if (year == "" || year > currentYear) {
    errMsg3.classList.remove("hide");
    document.forms["Form"]["yearInput"].classList.add("border-red");
    label3.classList.add("color-red");
  } else {
    errMsg3.classList.add("hide");
    document.forms["Form"]["yearInput"].classList.remove("border-red");
    label3.classList.remove("color-red");
  }

  calculateDate();

}


