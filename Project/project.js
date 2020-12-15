function doimau(obj) {
    obj.style.color = 'red';
    obj.style.textDecoration = 'underline';
    /*document.getElementById('gioithieu').style.backgroundColor = "yellow";*/
}
function tralaimau(obj){
    obj.style.color = 'black';
    obj.style.textDecoration = 'none';
}

function doimau2(obj) {
    obj.style.color = 'red';
    obj.style.textDecoration = 'underline';
}
function tralaimau2(obj){
    obj.style.color = '#3A359B';
    obj.style.textDecoration = 'none';
}


/**------------------------------------------------------------------------------- */
/*
    var i = 0;
    var images = [];
    var time = 1000;
    images[0] = 'slide-lam-dep-tu-thien-nhien.jpg';
    images[1] = 'anhmain2.jpg';
    images[2] = 'anhmain3.jpg';
function chuyenanh(){
    document.kien8.src = images[i];
    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("chuyenanh()", time);
}
    window.onload = chuyenanh;*/

function kien(){
    alert(document.kien1000.src);/*Câu lệnh này để tìm src của ảnh*//*cái kiên1000 này là name của ảnh ý*/
    if(document.kien1000.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/anh1.jpg"/*Tìm được cái src ở trên vứt nó vào nháy kép trong này*/){
        document.kien1000.src = 'mayruamatlumispa.png';
    }
    else if(document.kien1000.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/mayruamatlumispa.png"){   
        document.kien1000.src = 'tinhdaubo.png';
    }
    else if(document.kien1000.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/tinhdaubo.png"){
        document.kien1000.src = 'botcamgao.png';
    }else if(document.kien1000.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/botcamgao.png"){
        document.kien1000.src = 'bottraxanh.png';
    }else{
        document.kien1000.src = 'anh1.jpg';
    }
}

    var images = [];
    images[0] = 'slide-lam-dep-tu-thien-nhien.jpg';
    images[1] = 'anhmain2.jpg';
    images[2] = 'anhmain3.jpg';

function kichnut1(){
    document.kien8.src = images[0];
}
function kichnut2(){
    document.kien8.src = images[1];
}
function kichnut3(){
    document.kien8.src = images[2];
}
function kien2000(){
    if(document.kien9.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/tinhdaubo.png"){
        document.kien9.src = 'mayruamatlumispa.png';
        document.kien10.src = 'tinhdaubo.png';
        document.getElementById('kien13').innerHTML = "MÁY RỬA MẶT LUMISPA";
        document.getElementById('kien14').innerHTML = "TINH DẦU BƠ";
    }else{
        document.kien9.src = 'tinhdaubo.png';
        document.kien10.src = 'mayruamatlumispa.png';
        document.getElementById('kien13').innerHTML = "TINH DẦU BƠ";
        document.getElementById('kien14').innerHTML = "MÁY RỬA MẶT LUMISPA";
    }
}

function kienviet(){
    if(document.kienviet1.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/slide-lam-dep-tu-thien-nhien.jpg"){
        document.kienviet1.src = images[1];
        document.getElementById('nut2').checked = true;
    }
    else if(document.kienviet1.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/anhmain2.jpg"){
        document.kienviet1.src = images[2];
        document.getElementById('nut3').checked = true;
    }
    else if(document.kienviet1.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/anhmain3.jpg"){
        document.kienviet1.src = images[0];
        document.getElementById('nut1').checked = true;
    }
    
}
function kienviet2(){
    if(document.kienviet1.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/slide-lam-dep-tu-thien-nhien.jpg"){
        images[1] = images[1];
    }
    else if(document.kienviet1.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/anhmain2.jpg"){
        images[2] = images[2];
    }else if(document.kienviet1.src == "file:///F:/HOC%20DAI%20DOC/Ky%202/PRO_201/C%C3%A1c%20b%C3%A0i%20t%E1%BA%ADp%20HTML/Project/anhmain3.jpg"){
        images[0] = images[0];
    }
}