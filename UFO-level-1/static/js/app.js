// from data.js
var tableData = data;

// LOAD ALL DATA 
var all = d3.select("#all-btn");

all.on("click", function(){
    console.log(`All clicked `);

    d3.event.preventDefault();

    var summaryDisplay = d3.select("#ufo-table>tbody");

    tableData.forEach(function(row){
      
    var newrow = summaryDisplay.append("tr")
    newrow.append("td").text(`${row.datetime}`);
    newrow.append("td").text(`${row.city}`);
    newrow.append("td").text(`${row.state}`);
    newrow.append("td").text(`${row.country}`);
    newrow.append("td").text(`${row.shape}`);
    newrow.append("td").text(`${row.durationMinutes}`);
    newrow.append("td").text(`${row.comments}`);
    });
});

// LOAD FILTERED DATA
var filter = d3.select("#filter-btn");

filter.on("click", function(){
    d3.event.preventDefault();
    // get the datetime filter
    //var datetime_obj = d3.select("#datetime");
    //var datetime = datetime_obj.property("value");
    var datetime = d3.select("#datetime").property("value");
    console.log(`filter clicked datetime ${datetime}`);
});
