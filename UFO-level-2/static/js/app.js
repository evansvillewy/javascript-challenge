// from data.js
var tableData = data;

// get the distinct cities from the data so we can build a city drop down select list
//https://codeburst.io/javascript-array-distinct-5edc93501dc4
const distinctCities = [...new Set(tableData.map(x => x.city))];

// get the distinct states from the data so we can build a state drop down select list
const distinctStates = [...new Set(tableData.map(x => x.state))];

// get the distinct countries from the data so we can build a country drop down select list
const distinctCos = [...new Set(tableData.map(x => x.country))];

// get the distinct shapes from the data so we can build a shape drop down select list
const distinctShapes = [...new Set(tableData.map(x => x.shape))];

let  cityDD = d3.select("#city");
let  stateDD = d3.select("#state");
let  coDD = d3.select("#country");
let  shapeDD = d3.select("#shape");

cityDD.append("option").text("--Select a City--");
stateDD.append("option").text("--Select a State--");
coDD.append("option").text("--Select a Country--");
shapeDD.append("option").text("--Select a Shape--");

// add the distinct city list to the select list
distinctCities.forEach(function(data) {
	// create the drop down menu of cities
	cityDD
        .append("option")
		.text(data)
    });

// add the distinct state list to the select list
distinctStates.forEach(function(data) {
	// create the drop down menu of states
	stateDD
        .append("option")
		.text(data)
    });

// add the distinct country list to the select list
distinctCos.forEach(function(data) {
	// create the drop down menu of countries
	coDD
        .append("option")
		.text(data)
    });

// add the distinct shape list to the select list
distinctShapes.forEach(function(data) {
	// create the drop down menu of shapes
	shapeDD
        .append("option")
		.text(data)
    });

// LOAD ALL DATA 
var all = d3.select("#all-btn");

all.on("click", function(){
    //console.log(`All clicked `);

    d3.event.preventDefault();

    // select the table body
    var allDisplay = d3.select("#ufo-table>tbody");

    // append all the data to the table body
    tableData.forEach(function(row){
        var newRow = allDisplay.append("tr");
        Object.entries(row).forEach(([key,value]) => {
            var cell = allDisplay.append("td");
            cell.text(value);
        });
    });     
});

var filter = d3.select("#filter-btn");

// filter cliked function
filter.on("click", function(){

    //Prevent the page from reloading with D3
    d3.event.preventDefault();
    //console.log(`Filter clicked `);

    // get the datetime filter
    let datetime = d3.select("#datetime").property("value");

    //get the city filter
    let city = cityDD.property("value");

    //get the state filter
    let state = stateDD.property("value");

    //get the country filter
    let country = coDD.property("value");

    //get the shape filter
    let shape = shapeDD.property("value");    

    // remove existing table rows and table data, except the header
    d3.selectAll("#ufo-table>tbody>tr").remove();
    d3.selectAll("#ufo-table>tbody>td").remove();    

    //create a dictionary to hold the filters
    let filters={};

    if (datetime ) {
        //console.log(`filter clicked datetime ${datetime}`);
        filters.datetime = datetime;
    }
    if(city && city != "--Select a City--"){
        //console.log(`filter clicked city ${city}`); 
        filters.city = city;
    }
    if(state && state != "--Select a State--"){
        //console.log(`filter clicked state ${state}`); 
        filters.state = state;
    }    

    if(country && country != "--Select a Country--"){
        //console.log(`filter clicked country ${country}`); 
        filters.country = country;
    }    

    if(shape && shape != "--Select a Shape--"){
        //console.log(`filter clicked shape ${shape}`); 
        filters.shape = shape;
    }    

    // multiple values source reference
    //https://stackoverflow.com/questions/18719383/how-to-filter-an-array-object-by-checking-multiple-values
    let filteredData= tableData.filter(item => {
        for (let key in filters) {
          if (item[key] === undefined || item[key] != filters[key])
            return false;
        }
        return true;
      });  

    //console.log(filteredData);

    // select the table body
    var filterDisplay = d3.select("#ufo-table>tbody");

    filteredData.forEach(function(row){
        var newRow = filterDisplay.append("tr");
        Object.entries(row).forEach(([key,value]) => {
            var cell = filterDisplay.append("td");
            cell.text(value);
        });
    });    
});