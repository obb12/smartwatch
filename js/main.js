
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });

    var $textbox = $("#textbox");
    console.log($textbox);
    //document.write($textbox);
   $(".contents").on( "click", function() { //.click(function(){
    	
    	setTimeout(function() {
    		navigator.vibrate(2000);
    	}, 5000);
    	if($textbox.html()==="Moi")
    	{
    		$textbox.html("Easy");
    		
        
        }
    	else if($textbox.html()==="Easy")
    	{
        	$textbox.html("Hard");
        
        }
    	else if($textbox.html()==="Hard")
    	{
        	$textbox.html("Difficult");
        	
        
        }
        else if($textbox.html()==="Difficult")
    	{
        	$textbox.html("Moi");
        
        };
    });

    // Sample code
   /* var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	box = document.querySelector('#textbox');
    	
    	
    	setTimeout(function() {
    		navigator.vibrate(2000);
    	}, 5000);
    	if(box.innerHTML==="Moi")
    	{
    		box.innerHTML =  "Easy";
        
        }
    	else if(box.innerHTML==="Easy")
    	{
        	box.innerHTML  = "Hard";
        
        }
    	else if(box.innerHTML==="Hard")
    	{
        	box.innerHTML =  "Difficult";
        
        }
        else if(box.innerHTML==="Difficult")
    	{
        	box.innerHTML =  "Moi";
        
        };
    	
    });
   */ 
};
