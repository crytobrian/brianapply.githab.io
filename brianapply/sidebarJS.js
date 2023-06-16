// $(document).ready(function(){

// }) JQ的固定寫法

$(document).ready(function(){
    $("#collapse").on("click",function(){ //按下collapse
        $("#sidebar").toggleClass("active");//連動sidebar
        $(".fa-align-left").toggleClass("fa-sharp fa-solid fa-bars fa-beat");
            
    })
   
        
    $(".SHOW").hide(); // 將 .meShow 元素隱藏
      
    $("#ME").click(function(){
        $("#meShow").slideToggle();
    });
    $("#WORK").click(function(){
        $("#workShow").slideToggle();
    });
    $("#TIME").click(function(){
        $("#timeShow").slideToggle();
    })
    $("#JOB").click(function(){
        $("#jobShow").slideToggle();
    })
    $("#EMOTIONS").click(function(){
        $("#emotionShow").slideToggle();
        
    })
    
    $("#FEEL").click(function(){
        $("#feelShow").slideToggle();
    })
    $("#MESSAGE").click(function(){
        $("#messageShow").slideToggle();
    })
    

    $(".home").click(function(){
        $(".SHOW").slideUp();
    })
     
})   
    
   