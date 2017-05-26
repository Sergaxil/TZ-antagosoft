$.fn.ctrlEnter = function (btns, fn) { 
   var thiz = $(this); 
   btns = $(btns); 
     
   function performAction (e) { 
     fn.call(thiz, e); 
   }; 
   thiz.bind("keydown", function (e) { 
    if (e.keyCode === 13 && e.ctrlKey) { 
      performAction(e); 
      e.preventDefault(); // Enter the default stop  
    } 
   }); 
   btns.bind("click", performAction); 
} 
$("#msg").ctrlEnter("button", function () { 
    $("<p class='post'></p>").append(this.val().replace(/\n/g, "<br/>")).fadeIn('slow') 
.appendTo("#result"); 
    this.val(""); 
}); 