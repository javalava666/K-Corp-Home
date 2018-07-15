function kFactor(p){
  var a=7, b=(p+7)/2,sqrt=Math.sqrt(p),out = document.getElementById('out');
  out.innerHTML = '';
  if(p%3===0){out.innerHTML += 3 + '<br>' + p/3 + '<br>';return;}
  if(p%5===0){out.innerHTML += 5 + '<br>' + p/5 + '<br>';return;}
  do {
    if ((b % a === 0) && (b !== a))  {out.innerHTML += a + '<br>' + p/a + '<br>';return;}
    a += 4;  b += 2;
    if ((b % a === 0) && (b !== a))  {out.innerHTML += a + '<br>' + p/a + '<br>';return;}
    a += 2;  b ++;
    if ((b % a === 0) && (b !== a))  {out.innerHTML += a + '<br>' + p/a + '<br>';return;}
    a += 4;  b += 2;
    if ((b % a === 0) && (b !== a))  {out.innerHTML += a + '<br>' + p/a + '<br>';return;}
    a += 2;  b ++;
    if ((b % a === 0) && (b !== a))  {out.innerHTML += a + '<br>' + p/a + '<br>';return;}
    a += 4;  b += 2;
    if ((b % a === 0) && (b !== a))  {out.innerHTML += a + '<br>' + p/a + '<br>';return;}
    a += 6;  b += 3;
    if ((b % a === 0) && (b !== a))  {out.innerHTML += a + '<br>' + p/a + '<br>';return;}
    a += 2;  b ++;
    if ((b % a === 0) && (b !== a))  {out.innerHTML += a + '<br>' + p/a + '<br>';return;}
    a += 6;  b += 3;
    if ((b % a === 0) && (b !== a))  {out.innerHTML += a + '<br>' + p/a + '<br>';return;}
  } while
      (a<sqrt);
  out.innerHTML += p + ' is PRIME!!<br>';
}
function update() {
  var height = document.getElementById('height').value,
  width = document.getElementById('width').value,
  color = document.getElementById('color').value,
  bgColor = document.getElementById('bgColor').value,
  borderWidth = document.getElementById('borderWidth').value,
  borderStyle = document.getElementById('borderStyle').value,
  borderColor = document.getElementById('borderColor').value,
  borderRadius = document.getElementById('borderRadius').value,
  margin = document.getElementById('margin').value,
  padding = document.getElementById('padding').value,
  s = document.getElementById('Kstyle').style; 
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
