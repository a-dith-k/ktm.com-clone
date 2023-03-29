
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

