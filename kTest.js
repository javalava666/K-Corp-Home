function kTest(p) {
  var out = document.getElementById('out');
  out.innerHTML = null;
  if(p===1){out.innerHTML+=p+' is <b>NOT</b> prime.';return;}
  if(p===2){out.innerHTML+=p+' is the <b>UNIT</b> prime.';return;}
  if(p===3){out.innerHTML+=p+' is <b>Stewart</b> prime.';return;}
  if(p===5){out.innerHTML+=p+' is <b>Stewart</b> prime.';return;}
  var m30=p%30;
  if(m30!==1&&m30!==7&&m30!==11&&m30!==13&& 
      m30!==17&&m30!==19&&m30!==23&&m30!==29){
    out.innerHTML+=p+' is <b>NOT</b> prime.<br>'+
    'It does not hail from a potential prime base.';return;} 
  var curNum=2;
  var ind=0;
  do {
    curNum=(curNum+curNum)%p;
    ind++;
  } while
    (ind<(p-3)/2&&curNum!==1);
  if((ind===(p-3)/2)&&(curNum===1)){
    out.innerHTML += '<br>' + p 
    + ' is <b>Nash</b> prime.<br> It hails from PP Base: ' 
    + p % 120 + '.<br>'; return;}
  if ((ind === (p - 3) / 2) && (curNum === (p - 1))) {
    out.innerHTML += '<br>' + p 
    + ' is <b>Stewart</b> prime.<br> It hails from PP Base: ' 
    + p % 120 + '.<br>'; return;}
  if (out.innerHTML===""){
    var curNum=2;
    var ind=0;
    do {
      curNum=(curNum+curNum)%p;
      ind++;
    } while
      (curNum !== 1);
      out.innerHTML+='<br>The one orbit of '+p 
      +' contains '+(ind + 1)+' elements.<br> It hails from PP Base: '
      +p%120+'.<br>';
      if((ind<(p-3)/2)&&(((p%(ind+2)===0)||(p%(2*ind+3)===0))))
        {out.innerHTML+=p+' is <b>NOT</b> prime.';return;}
      if(ind>(p-3)/2)
        {out.innerHTML+=p+' is <b>NOT</b> prime.';return;}
      for (w=4*1;w<=p*1;w++){
        if(ind===((p-w)/(w-1)))
          {out.innerHTML+=p+' is prime with '+w 
          +' orbits.<br> It hails from PP Base: ' 
          +p%120+'.<br>';return;}
      }  
    out.innerHTML+=p+' has befuddled us.<br>So, is it prime? '+
    isPrime(p);
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
