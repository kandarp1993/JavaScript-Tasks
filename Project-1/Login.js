
var move;
document.getElementById('btn1').addEventListener('click',function(){
    clearInterval(move);
    move = setInterval(play,1000)
});

function play(){
    var text1 = document.getElementById('txt1').value;
    document.getElementById('txt2').value += text1.charAt(0);
    document.getElementById('txt1').value = text1.slice(1);
        
}

document.getElementById('btn2').addEventListener('click',function(){
    clearInterval(move);
});

var prev;
document.getElementById('btn3').addEventListener('click',function(){
    clearInterval(move);
    move = setInterval(reverse,1000)
});

function reverse(){
    var text2 = document.getElementById('txt2').value;
    document.getElementById('txt2').value = text2.slice(0,text2.length-1);
    document.getElementById('txt1').value = text2.charAt(text2.length-1) + document.getElementById('txt1').value;
}