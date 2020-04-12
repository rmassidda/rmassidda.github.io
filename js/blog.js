var xhr = new XMLHttpRequest();

xhr.onload = function () {
	if (xhr.status >= 200 && xhr.status < 300 && xhr.response != "") {
    posts = xhr.response
    ul = document.getElementById('archive')
    /* When splitting by new line the last line is void */
    for (post of posts.split('\n').slice(0,-1).reverse()){
      /* Parse of the CSV fields */
      fields = post.split('","')
      date   = fields[0].slice(1)
      title  = fields[1]
      href   = fields[2]
      orig   = fields[3].slice(0,-1)
      /* Node listing creation */
      li = document.createElement('li')
      a  = document.createElement('a')
      a.href = 'post/'+href
      txt = document.createTextNode(title)
      a.appendChild(txt)
      li.appendChild(a)
      li.innerHTML = date.split(' ')[0] + ', ' + li.innerHTML
      ul.appendChild(li) 
    }
	} else {
    document.getElementById('archive').innerHTML = "No posts here, it's either writer's block or something went wrong."
	}
};

xhr.open('GET', 'index.csv');
xhr.send();
