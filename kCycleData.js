function kCycleDataFast() {
    var a = document.getElementById('in');
    var p = a.value * 1;
    var out = document.getElementById('out');
    if (p === 2) {
        out.innerHTML = '<b>THIS NUMBER IS 100% PRIME!!</b>';
        return;
    }
    if ((p % 2) === 0) {
        out.innerHTML = 'Even numbers greater than 2 are NEVER prime.';
        return;
    }
    var curNum = 2;
    var ind = 0;
    do {
        curNum = (curNum + curNum) % p;
        ind++;
    } while (curNum !== 1);out.innerHTML = 'Orbit # 1 of ' + p + ' contains ' + (ind + 1) + ' elements.<br>';
    var count = 1;
    var must = ind + 1;
    for (x = 3; x <= (p - 1) / 2; x = x + 2) {
        var curNum = 2 * x;
        var ind1 = 0;
        do {
            curNum = (curNum + curNum) % p;
            ind1++;
        } while (curNum > x);if (curNum == x) {
            count = count + 1;
            out.innerHTML += 'Orbit # ' + count + ' contains ' + (ind1 + 1) + ' elements. First is ' + curNum + '.<br>';
            if (ind1 + 1 !== must) {
                out.innerHTML += '<b>' + p + ' IS NOT PRIME!!';
                return;
            }
            if ((((curNum + p) / 2) % curNum) === 0) {
                out.innerHTML += '<b>' + p + ' IS NOT PRIME!!</b>';
                return;
            }
        }
    }
    count = count + 1;
    out.innerHTML += 'Orbit # ' + count + ' contains 1 element.<br><b>THIS NUMBER IS 100% PRIME!!</b>';
}
function getCycleData(){
  var a = document.getElementById('in');
  var b = a.value;
  var c = [];
  c[0] = 2;
  do{
    c.unshift((c[0] * 2) % b);
  }while
    (c[0] !== 1);
  var e = c.length;
  var out = document.getElementById('out');
  out.innerHTML = "Orbits data:<br><br>";
  out.innerHTML += "Orbit # 1 of " + b + " contains " + e + " elements.<br>";
  var count = 1;
  for (x = 3; x <= (b - 1) / 2; x = x + 2){
  var d = [];
    d[0] = (x * 2);
      do { 
        d.unshift((2 * d[0]) % b);
      }while
        ((d.length < e) && (d[0] > x));
          if (d[0] >= x) {
            count = count + 1;
            out.innerHTML += "Orbit # "  + count + " contains " + d.length + " elements. First is " + d[0] + ".<br />";
          }
  }
  count = count + 1
  out.innerHTML += "Orbit # " + count + " contains 1 element.";
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
