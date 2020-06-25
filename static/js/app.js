// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

//Select the table body
var tbody = d3.select("tbody");

//load full table
data.forEach((value) => {
    var row = tbody.append("tr");
    Object.entries(value).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    //clear previous input
    tbody.html("")

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //Array for matches
    var matches = []

    // Use the form input to filter the data by date
    tableData.forEach(event => {
        Object.values(event).forEach(value => {
            if (inputValue === value) {
                matches.push(event);
            }
        }
        );
    }

    );
    console.log(matches);
    //Append table to show data matching search
    matches.forEach((match) => {
        var row = tbody.append("tr");
        Object.entries(match).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    //Message to display if there are no matching results
    if (matches.length == 0) {
        console.log("There is no data matching your search.")

        d3.select("tbody")
            .append("tr")
            .append("td")
            .attr("colspan", 7)
            .html("<h4>There is no data matching your search.</h4>");
    }

}  