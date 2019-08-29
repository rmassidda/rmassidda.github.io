var xhr = new XMLHttpRequest();

xhr.onload = function () {
	if (xhr.status >= 200 && xhr.status < 300) {
    clippings = JSON.parse ( xhr.response )
    index = Math.floor ( Math.random() * clippings.length )
    document.getElementById('highlight').innerHTML = clippings[index].text
    document.getElementById('title').innerHTML = clippings[index].title
    document.getElementById('author').innerHTML = clippings[index].author
    document.getElementById('date').innerHTML = clippings[index].date
	} else {
    document.getElementById('kindle').innerHTML = ''
	}
};

xhr.open('GET', 'clippings.json');
xhr.send();
