
function showDiv() {
    
        let targetdiv=document.getElementById('mobile-navbar');
        let navdiv=document.getElementById('mobile-navbar');
        let logo=document.getElementById('ktm-logo')
    

        
        if(targetdiv.style.display=="none"){
            targetdiv.style.display="block"
            navdiv.style.display="block"
            logo.style.position="fixed"
          
            
        }else{
            targetdiv.style.display="none"
            navdiv.style.display="none"
            logo.style.position="flex"
            
        }
        
    }
document.getElementById("grid-company").style.display="none";
document.getElementById("grid-world").style.display="none";
document.getElementById("grid-service").style.display="none";
document.getElementById("grid-legal").style.display="none";

    function showGrid1(){
        let x=document.getElementById("grid-company")
        if(x.style.display=="none"){
            x.style.display="block"
        }else{
            x.style.display="none"
        }
    }

function showGrid2(){
    let y=document.getElementById("grid-world")
    if(y.style.display=="none"){
        y.style.display="block"
    }else{
        y.style.display="none"
    }
}

function showGrid3(){
    let x=document.getElementById("grid-service")
    if(x.style.display=="none"){
        x.style.display="block"
    }else{
        x.style.display="none"
    }
}

function showGrid4(){
    let x=document.getElementById("grid-legal")
    if(x.style.display=="none"){
        x.style.display="block"
    }else{
        x.style.display="none"
    }
}
    



    