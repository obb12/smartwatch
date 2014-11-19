
window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });

    	  $("#button").click(function(){
    	    $.ajax({url:"list.txt",success:function(result){
    	      $("#ajax").html(result);
    	    }});
    	  });
    
    var $textbox = $("#textbox");
    //document.write($textbox);
   $("#textbox").on( "click", function() { //.click(function(){
    	
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

   $("button").click(function(){
	   $("video").webkitEnterFullScreen();
   })
   webapis.motion.getMotionInfo("PEDOMETER", onsuccessCB, onerrorCB);
   function onsuccessCB(pedometerInfo) 
   {
      console.log("Step status: " + pedometerInfo.stepStatus);
      console.log("Cumulative calories: " + pedometerInfo.cumulativeCalorie);
      console.log("Cumulative distance: " + pedometerInfo.cumulativeDistance);
      console.log("Cumulative total step count: " + pedometerInfo.cumulativeTotalStepCount);
   }

   function onerrorCB(error) 
   {
      console.log("Error occurs");
   }
		   
};
