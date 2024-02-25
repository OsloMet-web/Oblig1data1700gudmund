let tickets = [];
//fetches values
function buyTicket() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const film = document.getElementById('film').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const quantity = document.getElementById('quantity').value;
//checks if values are there and corrext
    if (validateEmail(email) && validatePhone(phone) && validateFirstName(firstName) && validateLastName(lastName) && film && quantity) {
        const ticket = {
            firstName: firstName,
            lastName: lastName,
            film: film,
            email: email,
            phone: phone,
            quantity: quantity
        };

        tickets.push(ticket);
        displayTickets();
        clearForm();
    } else {
        alert('Vennligst fyll ut alle feltene med riktige verdier.');
    }
}
//regex for first name
function validateFirstName(firstName) {
    const re = /^[a-zA-ZæøåÆØÅ\- ]+$/;
    return re.test(firstName);
}
//regex for last name

function validateLastName(lastName) {
    const re = /^[a-zA-ZæøåÆØÅ\- ]+$/;
    return re.test(lastName);
}
//regex for email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
//regex for phone
function validatePhone(phone) {
    const re = /^(0047|\+47|47)?\d{8}$/;
    return re.test(phone);
}
//clears tickets table
function clearTickets() {
    tickets = [];
    displayTickets();
}

function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';
//adds tickets to list
    tickets.forEach(ticket => {
        const ticketItem = document.createElement('div');
        ticketItem.textContent = `Navn: ${ticket.firstName} ${ticket.lastName}, Film: ${ticket.film}, E-post: ${ticket.email}, Telefon: ${ticket.phone}, Antall: ${ticket.quantity}`;
        ticketList.appendChild(ticketItem);
    });
}
//clears forms by changing values to empty
function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('film').value = '';
    document.getElementById('quantity').value = '';
}

// Event listeners for buttons
document.getElementById('buyTicketBtn').addEventListener('click', buyTicket);
document.getElementById('clearTicketsBtn').addEventListener('click', clearTickets);
