document.addEventListener('DOMContentLoaded', function() {

    // let inputValue = ""
    const inputEl = document.getElementById("numInput-el");
    const buttonClick = document.getElementById("button-click");
    const errorMessage = document.getElementById("error-el")

    const massEl = document.getElementById("mass-el")
    const volumeEl = document.getElementById("volume-el")
    const lengthEl = document.getElementById("length-el")


    function handleButtonClick() {
        let inputValue = parseFloat(inputEl.value);
        if (isNaN(inputValue)) {
            // console.log("Invalid input. Please enter a valid number.")
            errorMessage.textContent = 'Invalid input. Please enter a valid number.';
            lengthEl.textContent = ""
            volumeEl.textContent = ""
            massEl.textContent = ""
            return;
        }
        else {
            // clear error message
            errorMessage.textContent = '';
            
            // define conversion factors
            const distanceCF = 3.28084;
            const volumeCF = 0.264172;
            const massCF = 2.20462;

            // meters <-> feet
            const metersToFeet = inputValue * distanceCF;
            const feetToMeters = inputValue / distanceCF;

            // gallons <-> liters
            const litersToGallons = inputValue * volumeCF;
            const gallonsToLiters = inputValue / volumeCF;

            // kg <-> pounds
            const kgToPounds = inputValue * massCF;
            const poundsToKg = inputValue / massCF;


            // insert text
            lengthEl.textContent = `${inputValue} meters = ${metersToFeet.toFixed(2)} feet | ${inputValue} feet = ${feetToMeters.toFixed(2)} meters`
            volumeEl.textContent = `${inputValue} liters = ${litersToGallons.toFixed(2)} gallons | ${inputValue} gallons = ${gallonsToLiters.toFixed(2)} liters`
            massEl.textContent = `${inputValue} kliograms = ${kgToPounds.toFixed(2)} pounds | ${inputValue} pounds = ${poundsToKg.toFixed(2)} kilograms`
            
            console.log(inputValue)
            return;
        }
    }

    buttonClick.addEventListener("click", handleButtonClick);

});