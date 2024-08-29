$(document).ready(function() {
    document.getElementById('myForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        const selectValue = document.getElementById('stockForm').value;
        const inputValue = document.getElementById('numberInput').value;
    
        console.log(selectValue)
        console.log(inputValue)
    });
})
