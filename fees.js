  // Initialize sector fees array with hardcoded values
  let sectorFees = [
    { name: "VENOM Fee", amount: 50, required: true }, // Example of a required sector fee
    { name: "CSC Fee", amount: 300, required: false },
    { name: "Gender Fee", amount: 200, required: true }, // Example of a required sector fee
    { name: "PSITS Fee", amount: 100, required: false }  // Example of an optional sector fee
    // Add more hardcoded sector fees as needed
];

// Function to display sector fees
function displaySectorFees() {
    const tableBody = document.getElementById('feeTableBody');
    tableBody.innerHTML = '';

    sectorFees.forEach((sector, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${sector.name}</td>
            <td>${sector.amount}</td>
            <td>${sector.required ? 'Yes' : 'No'}</td>
            <td><button class="deleteBtn" onclick="deleteFee(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to delete a fee
function deleteFee(index) {
    sectorFees.splice(index, 1);
    displaySectorFees();
}

// Add sector form submit event listener
document.getElementById('addSectorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('sectorName').value;
    const amount = parseFloat(document.getElementById('sectorAmount').value);
    const required = document.getElementById('sectorRequired').checked;

    if (name.trim() !== '' && !isNaN(amount)) {
        sectorFees.push({ name: name, amount: amount, required: required });
        displaySectorFees();
        closeModal();
        // Reset form fields
        document.getElementById('addSectorForm').reset();
    } else {
        alert('Please fill in all fields correctly.');
    }
});

// Modal functionality
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementsByClassName('close')[0];

openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModalBtn.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

function closeModal() {
    modal.style.display = 'none';
}


displaySectorFees();