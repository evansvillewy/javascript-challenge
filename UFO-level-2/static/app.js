// from data.js
var tableData = data;

// LOAD ALL DATA 
var all = d3.select("#all-btn");

all.on("click", function(){
    console.log(`All clicked `);

    d3.event.preventDefault();

    // select the table body
    var allDisplay = d3.select("#ufo-table>tbody");

    // append all the data to the table body
    tableData.forEach(function(row){
        var newrow = allDisplay.append("tr")
        newrow.append("td").text(`${row.datetime}`);
        newrow.append("td").text(`${row.city}`);
        newrow.append("td").text(`${row.state}`);
        newrow.append("td").text(`${row.country}`);
        newrow.append("td").text(`${row.shape}`);
        newrow.append("td").text(`${row.durationMinutes}`);
        newrow.append("td").text(`${row.comments}`);
    });
});

var filter = d3.select("#filter-btn");

filter.on("click", function(){
    d3.event.preventDefault();
    console.log(`Filter clicked `);

    // get the datetime filter
    var datetime = d3.select("#datetime").property("value");
    var city = d3.select(".custom-select").property("value");

    console.log(`filter clicked datetime ${datetime}`);
    console.log(`filter clicked city ${city}`);    

    // remove existing table rows and table data, except the header
    d3.selectAll("#ufo-table>tbody>tr").remove();
    d3.selectAll("#ufo-table>tbody>td").remove();    

    // filter the tableData based on the datetime filter
    // single filter source reference
    // https://www.javascripttutorial.net/javascript-array-filter/
    var filteredData = tableData.filter(function (e) {
        return e.datetime = datetime;
        });

            // select the table body
    var filterDisplay = d3.select("#ufo-table>tbody");

    // append the filtered data to the table body
    filteredData.forEach(function(row){
        var newRow = filterDisplay.append("tr")
        newRow.append("td").text(`${row.datetime}`);
        newRow.append("td").text(`${row.city}`);
        newRow.append("td").text(`${row.state}`);
        newRow.append("td").text(`${row.country}`);
        newRow.append("td").text(`${row.shape}`);
        newRow.append("td").text(`${row.durationMinutes}`);
        newRow.append("td").text(`${row.comments}`);
    });
});