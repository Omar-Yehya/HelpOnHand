const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('open'); // Toggle the 'open' class
});


document.querySelector('.add-vehicle').addEventListener('click', addVehicle);

function addVehicle() {
    const modal = document.getElementById('add-vehicle-modal');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('vehicle-form');

    // Show the modal
    modal.style.display = 'block';

    // Close modal when clicking X
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Handle form submission
    form.onsubmit = (e) => {
        e.preventDefault();

        // Get values from form
        const make = document.getElementById('make').value || 'N/A';
        const model = document.getElementById('model').value || 'N/A';
        const year = document.getElementById('year').value || 'N/A';
        const trim = document.getElementById('trim').value || 'N/A';
        const color = document.getElementById('color').value || 'N/A';
        const location = document.getElementById('location').value || 'N/A';
        const price = document.getElementById('price').value || 'N/A';

        // Get and clone the template
        const template = document.querySelector('#car-template');
        const newCar = template.content.cloneNode(true);

        // Set the placeholder image
        newCar.querySelector('.car-image').src = 'pictures/placeholder.jpg';
        newCar.querySelector('.car-image').alt = `${make} ${model}`;

        // Fill in all the details
        const details = newCar.querySelectorAll('.car-detail');
        details[0].textContent = make;
        details[1].textContent = model;
        details[2].textContent = year;
        details[3].textContent = trim;
        details[4].textContent = color;
        details[5].textContent = `Location: ${location}`;
        details[6].textContent = `Price: ${price.startsWith('Contact') ? price : '$' + price}`;

        // Add the new car to the display
        document.querySelector('#car-rows').appendChild(newCar);

        // Reset and close the form
        form.reset();
        modal.style.display = 'none';
    }
}

// Add click event to the add-vehicle button
document.querySelector('.add-vehicle').addEventListener('click', addVehicle);