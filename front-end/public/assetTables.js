$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/all_stock",
        method: "GET",
        success: function (data) {
            console.log("Data for table:", data)
            createTable('#table-container1', data)
        },
        error: function (error) {
            console.log(error);
        }


    })
})

$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/all_crypto",
        method: "GET",
        success: function (data) {
            console.log("Data for table:", data)
            createTable('#table-container2', data)
        },
        error: function (error) {
            console.log(error);
        }


    })
})

function createTable(container, data){
    var table = $('<table class="table"></table>');
    var thead = $('<thead><tr><th scope="col">Symbol</th><th scope="col">Value</th></tr></thead>');
    table.append(thead)
    var tbody = $('<tbody></tbody>');
    var count =1;
    $.each(data, (index, asset) => {
        if (count!==7){
            var row = $('<tr></tr>');
            row.append('<th scope="row">' + asset.name + '</th>')
            row.append('<td>' + asset.value + '</td>');
            count += 1;
            tbody.append(row);
        }
    });
    table.append(tbody);

    $(container).append(table);
}