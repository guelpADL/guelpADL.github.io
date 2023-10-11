function track(x){
    var tra = document.getElementById("track");
    var na = document.getElementById("header-left");
    switch (x){
    case 1:
        tra.style.left = 46+"px";
        break;
    case 2:
        tra.style.left = 134+"px";
        break;
    case 3:
        tra.style.left = 222+"px";
        break;
    case 4:
        tra.style.left = 305+"px";
        break; 
    case 5:
        tra.style.left = 395+"px";
        break;
    case 6:
        tra.style.left = 480+"px";
        break;
    case 7:
        tra.style.left = 565+"px";
        break;   
    } 
    na.addEventListener('mouseout',function(e){
        var a = location.pathname;
        var name = a.substring(a.lastIndexOf("/")+1);
        if(250>e.clientX||e.clientX>850||e.clientY>70){
            if(name == "hutao.html"){tra.style.left = 46+"px";}
            if(name == "news.html"){tra.style.left = 134+"px";}
            else{tra.style.left = 46+"px";}
            //console.log(e.clientX);
        }
    })
}