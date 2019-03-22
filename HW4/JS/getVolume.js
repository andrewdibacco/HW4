function main(){
    
    var length;
    var width;
    var height;
    
    for(var i = 1; i < 11; i++){
        
        length = i + 2;
        width = i + 3;
        height = i + 4;
        
        var volume = getVolume(length, width, height);
        sort(volume);
    }
    document.write(msg);
}
    
function sort(volume){
    
        switch (true){
            case (volume < 500):
                msg += 'Small Volume: ' + volume + '<br/>'
                break;
            case (volume < 1000):
                msg += 'Medium Volume: ' + volume + '<br/>'
                break;
            case (volume < 1500):
                msg += 'Large Volume: ' + volume + '<br/>'
                break;
            case (volume >=1500):
                msg += 'Extra Large Volume: ' + volume + '<br/>'
                break;
        }
}

function getVolume(length,width,height){
    
    var result = length * width * height;
    return result;
}


var msg = '';
main();

/* 
calculate button
form for user inputs l,w,h, with validation    
*/

/*
function calculate(){
    msg = '';
    validationError = false;
    var inputEls = document.querySelectorAll('div#input input');
    for (var i = 0; i < inputEls.length; i++){
        if (inputEls[i].value == ""){
            inputEls[i].className = 'error';
            validationError = true;
        }
    }
    if (validationError){
            alert('Please include the values in red');
            return;
    }
    for(var i = 0; i < inputEls.length; i++){
        inputEls[i].className = 'dimension';
    }
    
    var l = inputEls[0].value;
    var w = inputEls[1].value;
    var h = inputEls[2].value;
    var volume = getVolume(l,w,h);
    sort(volume);
    resultEl.innerHTML = msg;
}


var resultEl = document.getElementById('result')
var buttonEl = document.getElementById('calcVolume');
buttonEl.addEventListener('click',calculate);
*/

