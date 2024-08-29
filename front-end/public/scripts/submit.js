$(document).ready(function() {
    document.getElementById('myForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        const selectValue = document.getElementById('stockForm').value;
        const inputValue = document.getElementById('numberInput').value;
    
        console.log(selectValue)
        console.log(inputValue)
        $.ajax({
            url: "http://localhost:3000/update",
            method: "PUT",
            contentType: 'application/json', // Set content type to JSON
            data: JSON.stringify({
                symbol: selectValue,
                quantity: inputValue
            }),
            success: function (data) {
                console.log('Successfully call update')
            },
            error: function (error) {
                console.log(error);
            }
    
        })
    });
})
