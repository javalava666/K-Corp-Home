function createAllOrbits(b){
  var c = [];
  c[0] = 2;
  do{
    c.unshift((c[0] * 2) % b);
  }while
    (c[0] != 1);
  var out = document.getElementById('out');
  out.innerHTML = null;
  out.innerHTML += 'The One Orbit of ' + b + ' contains '
             + c.length + ' elements. (' + c + ')<br />  ';
  var count = 1;
  var e = c.length;
  for (x = 3; x <= (b - 1) / 2; x = x + 2){
  var d = [];
    d[0] = (x * 2);
      do { 
        d.unshift((2 * d[0]) % b);
      }while
        ((d.length < e) && (d[0] > x));
          if (d[0] >= x) {
            count = count + 1;
            out.innerHTML += 'Orbit # '
            + count + ' contains ' + d.length + ' elements. (' + d + ')<br />  ';
          }
  }
  count = count + 1
  out.innerHTML += 'Orbit # ' + count + ' contains 1 element. (' + b + ')';
}
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
