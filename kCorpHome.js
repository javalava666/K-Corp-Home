var canvas = document.getElementById('myCanvas'),
    context = canvas.getContext('2d'),
    paused = true,
    discs = [  
    {x: 111,  y: 410,  lastX: 40,  lastY: 91,  velocityX: 9.2,  velocityY: 9.9,  radius: 53,  innerColor: 'white',  middleColor: 'lightblue',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 121,  y: 319,  lastX: 39,  lastY: 29,  velocityX: 6.2,  velocityY: 8.5,  radius: 52,  innerColor: 'white',  middleColor: 'hotpink',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 131,  y: 381,  lastX: 38,  lastY: 39,  velocityX: 2.3,  velocityY: 7.5,  radius: 51,  innerColor: 'white',  middleColor: 'lightgreen',outerColor: 'gray',  strokeStyle: 'black'},
    {x: 141,  y: 371,  lastX: 37,  lastY: 49,  velocityX: 13.7,velocityY: 6.4,  radius: 50,  innerColor: 'white',  middleColor: 'yellow',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 151,  y: 361,  lastX: 36,  lastY: 59,  velocityX: 2.1,  velocityY: 5.5,  radius: 49,  innerColor: 'white',  middleColor: 'peachpuff',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 161,  y: 351,  lastX: 35,  lastY: 69,  velocityX: 7.2,  velocityY: 4.9,  radius: 48,  innerColor: 'white',  middleColor: 'crimson',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 171,  y: 341,  lastX: 34,  lastY: 79,  velocityX: 5.2,  velocityY: 3.5,  radius: 47,  innerColor: 'white',  middleColor: 'blue',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 181,  y: 331,  lastX: 33,  lastY: 89,  velocityX: 4.3,  velocityY: 2.5,  radius: 46,  innerColor: 'white',  middleColor: 'green',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 191,  y: 321,  lastX: 32,  lastY: 99,  velocityX: 3.7,  velocityY: 1.4,  radius: 45,  innerColor: 'white',  middleColor: 'red',        outerColor: 'gray',  strokeStyle: 'black'},
    {x: 110,  y: 311,  lastX: 31,  lastY: 109,  velocityX: 2.1,  velocityY: 9.5,  radius: 44,  innerColor: 'white',  middleColor: 'brown',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 121,  y: 301,  lastX: 30,  lastY: 119,  velocityX: 1.2,  velocityY: 8.9,  radius: 43,  innerColor: 'white',  middleColor: 'khaki',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 132,  y: 291,  lastX: 29,  lastY: 129,  velocityX: 9.2,  velocityY: 7.5,  radius: 42,  innerColor: 'white',  middleColor: 'black',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 143,  y: 281,  lastX: 28,  lastY: 139,  velocityX: 8.3,  velocityY: 6.5,  radius: 41,  innerColor: 'white',  middleColor: 'papayawhip',outerColor: 'gray',  strokeStyle: 'black'},
    {x: 154,  y: 271,  lastX: 27,  lastY: 149,  velocityX: 7.7,  velocityY: 5.4,  radius: 40,  innerColor: 'white',  middleColor: 'orange',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 165,  y: 261,  lastX: 26,  lastY: 159,  velocityX: 6.1,  velocityY: 4.5,  radius: 39,  innerColor: 'white',  middleColor: 'coral',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 176,  y: 251,  lastX: 25,  lastY: 164,  velocityX: 5.2,  velocityY: 3.9,  radius: 38,  innerColor: 'white',  middleColor: 'teal',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 187,  y: 241,  lastX: 24,  lastY: 174,  velocityX: 4.2,  velocityY: 2.5,  radius: 37,  innerColor: 'white',  middleColor: 'purple',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 198,  y: 231,  lastX: 23,  lastY: 184,  velocityX: 3.3,  velocityY: 1.5,  radius: 36,  innerColor: 'white',  middleColor: 'violet',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 209,  y: 212,  lastX: 22,  lastY: 194,  velocityX: 2.7,  velocityY: 9.4,  radius: 35,  innerColor: 'white',  middleColor: 'olivedrab',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 210,  y: 311,  lastX: 218,  lastY: 204,  velocityX: 1.1,  velocityY: 8.5,  radius: 34,  innerColor: 'white',  middleColor: 'cornsilk',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 221,  y: 201,  lastX: 208,  lastY: 214,  velocityX: 9.2,  velocityY: 7.9,  radius: 33,  innerColor: 'white',  middleColor: 'bisque',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 222,  y: 191,  lastX: 198,  lastY: 224,  velocityX: 8.2,  velocityY: 6.5,  radius: 32,  innerColor: 'white',  middleColor: 'aqua',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 223,  y: 181,  lastX: 188,  lastY: 234,  velocityX: 7.3,  velocityY: 5.5,  radius: 31,  innerColor: 'white',  middleColor: 'azure',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 224,  y: 171,  lastX: 178,  lastY: 244,  velocityX: 6.7,  velocityY: 4.4,  radius: 30,  innerColor: 'white',  middleColor: 'turquoise',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 225,  y: 161,  lastX: 168,  lastY: 254,  velocityX: 5.1,  velocityY: 3.5,  radius: 29,  innerColor: 'white',  middleColor: 'navy',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 226,  y: 151,  lastX: 158,  lastY: 264,  velocityX: 4.2,  velocityY: 2.9,  radius: 28,  innerColor: 'white',  middleColor: 'orchid',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 227,  y: 141,  lastX: 148,  lastY: 274,  velocityX: 3.2,  velocityY: 1.5,  radius: 27,  innerColor: 'white',  middleColor: 'oldlace',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 228,  y: 131,  lastX: 138,  lastY: 284,  velocityX: 2.3,  velocityY: 9.5,  radius: 26,  innerColor: 'white',  middleColor: 'moccasin',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 230,  y: 111,  lastX: 118,  lastY: 294,  velocityX: 1.1,  velocityY: 8.5,  radius: 25,  innerColor: 'white',  middleColor: 'mistyrose',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 231,  y: 101,  lastX: 108,  lastY: 304,  velocityX: 9.2,  velocityY: 7.9,  radius: 24,  innerColor: 'white',  middleColor: 'mintcream',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 232,  y: 451,  lastX: 98,  lastY: 314,  velocityX: 8.2,  velocityY: 6.5,  radius: 23,  innerColor: 'white',  middleColor: 'pink',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 233,  y: 361,  lastX: 88,  lastY: 324,  velocityX: 7.3,  velocityY: 5.5,  radius: 22,  innerColor: 'white',  middleColor: 'tomato',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 234,  y: 271,  lastX: 78,  lastY: 334,  velocityX: 6.7,  velocityY: 4.4,  radius: 21,  innerColor: 'white',  middleColor: 'thistle',    outerColor: 'gray',  strokeStyle: 'black'},
    {x: 235,  y: 181,  lastX: 68,  lastY: 344,  velocityX: 5.1,  velocityY: 3.5,  radius: 20,  innerColor: 'white',  middleColor: 'tan',        outerColor: 'gray',  strokeStyle: 'black'},
    {x: 236,  y: 461,  lastX: 58,  lastY: 354,  velocityX: 4.2,  velocityY: 2.9,  radius: 19,  innerColor: 'white',  middleColor: 'steelblue',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 237,  y: 351,  lastX: 48,  lastY: 364,  velocityX: 3.2,  velocityY: 1.5,  radius: 18,  innerColor: 'white',  middleColor: 'cyan',      outerColor: 'gray',  strokeStyle: 'black'},
    {x: 238,  y: 241,  lastX: 38,  lastY: 374,  velocityX: 2.3,  velocityY: 9.5,  radius: 17,  innerColor: 'white',  middleColor: 'chocolate',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 239,  y: 131,  lastX: 28,  lastY: 384,  velocityX: 1.7,  velocityY: 8.4,  radius: 16,  innerColor: 'white',  middleColor: 'chartreuse',outerColor: 'gray',  strokeStyle: 'black'},
    {x: 240,  y: 381,  lastX: 321,  lastY: 394,  velocityX: 9.1,  velocityY: 7.5,  radius: 15,  innerColor: 'white',  middleColor: 'burlywood',  outerColor: 'gray',  strokeStyle: 'black'},
    {x: 340,  y: 221,  lastX: 18,  lastY: 394,  velocityX: 8.1,  velocityY: 6.5,  radius: 14,  innerColor: 'white',  middleColor: 'lightcyan',  outerColor: 'gray',  strokeStyle: 'black'},
    ],
    numDiscs = discs.length,
    animateButton = document.getElementById('animateButton');
  function drawBackground() {
    var STEP_Y = 12,
      TOP_MARGIN = STEP_Y * 4,
      LEFT_MARGIN = STEP_Y * 3,
      i = context.canvas.height;
    context.strokeStyle = 'lightgray';
    context.lineWidth = 0.5;
    while(i > TOP_MARGIN) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(context.canvas.width, i);
      context.stroke();
      i -= STEP_Y;
    }
    context.strokeStyle = 'rgba(100,0,0,0.3)';
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(LEFT_MARGIN, 0);
    context.lineTo(LEFT_MARGIN, context.canvas.width);
    context.stroke();
  }
  function speedUp() {
    var disc = null;
    for (var i = 0; i < numDiscs; ++i) {
      disc = discs[i];
      disc.velocityX = disc.velocityX * 1.1;
      disc.velocityY = disc.velocityY * 1.1;
    }
  }
  function updateBalls() {
    var disc = null;
    for (var i = 0; i < numDiscs; ++i) {
      disc = discs[i];
      if (disc.x + disc.velocityX + disc.radius >  context.canvas.width ||
          disc.x + disc.velocityX - disc.radius < 0)
            disc.velocityX = -disc.velocityX;
      if (disc.y + disc.velocityY + disc.radius >  context.canvas.height ||  
          disc.y + disc.velocityY - disc.radius < 0)
            disc.velocityY = -disc.velocityY;
            disc.x += disc.velocityX;
            disc.y += disc.velocityY;
    }
  }
  function draw() {
    var  disc = discs[i];
    for (var i = 0; i < numDiscs; ++i) {
      disc = discs[i];
      gradient = context.createRadialGradient(disc.x, disc.y, 0, disc.x, disc.y, disc.radius);
      gradient.addColorStop(0.1, disc.innerColor);
      gradient.addColorStop(0.7, disc.middleColor);
      gradient.addColorStop(1.0, disc.outerColor);
      context.save();
      context.beginPath();
      context.arc(disc.x, disc.y, disc.radius, 0, Math.PI * 2, false);
      context.fillStyle = gradient;
      context.fill();
      context.strokeStyle = disc.strokeStyle;
      context.stroke();
      context.restore();
    }
  }
  function animate(time) {
    if (!paused) {
      context.clearRect(0,0,canvas.width,canvas.height);
      updateBalls();
      draw();
      window.requestAnimationFrame(animate);
    }
  }
  animateButton.onclick = function (e) {
    paused = paused ? false : true;
    if (paused) {
      animateButton.value = 'Animate';
    }
    else {
      window.requestAnimationFrame(animate);
      animateButton.value = 'Pause';
    }
  };
context.font = '48px Helvetica';
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
function createAllOrbits(b){
  var c = [];
  c[0] = 2;
  do{
    c.unshift((c[0] * 2) % b);
  }while
    (c[0] != 1);
  var out = document.getElementById('out2');
  out.innerHTML =  'K-Cycle:<br>';
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
function kFactor2(){
  var a = document.getElementById('in2');
  var TestNum = a.value;
  var OrbOne = [];
    OrbOne.unshift(2);
    do {
    OrbOne.unshift((OrbOne[0] * 2) % TestNum);
    }while
      (OrbOne[0] != 1);
  var out = document.getElementById('out3');
  out.innerHTML = "<b>" + TestNum + "</b><br />";
  for (NxtOrbStrtNum = 3; NxtOrbStrtNum <= (TestNum - 1) / 2; NxtOrbStrtNum = NxtOrbStrtNum + 2) {
  var NxtOrb = [];
    NxtOrb[0] = (NxtOrbStrtNum * 2);
    do { 
      NxtOrb.unshift((2 * NxtOrb[0]) % TestNum);
    }while
      ((NxtOrb.length < OrbOne.length) && (NxtOrb[0] > NxtOrbStrtNum));
    if (NxtOrb[0] >= NxtOrbStrtNum) {
    if (NxtOrb[1] % NxtOrb[0] == 0)
  out.innerHTML = out.innerHTML + NxtOrb[0] + " <b>F</b><br />";
    }
  }         
}
function kFactor(p){
  var a=7, b=(p+7)/2,sqrt=Math.sqrt(p),out = document.getElementById('out3');
  out.innerHTML = 'Factors:<br>';
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
function getCycleData(b){
  var c = [];
  c[0] = 2;
  do{
    c.unshift((c[0] * 2) % b);
  }while
    (c[0] !== 1);
  var e = c.length;
  var out = document.getElementById('out4');
  out.innerHTML = "Orbits data:<br>";
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
