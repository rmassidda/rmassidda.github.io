// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
    clippings = JSON.parse ( xhr.response )
    index = Math.floor ( Math.random() * clippings.length )
    document.getElementById('highlight').innerHTML = clippings[index].text
    document.getElementById('title').innerHTML = clippings[index].title
    document.getElementById('author').innerHTML = clippings[index].author
    document.getElementById('date').innerHTML = clippings[index].date
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

	// Code that should run regardless of the request status
	console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'clippings.json');
xhr.send();
