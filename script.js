var c = document.getElementById("rand_canvas");
c.width  = 400;
c.height = 170;
var ctx = c.getContext("2d");

function getRandomColor() {
  var h = Math.floor(Math.random() * 360);
  var s = 50 + Math.floor(Math.random() * 50);
  var l = 50; //Math.floor(Math.random() * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

start = { 
  x: Math.floor(Math.random() * c.width),
  y: Math.floor(Math.random() * c.height)
}
prev = start;

edges = 2000;
for ( var i = 0; i < edges; i ++ ) {
  // Path
  ctx.beginPath();
  ctx.strokeStyle = getRandomColor();

  // A
  ctx.moveTo( prev.x, prev.y );

  // B
  prev = {
    x: Math.floor(Math.random() * c.width),
    y: Math.floor(Math.random() * c.height)
  }
  if ( i == edges - 1 )
    prev = start;
  ctx.lineTo( prev.x, prev.y );

  // DO IT!
  ctx.stroke(); 
}

