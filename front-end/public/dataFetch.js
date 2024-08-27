
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/",
        method: "GET",
        success: function (data) {
            console.log(data)
            var table = $('<table class="table"></table>');
            var thead = $('<thead><tr><th scope="col">ID</th><th scope="col">Symbol</th><th scope="col">Price</th><th scope="col">Quantity</th></tr></thead>');
            table.append(thead)
            var tbody = $('<tbody></tbody>');
            $.each(data, (index, item) => {
                $.each(item, (index, asset)=>{
                    var row = $('<tr></tr>');
                    row.append('<th scope="row">' + asset.id + '</th>')
                    row.append('<td>' + asset.symbol + '</td>');
                    row.append('<td>' + asset.price + '</td>');
                    row.append('<td>' + asset.quantity + '</td>');
                    tbody.append(row);
                })
            });
            table.append(tbody);

            $('#data-container').append(table);
        },
        error: function (error) {
            console.log(error);
        }


    })
})