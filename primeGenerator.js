function primeGenerator(lo, hi) {
  var a = document.getElementById('out'),
    e =  [7,11,13,17,19,23,29,31];
  a.innerHTML = null;
  for (g = lo * 1; g <= hi * 1; g = g + 2) {
    var c = Math.sqrt(g);
    var f = [];
    f[0] = 1;
    if (((g % 3 === 0) && g != 3) || ((g % 5 === 0) && g != 5))
      f.unshift(0);
    for (x = 0; x <= 7; x++) {
      for (y = e[x]; y <= c; y = y + 30) {
        if (g % y === 0)
      f.unshift(0);
      }
    }
    if (f.length === 1)
      a.innerHTML += '<br>' + g;
  }
}
function listPrimesInRange(p,q) {
  var out = document.getElementById('out'),  x = p - (p % 30) + 7;  
  out.innerHTML = p < 7 ? '<li>2</li><li>3</li><li>5</li>' : '';
  do {
    if(isPrime(x) && x >= p && x <= q) {out.innerHTML += '<li>' + x + '</li>';}
    x += 4;
    if(isPrime(x) && x >= p && x <= q) {out.innerHTML += '<li>' + x + '</li>';}
    x += 2;
    if(isPrime(x) && x >= p && x <= q) {out.innerHTML += '<li>' + x + '</li>';}
    x += 4;
    if(isPrime(x) && x >= p && x <= q) {out.innerHTML += '<li>' + x + '</li>';}
    x += 2;
    if(isPrime(x) && x >= p && x <= q) {out.innerHTML += '<li>' + x + '</li>';}
    x += 4;
    if(isPrime(x) && x >= p && x <= q) {out.innerHTML += '<li>' + x + '</li>';}
    x += 6;
    if(isPrime(x) && x >= p && x <= q) {out.innerHTML += '<li>' + x + '</li>';}
    x += 2;
    if(isPrime(x) && x >= p && x <= q) {out.innerHTML += '<li>' + x + '</li>';}
    x += 6;
  } while
      (x <= q)}
function isPrime(p){
  var a = 7, b = (p + 7) / 2,sq=Math.sqrt(p);
  do {
    if ((b % a === 0) && (b !== a))  return false;
    a += 4;  b += 2;
    if ((b % a === 0) && (b !== a))  return false;
    a += 2;  b ++;
    if ((b % a === 0) && (b !== a))  return false;
    a += 4;  b += 2;
    if ((b % a === 0) && (b !== a))  return false;
    a += 2;  b ++;
    if ((b % a === 0) && (b !== a))  return false;
    a += 4;  b += 2;
    if ((b % a === 0) && (b !== a))  return false;
    a += 6;  b += 3;
    if ((b % a === 0) && (b !== a))  return false;
    a += 2;  b ++;
    if ((b % a === 0) && (b !== a))  return false;
    a += 6;  b += 3;
    if ((b % a === 0) && (b !== a))  return false;
  } while
      (a < sq);
  return true;}
  function update() {
  var height = document.getElementById('height').value;
  var width = document.getElementById('width').value;
  var color = document.getElementById('color').value;
  var bgColor = document.getElementById('bgColor').value;
  var borderWidth = document.getElementById('borderWidth').value;
  var borderStyle = document.getElementById('borderStyle').value;
  var borderColor = document.getElementById('borderColor').value;
  var borderRadius = document.getElementById('borderRadius').value;
  var margin = document.getElementById('margin').value;
  var padding = document.getElementById('padding').value;
  var s = document.getElementById('Kstyle').style; 
  s.height = height;
  s.width = width;
  s.color = color;
  s.backgroundColor = bgColor;
  s.borderWidth = borderWidth;
  s.borderStyle = borderStyle;
  s.borderColor = borderColor;
  s.borderRadius = borderRadius;
  s.margin = margin;
  s.padding = padding;
}
