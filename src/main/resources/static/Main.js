let tickets = [];

function buyTicket() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const film = document.getElementById('film').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const quantity = document.getElementById('quantity').value;

    if (validateEmail(email) && validatePhone(phone) && firstName && lastName && film && quantity) {
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

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^(0047|\+47|47)?\d{8}$/;
    return re.test(phone);
}

function clearTickets() {
    tickets = [];
    displayTickets();
}

function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';

    tickets.forEach(ticket => {
        const ticketItem = document.createElement('div');
        ticketItem.textContent = `Navn: ${ticket.firstName} ${ticket.lastName}, Film: ${ticket.film}, E-post: ${ticket.email}, Telefon: ${ticket.phone}, Antall: ${ticket.quantity}`;
        ticketList.appendChild(ticketItem);
    });
}

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
