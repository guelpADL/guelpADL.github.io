
function changeopacity(){
    var x = 0;
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var ig = new Array(img1, img2, img3);
    var but1 = document.getElementById("dir-dir1");
    var but2 = document.getElementById("dir-dir2");
    var but3 = document.getElementById("dir-dir3");
    var bt = new Array(but1, but2, but3);

    var dirc1 = document.getElementById("dir-dir1");
    var dirc2 = document.getElementById("dir-dir2");
    var dirc3 = document.getElementById("dir-dir3");
    //var dir = new Array(dirc1, dirc2, dirc3);
    clearInterval(timee);
    var timee = setInterval(
        function(){
           x++;
           if(x >= 3){
            x = 0;
           }
           for(var li of ig){
            li.style.opacity = 0; 
           }
           ig[x].style.opacity = 1;
           for(var ol of bt){
            ol.style.backgroundColor = "rgb(126, 126, 126)"; 
           }
           bt[x].style.backgroundColor = "rgb(82, 255, 241)";
        }
        , 2500
    )
    dirc1.addEventListener('click',function(){
        x = 0;
        ig[x].style.opacity = 1;
        dirc1.style.backgroundColor = "rgb(82, 255, 241)";
        dirc2.style.backgroundColor = "rgb(126, 126, 126)";
        dirc3.style.backgroundColor = "rgb(126, 126, 126)";
    })
    dirc2.addEventListener('click',function(){
        x = 1;
        ig[0].style.opacity = 0;
        ig[2].style.opacity = 0;
        ig[x].style.opacity = 1;
        dirc2.style.backgroundColor = "rgb(82, 255, 241)";
        dirc1.style.backgroundColor = "rgb(126, 126, 126)";
        dirc3.style.backgroundColor = "rgb(126, 126, 126)";
    })
    dirc3.addEventListener('click',function(){
        x = 2;
        ig[0].style.opacity = 0;
        ig[1].style.opacity = 0;
        ig[x].style.opacity = 1;
        dirc3.style.backgroundColor = "rgb(82, 255, 241)";
        dirc2.style.backgroundColor = "rgb(126, 126, 126)";
        dirc1.style.backgroundColor = "rgb(126, 126, 126)";
    })
}
function changemypost(){
    var i = 0;
    var vict = document.getElementById("bac");
    var a = document.getElementById("hold")
    var img11 = document.getElementById("show1");
    var img21 = document.getElementById("show2");
    var img31 = document.getElementById("show3");
    var img41 = document.getElementById("show4");
    var img51 = document.getElementById("show5"); 

    var img1 = document.getElementById("pibor1");
    var img2 = document.getElementById("pibor2");
    var img3 = document.getElementById("pibor3");
    var img4 = document.getElementById("pibor4");
    var img5 = document.getElementById("pibor5"); 

    //var mg = new Array(img1, img2, img3, img4, img5);
    var ig = new Array(img11, img21, img31, img41, img51);
    clearInterval(timee);
    var timee = setInterval(
        function(){
           i++;        
           if(i >= 5 || i<0){
            i = 0;
           }
           for(var ti1 of ig){
            ti1.style.transition = "all 2.5s";
           }
           for(var ti of ig){
            ti.style.opacity = 0; 
           }
            var t = i+1;
            var str = "url(pic/showcase"+t+".jpg)";
            var st = "pic/showcase"+t+".jpg";
            a.setAttribute('href',st);
            vict.style.background = str;
            vict.style.backgroundSize = "100% auto";
            vict.style.position = "absolute";
            vict.style.top = "0px";

            ig[i].style.opacity = 1;   
        }, 2500
    )


    img1.addEventListener('click',function(){
        for(var ti1 of ig){
            ti1.style.opacity = 0; 
           }
        img11.style.opacity = 1;
        i = 4;
        
    })
    img2.addEventListener('click',function(){
        for(var ti1 of ig){
            ti1.style.opacity = 0; 
           }
        img21.style.opacity = 1;
        i = 0;
        
    })
    img3.addEventListener('click',function(){
        for(var ti1 of ig){
            ti1.style.opacity = 0; 
           }
        img31.style.opacity = 1;
        i = 1;
        
    })
    img4.addEventListener('click',function(){
        for(var ti1 of ig){
            ti1.style.opacity = 0; 
           }
        img41.style.opacity = 1;
        i = 2;
        
    })
    img5.addEventListener('click',function(){
        for(var ti1 of ig){
            ti1.style.opacity = 0; 
           }
        img51.style.opacity = 1;
        i = 3;
        
    })
    var ml = document.getElementById("mypicture-left");
    var mr = document.getElementById("mypicture-right");
    ml.addEventListener('click', function(){
        var j= i-1;
        if(j >= 5 || i<0){
            j = 0;
           }
        for(var ti1 of ig){
            ti1.style.opacity = 0; 
            ti1.style.transition = "none";
        }   
        ig[j].style.opacity = 1; 
        i = j-1;
    })
    mr.addEventListener('click', function(){
        var j= i+1;
        if(j >= 5 || i<0){
            j = 0;
           }
        for(var ti1 of ig){
            ti1.style.opacity = 0; 
            ti1.style.transition = "none";
        }   
        ig[j].style.opacity = 1; 
        i = j-1;
    })

}
