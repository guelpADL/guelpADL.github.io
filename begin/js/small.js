function a(id){
    var x = document.getElementById("nam");
    var y = document.getElementById("coo");
    var z = document.getElementById("vrr");
    var e = document.getElementById("over")
    switch(id){
        case 1:
            x.style.border = 0;
            x.style.width = 60+"%";
            x.style.borderBottom = "red solid 1px";
            break;
        case 2:
            y.style.border = 0;
            y.style.width = 60+"%";
            y.style.borderBottom = "red solid 1px";
            break;
        case 3:
            z.style.border = 0;
            z.style.width = 60+"%";
            z.style.borderBottom = "red solid 1px";
            break;
    }
    e.addEventListener('click',function(re){
        // console.log("x:"+re.pageX);
        // console.log("y:"+re.pageY);

        if( x.style.borderBottomColor == "red"&&
        (re.pageX<316||re.pageX>475||
        re.pageY<323||re.pageY>368))
        {
            x.style.borderBottomColor = "white";
        } 

        if( y.style.borderBottomColor == "red"&&
        (re.pageX<315||re.pageX>477||
        re.pageY<431||re.pageY>482))
        {
            y.style.borderBottomColor = "white";
        } 

        if( z.style.borderBottomColor == "red"&&
        (re.pageX<260||re.pageX>439||
        re.pageY<538||re.pageY>596))
        {
            z.style.borderBottomColor = "white";
        } 
    
    }
    )
}

function brea(i){
    var caoz1 = document.getElementById("li1");
    var caoz2 = document.getElementById("li2");
    var caoz3 = document.getElementById("li3");
    var co = document.getElementById("box2");
    var fo = document.getElementById("form");
    switch(i){
        case 1:
            caoz1.style.color = "#00a2ff";
            caoz2.style.color = "white";
            caoz3.style.color = "white";
            co.style.display = "none";
            fo.style.display = "block";
            break;
        case 2:
            caoz1.style.color = "white";
            caoz2.style.color = "#00a2ff";
            caoz3.style.color = "white";
            co.style.display = "block";
            fo.style.display = "none";
            break;
        case 3:
            caoz1.style.color = "white";
            caoz2.style.color = "white";
            caoz3.style.color = "#00a2ff";
            break;
    }
}