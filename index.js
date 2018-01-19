const calculateBtn = document.querySelector('#calculateBtn');
const calculateForm = document.querySelector('#calculateForm');
const selectLoan = document.querySelector('#selectLoan');
const amount = document.querySelector('#amount');
const selectTime = document.querySelector('#time');

let principle;
let interestRate;
let time;
let returnAmount;

loadEventListener();

function loadEventListener(){

  selectLoan.addEventListener('change', setInterest);
  selectTime.addEventListener('change', setTime);
  calculateForm.addEventListener('submit',calculate);
}



function setInterest(){
  if(selectLoan.value === 'Personal'){
    interestRate = 12;
    amount.setAttribute('min', 500);
    amount.setAttribute('max', 5000)
  }
  else if (selectLoan.value === 'Business') {
    interestRate = 18;
    amount.setAttribute('min', 5000);
    amount.setAttribute('max', 50000)
  }
  else if (selectLoan.value === 'Student') {
    interestRate = 8;
    amount.setAttribute('min', 500);
    amount.setAttribute('max', 3000)
  }
  else if (selectLoan.value === 'Housing') {
    interestRate = 15;
    amount.setAttribute('min', 25000);
    amount.setAttribute('max', 100000)
  }
}

function setTime(){
  if (selectTime.value === 'Select'){
    alert('Please select the time period required for you to pay the loan back !!!')
  }
  else if (selectTime.value === 'One') {
    time = 1;
  }
  else if (selectTime.value === 'Two') {
    time = 2;
  }
  else if (selectTime.value === 'Three') {
    time = 3;
  }
  else if (selectTime.value === 'Five') {
    time = 5;
  }
  else if (selectTime.value === 'Ten') {
    time = 10;
  }
  else if (selectTime.value === 'Fifteen') {
    time = 15;
  }
}

function calculate(e){
  e.preventDefault();
  if(selectTime.value === 'Select' || selectLoan.value === 'Select' ){
    alert('Invalid parameters');
  }
  else{
    principle = parseInt(amount.value);
    returnAmount = parseInt((principle*time*interestRate)/100);
    returnAmount = returnAmount + principle;
    document.getElementById('result').innerHTML = `
    <p class="lead text-center">You will return total :</p>
    <h4 class="display-4">${returnAmount}</h4>
    `;
  }
}
