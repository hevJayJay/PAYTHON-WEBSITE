function openModal() {
  document.getElementById("overlay").style.display = "block";
}

function closeModal() {
  document.getElementById("overlay").style.display = "none";
}

document.getElementById("paymentForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const name = "Jomark J. Abello"; // Hardcoded name
  const course = "Computer Science"; // Hardcoded course
  const section = "2nd Year, Section C"; // Hardcoded section
  const gcashAmount = parseFloat(document.getElementById("gcashAmount").value);
  const totalAmount = calculateTotalAmount();
  const transactionID = generateTransactionID();
  
  if (totalAmount === gcashAmount) {
    const receipt = {
      name: name,
      course: course,
      section: section,
      totalAmount: totalAmount,
      transactionID: transactionID
    };
    localStorage.setItem('receipt', JSON.stringify(receipt));
    const receiptURL = 'history.html';
    window.open(receiptURL, '_blank');
  } else {
    alert("Please pay the exact amount.");
  }
});

function calculateTotalAmount() {
  const venomFee = 50; // Hardcoded VENOM Fee
  const cscFee = 300; // Hardcoded CSC Fee
  const genderClubFee = 200; // Hardcoded Gender Club Fee
  const psitsFee = 100; // Hardcoded PSITS Fee

  return venomFee + cscFee + genderClubFee + psitsFee;
}

function generateTransactionID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const length = 8; // Adjust length as needed
  let transactionID = '';
  for (let i = 0; i < length; i++) {
    transactionID += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return transactionID;
}


//for opening profile
  let subMenu = document.getElementById("subMenu");

  function toggleMenu(){
    subMenu.classList.toggle("open-menu");
  }
//for opening profile