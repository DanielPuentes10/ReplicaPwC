var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},4500);


// codigo del formulario de registro

function toggleVisibility2(id1,id2,id3,id4) {
    var div1 = document.getElementById(id1);
    var div2 = document.getElementById(id2);
    var div3 = document.getElementById(id3);
    var div4 = document.getElementById(id4);
    //var div4 = document.getElementById(id4);
    if (div2.style.display === "block") {
        div2.style.display = "block";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";

    }else{
        div1.style.display = "block";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
    }
    
}

function f1(){
    document.getElementById('b1').style.display ='block';
    document.getElementById('b2').style.display ='none';
    document.getElementById('b3').style.display ='none';
    document.getElementById('b4').style.display ='none';
    
}

function f2(){
    document.getElementById('b1').style.display ='none';
    document.getElementById('b2').style.display ='block';
    document.getElementById('b3').style.display ='none';
    document.getElementById('b4').style.display ='none';
    
}


function f3(){
    document.getElementById('b1').style.display ='none';
    document.getElementById('b2').style.display ='none';
    document.getElementById('b3').style.display ='block';
    document.getElementById('b4').style.display ='none';
}
function f4(){
    document.getElementById('b1').style.display ='none';
    document.getElementById('b2').style.display ='none';
    document.getElementById('b3').style.display ='none';
    document.getElementById('b4').style.display ='block';
}

function toggleVisibility1(id1,id2,id3,id4) {
    var div1 = document.getElementById(id1);
    var div2 = document.getElementById(id2);
    var div3 = document.getElementById(id3);
    var div4 = document.getElementById(id4);
    //var div4 = document.getElementById(id4);
    if (div1.style.display === "block") {
        div1.style.display = "none";
        div2.style.display = "block";
        div3.style.display = "none";
        div4.style.display = "none";

    }else{
        div1.style.display = "none";
        div2.style.display = "block";
        div3.style.display = "none";
        div4.style.display = "none";
    }
    
    /*
    else if(div2.style.display === "none")
    {
        div2.style.display = "block";
        div1.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
    }else if(div3.style.display === "none")
    {
        div3.style.display = "block";
        div1.style.display = "none";
        div2.style.display = "none";
        div4.style.display = "none";
    }
    else if(div4.style.display === "none")
    {
        div4.style.display = "block";
        div1.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
    }
    */
    /*
    if (div2.style.display === "block") {
        div2.style.display = "none";
        div1.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";

    }
    
    else{
        div2.style.display = "block";
        div1.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
    }
    
    
     if(div2.style.display === "block")
    {
      div1.style.display = "none";
      div3.style.display = "none";
      div4.style.display = "none";
    }
     if(div3.style.display === "block")
    {
        div1.style.display = "none";
      div2.style.display = "none";
      div4.style.display = "none";

    }
     if(div4.style.display === "block")
    {
        div1.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "none";

    }
    */
  }