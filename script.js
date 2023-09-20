var code = '0123456789abcdef';
var btn = document.querySelector('button');
var body = document.querySelector('body');
var color = document.querySelector('.color');
var hexCodeText = document.querySelector('.hexCode');
var borderRadiusText = document.querySelector('.border-radius');

btn.onclick = function(){
        //color
        var hexCode = "#";
        for (let i = 0; i < 6; i++) {
            var index = Math.floor(Math.random()*code.length);
            hexCode+=code[index];
        }
        body.style.backgroundColor = hexCode;
        color.style.backgroundColor = hexCode;
        hexCodeText.value = hexCode;
        // border radius
        var boderadius =  Math.floor(Math.random()*125);
        color.style.borderRadius = boderadius + "px";
        borderRadiusText.value = boderadius + "px";


};

