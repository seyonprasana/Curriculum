b=document.getElementsByClassName('p')
b.style.display='block'
function show_hide(divId){
    var x=document.getElementById(divId);
    


    if(x.style.display=="none"){
        x.style.display='block';
        
    }


    else{
        x.style.display='none';
        
    }



   
}

function md(divId){
    var x=document.getElementById(divId);
    


    if(x.style.display=="none"){
        x.style.display='flex';
        
    }


    else{
        x.style.display='none';
        
    }
}



