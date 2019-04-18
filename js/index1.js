var monkeySVG = Snap('#monkey_404');

var tail = monkeySVG.select('#tail');

var numberZero = monkeySVG.select('#number_0');


var revert = function() {
  tail.animate({
    d: 'M89,315c2.2-15.2-23-13.2-21.6,4.8c1.7,22.3,24.4,22.1,42.5,9.1c10.8-7.8,15.3-1.8,19.1,1.1 c2.3,1.7,6.7,3.3,11-3'
  },1600, mina.easeinout);
}

setInterval(function(){
  tail.animate({
    d: 'M81,310c-8.8-6.5-20.8,6.5-15,18c7.4,14.5,22.5,10.8,31,3c9.8-9,18.9-5.6,22-2 c5.8,6.8,16.7,4.3,21-2'
  },1600, mina.easeinout, revert);
}, 3200);