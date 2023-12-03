const HEADERS = {
    warehouses: "Warehouse Alias,Location,Actions",

};

const DATA = {
    warehouses: [
        "ABC Warehouse Manila - Shipments,Manila,Edit",
        "ABC Warehouse Cebu - Shipments,Cebu City,Edit",
        "ABC Warehouse Antipolo - Shipments,Antipolo City,Edit",
        "ABC Warehouse Bulacan - Shipments,Bulacan,Edit",
        "ABC Warehouse CDO - Shipments,Cagayan De Oro,Edit",
        "ABC Warehouse Davao - Shipments,Davao City,Edit"
    ]
};

function renderHeader(headers){
    const hl = headers.split(',');
    hl.forEach(h => {
        $('#headers').append('<th>' + h +'</th>');
    });
}

function renderData(data){
    data.forEach(d => {
        const dataList = d.split(',');
        var row = document.createElement('tr');
        dataList.forEach(c =>{
            var col = document.createElement('td');
            col.innerText = c;
            row.appendChild(col);
        });
        document.querySelector('#data').appendChild(row);
    });
    
}