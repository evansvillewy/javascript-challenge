// from data.js
var tableData = data;

// get the distinct cities from the data so we can build a city drop down select list
//https://codeburst.io/javascript-array-distinct-5edc93501dc4
const distinctCities = [...new Set(tableData.map(x => x.city))];

// add the distinct city list to the select list
distinctCities.forEach(function(data) {
	// create the drop down menu of cities
	var selector = d3.select(".custom-select")
        .append("option")
		.text(data)
    });

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
    let datetime = d3.select("#datetime").property("value");
    let city = d3.select(".custom-select").property("value");

    // remove existing table rows and table data, except the header
    d3.selectAll("#ufo-table>tbody>tr").remove();
    d3.selectAll("#ufo-table>tbody>td").remove();    

    let filters={};

    if (datetime ) {
        console.log(`filter clicked datetime ${datetime}`);
        filters.datetime = datetime;
    }
    if(city ){
        console.log(`filter clicked city ${city}`); 
        filters.city = city;
    }

    console.log(`filters datetime ${filters.datetime}`); 
    console.log(`filters city ${filters.city}`); 

    // multiple values source reference
    //https://stackoverflow.com/questions/18719383/how-to-filter-an-array-object-by-checking-multiple-values
    let filteredData= tableData.filter(item => {
        for (let key in filters) {
          if (item[key] === undefined || item[key] != filters[key])
            return false;
        }
        return true;
      });  

    console.log(filteredData);

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