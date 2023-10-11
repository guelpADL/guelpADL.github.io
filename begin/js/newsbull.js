function b(x){
    var s1 = document.getElementById("spacal1");
    var s2 = document.getElementById("spacal2");
    var s3 = document.getElementById("spacal3");
    var s4 = document.getElementById("spacal4");
    var lt = document.getElementById("latest");
    var ay = document.getElementById("activity");
    var ne = document.getElementById("notive");
    switch(x){
        case 1:
            s1.style.color = "rgb(25, 0, 255)";
            s2.style.color = "black";
            s3.style.color = "black";
            s4.style.color = "black";
            lt.style.display = "block";
            ay.style.display = "none";
            ne.style.display = "none";
            break;
        case 2:
            s1.style.color = "black";
            s2.style.color = "rgb(25, 0, 255)";
            s3.style.color = "black";
            s4.style.color = "black";
            lt.style.display = "block";
            ay.style.display = "none";
            ne.style.display = "none";
            break;
        case 3:
            s1.style.color = "black";
            s2.style.color = "black";
            s3.style.color = "rgb(25, 0, 255)";
            s4.style.color = "black";
            lt.style.display = "none";
            ay.style.display = "block";
            ne.style.display = "none";
            break;
        case 4:
            s1.style.color = "black";
            s2.style.color = "black";
            s3.style.color = "black";
            s4.style.color = "rgb(25, 0, 255)";
            lt.style.display = "none";
            ay.style.display = "none";
            ne.style.display = "block";
            break;
    }
}

function news_changepic(){
    var i = 0;
    var enj1 = document.getElementById("a1");
    var enj2 = document.getElementById("a2");
    var enj3 = document.getElementById("a3");
    var enj = new Array(enj1, enj2, enj3);

    var cha1 = document.getElementById("b1");
    var cha2 = document.getElementById("b2");
    var cha3 = document.getElementById("b3");
    // var cha = new Array(cha1, cha2, cha3);
    // var timer = 0;

    var inner = document.getElementById("inner");
    setInterval(function(){
        inner.innerText = "";
        if(i > 2){
            i=0;
        }
        if( i ==0 ){f1()}
        if( i ==1 ){f2()}
        if( i ==2 ){f3()}
       i++;
    },3000)
    function f1(){
        enj2.style.opacity = 1;
        enj3.style.opacity = 0;
        enj1.style.transition = "transform 2.5s";
        enj2.style.transition = "transform 2.5s";
        enj3.style.transition = "none";

        enj1.style.transform = "translate(-451px,0px)";
        enj2.style.transform = "translate(-451px,0px)";
        enj3.style.transform = "translate(-451px,0px)";
        cha1.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        cha2.style.backgroundColor = "rgba(255, 103, 103, 0.8)";
        cha3.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    }
    function f2(){
        enj3.style.opacity = 1; 
        enj1.style.transition = "none";
        enj2.style.transition = "transform 2.5s";
        enj3.style.transition = "transform 2.5s";
        enj1.style.transform = "translate(451px,0px)";
        enj2.style.transform = "translate(-902px,0px)";
        enj3.style.transform = "translate(-902px,0px)";
        cha1.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        cha2.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        cha3.style.backgroundColor = "rgba(255, 103, 103, 0.8)";
    }
    function f3(){
        enj2.style.opacity = 0;
        enj1.style.transition = "transform 2.5s";
        enj2.style.transition = "none";
        enj3.style.transition = "transform 2.5s";
        enj1.style.transform = "translate(0px,0px)";
        enj2.style.transform = "translate(0px,0px)";
        enj3.style.transform = "translate(-1353px,0px)";
        cha1.style.backgroundColor = "rgba(255, 103, 103, 0.8)";
        cha2.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        cha3.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    }
    //调试时的暂停函数
    // function pause(scends){
    //     var now = Date.now();
    //     console.log("now:"+now);
    //     while(true){
    //         var nowTime = Date.now();
    //         var gap = nowTime - now;
    //         if(gap >= scends){
    //             break;
    //         }
    //     }
    //     console.log("nowTime:"+nowTime);
        
    // }
    cha1.addEventListener('click', function(){
        if(i==1){
            f2();
            f3();
            for( var li of enj){
                li.style.transition = "none";
            }
            i = 0;
            }
        if(i==2){f3();}
        if(i==3){return;}
        inner.innerText = "禁止偷图(///￣皿￣)○～";
    })
    cha2.addEventListener('click', function(){
        if(i==1){return;}
        if(i==2){
            f3();
            f1();
            for( var li of enj){
                li.style.transition = "none";
            }
            i=1;
        }
        if(i==3){f1();}
        inner.innerText = "禁止偷图(///￣皿￣)○～";
    })
    cha3.addEventListener('click', function(){
        if(i==1){f2();}
        if(i==2){return; }
        if(i==3){
            f1();
            f2();
            for( var li of enj){
                li.style.transition = "none";
            }
            i=2;
        }
        inner.innerText = "禁止偷图(///￣皿￣)○～";
    })
    
}