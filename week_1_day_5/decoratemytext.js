var tempFont = 12;
var timer = null; 

function changeFont(){  
    if(timer==null){
        timer = setInterval(fontChanger,500);
    }else{
        clearInterval(timer);
        timer==null;
    } 
}

function fontChanger(){  
    tempFont = tempFont + 2;
    document.getElementById("txtArea1").style.fontSize = tempFont +"pt";
}

function changeStyle(){
    var fontStatus = document.getElementById("txtArea1").style.fontWeight;
    if(fontStatus == "bold"){
        document.getElementById("txtArea1").style.fontWeight = "normal";
        document.getElementById("txtArea1").style.color = "black";
        document.getElementById("txtArea1").style.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }else{
        document.getElementById("txtArea1").style.fontWeight = "bold";
        document.getElementById("txtArea1").style.color = "green";
        document.getElementById("txtArea1").style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('bg.webp')";
    }
}