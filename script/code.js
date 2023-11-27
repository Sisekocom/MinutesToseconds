function convert() {
    let minutes = document.getElementById('minutes').value;
    if (isNaN(minutes) || minutes === '') {
        alert('Please enter a valid number for minutes.');
        return;
    }
    let seconds = (minutes * 60).toFixed(2);
    document.getElementById('result').innerText = `Converted to seconds: ${seconds} seconds`;
}
