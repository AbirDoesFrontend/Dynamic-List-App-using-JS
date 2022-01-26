const userName = document.getElementById('userName');
const userAmount= document.getElementById('userAmount');
const userEmail = document.getElementById('userEmail');
const userNum = document.getElementById('userNum');
const userBtn = document.querySelector(".btn");
const userList = document.getElementById('userList');


// Event Listeners

userBtn.addEventListener("click", function(event){
 event.preventDefault();
 if(userName.value == "" || userAmount.value == "" || userEmail.value == "" || userNum.value == ""){
  alert("Please Fill Out All The Field In The Form");
 } else{

  // Creating New Table Row
  const newRow = document.createElement('tr');

  // Creating User Name Data
  const newUserName = document.createElement('td');
  newUserName.innerHTML = userName.value;
  newRow.appendChild(newUserName);

  // Creating User Amount Data
  const newUserAmount = document.createElement('td');
  newUserAmount.innerHTML = userAmount.value;
  newRow.appendChild(newUserAmount);


  // Creating User Email Data
  const newUserEmail = document.createElement('td');
  newUserEmail.innerHTML = userEmail.value;
  newRow.appendChild(newUserEmail);


  // Creating User Mobile No. Data
  const newUserNum = document.createElement('td');
  newUserNum.innerHTML = userNum.value;
  newRow.appendChild(newUserNum);
  

  // Display Value
  userList.appendChild(newRow);


  // Fixing Fill Up Problem

  userName.value = "";
  userAmount.value = "";
  userEmail.value = "";
  userNum.value = "";
 }

 
})
