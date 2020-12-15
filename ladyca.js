function doimau(obj) {
    obj.style.color = 'red';
    obj.style.textDecoration = 'underline';
}
function tralaimau(obj){
    obj.style.color = 'black';
    obj.style.textDecoration = 'none';
}
function getChoice(obj){
    
    if(obj.value == "macdinh"){
        document.kien9.src = "tinhdaubo.png";
        document.kien10.src = "mayruamatlumispa.png";
        document.kien12.src = "botcamgao.png";
        document.getElementById('kien101').innerHTML = "Tinh dầu bơ";
        document.getElementById('kien102').innerHTML = "Máy rửa mặt Lumispa";
        document.getElementById('kien103').innerHTML = "Bột cám gạo";
    }
    if(obj.value == "xemnhieunhat"){
        document.kien9.src = "mayruamatlumispa.png";
        document.kien10.src = "botcamgao.png";
        document.kien12.src = "tinhdaubo.png";
        document.getElementById('kien101').innerHTML = "Máy rửa mặt Lumispa";
        document.getElementById('kien102').innerHTML = "Bột cám gạo";
        document.getElementById('kien103').innerHTML = "Tinh dầu bơ";
    }
    if(obj.value == "danhgiacao"){
        document.kien9.src = "tinhdaubo.png";
        document.kien10.src = "botcamgao.png";
        document.kien12.src = "mayruamatlumispa.png";
        document.getElementById('kien101').innerHTML = "Tinh dầu bơ";
        document.getElementById('kien102').innerHTML = "Bột cám gạo";
        document.getElementById('kien103').innerHTML = "Máy rửa mặt Lumispa";
    }
    if(obj.value == "hangmoinhat"){
        document.kien9.src = "anhranda1.jpg";
        document.kien10.src = "anhranda2.jpg";
        document.kien12.src = "anhvitamin1.jpg";
        document.getElementById('kien101').innerHTML = "Tinh chất quả bơ";
        document.getElementById('kien102').innerHTML = "Bột trà xanh";
        document.getElementById('kien103').innerHTML = "Tinh chất Vitamin C";
    }
    if(obj.value == "giathapdencao"){
        document.kien9.src = "anhranda1.jpg";
        document.kien10.src = "mayruamatlumispa.png";
        document.kien12.src = "anhranda2.jpg";
        document.getElementById('kien101').innerHTML = "Tinh chất quả bơ<br>200.000VND";
        document.getElementById('kien102').innerHTML = "Máy rửa mặt Lumispa<br>150.000VND";
        document.getElementById('kien103').innerHTML = "Bột trà xanh<br>100.000VND";
    }
}

