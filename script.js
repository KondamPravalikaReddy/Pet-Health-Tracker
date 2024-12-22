function savePetInfo() {
    const name = document.getElementById('pet-name').value;
    const age = document.getElementById('pet-age').value;
    const breed = document.getElementById('pet-breed').value;
    const weight = document.getElementById('pet-weight').value;
    const height = document.getElementById('pet-height').value;
    
    console.log('Pet Info Saved:', { name, age, breed, weight, height });
}

function updateHealthInfo() {
    const temperature = document.getElementById('temperature').value;
    const pulse = document.getElementById('pulse').value;
    const respiratoryRate = document.getElementById('respiratory-rate').value;
    const vaccinationStatus = document.getElementById('vaccination-status').value;
    
    console.log('Health Info Updated:', { temperature, pulse, respiratoryRate, vaccinationStatus });
}

function addMedication() {
    const medicationsList = document.getElementById('medications-list');
    const newMedication = document.createElement('div');
    
    newMedication.innerHTML = `
        <input type="text" placeholder="Medication Name" />
        <input type="text" placeholder="Dosage" />
        <input type="text" placeholder="Frequency" />
    `;
    
    medicationsList.appendChild(newMedication);
}

function addAppointment() {
    const appointmentsList = document.getElementById('appointments-list');
    const newAppointment = document.createElement('div');
    
    newAppointment.innerHTML = `
        <input type="date" placeholder="Date" />
        <input type="time" placeholder="Time" />
        <input type="text" placeholder="Appointment Type" />
    `;
    
    appointmentsList.appendChild(newAppointment);
}