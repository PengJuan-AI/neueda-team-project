$(document).ready(function() {
    document.getElementById('myForm').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        const selectValue = document.getElementById('stockForm').value;
        const inputValue = document.getElementById('numberInput').value;
    
        console.log(selectValue)
        console.log(inputValue)
        if (inputValue !== 0){
            $.ajax({
                url: "http://localhost:3000/update",
                method: "PUT",
                contentType: 'application/json', // Set content type to JSON
                data: JSON.stringify({
                    symbol: selectValue,
                    quantity: inputValue
                }),
                success: function (response) {
                    console.log('Successfully call update')
                    window.alert("Successfully update the quantity.")
                    $.ajax({
                        url: "http://localhost:3000/get_networth",
                        method: "GET",
                        success: function (data) {
                            console.log("Net Worth", data)
                            $('#networth').text(data)

                        },
                        error: function (error) {
                            console.log(error);
                        }
                    })
                },
                error: function (error) {
                    console.log(error);
                }
        
            }
        )
        } else {
            // if quantity equals 0 -> delete the asset
        }
        
    });

})

function updateAssetQuantity(){
    
}
