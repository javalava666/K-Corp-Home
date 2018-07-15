function theyFactor() {
  var a = document.getElementById('in');
  var p = a.value;
  var b = document.getElementById('out');
  b.innerHTML = '<b>' + p + '</b><br>';
    e = [  7,11,13,17,19,23,29,31 ];
  var c = Math.sqrt(p);
    if (p % 2 === 0) {
  b.innerHTML += 2 + '<br>' + (p / 2) + '<br>';
    }
    if (p % 3 === 0) {
  b.innerHTML += 3 + '<br>' + (p / 3) + '<br>';
    }
    if (p % 5 === 0) {
  b.innerHTML += 5 + '<br>' + (p / 5) + '<br>';
    }
  for (x = 0; x < e.length; x++) {
    for (y = e[x]; y <= c; y = y + 30) {
      if (p % y === 0) {
        b.innerHTML += y + '<br>' + (p / y) + '<br>';
      }
    }
  }
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
