    $(document).ready(function(){

let saveBtn = $(".saveBtn");




$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));


function timeBlockColor() {
    let hour = moment().hours();

    $(".time-block").each(function() {
        let currHour = parseInt($(this).attr("id"));

     

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


saveBtn.on("click", function() {

    
    let time = $(this).siblings(".hour").text();
    let plan = $(this).siblings(".plan").val();

    
    localStorage.setItem(time, plan);
});
let clearBtn = $("#clearBtn");

clearBtn.on("click", function() {
  if (confirm("Are you sure you want to clear this task?")){
     $("#clearTxt").val('');
 
    // $("#clearTxt2").val(''); 
  }
});

let clearBtn1 = $("#clearBtn1");
clearBtn1.on("click", function() {
    
if (confirm("Are you sure you want to clear this task?")){
    $("#clearTxt1").val('');
}
    });

    let clearBtn2 = $("#clearBtn2");

clearBtn2.on("click", function() {
  if (confirm("Are you sure you want to clear this task?")){
     $("#clearTxt2").val('');
 
    // $("#clearTxt2").val(''); 
  }
});
let clearBtn3 = $("#clearBtn3");

clearBtn3.on("click", function() {
  if (confirm("Are you sure you want to clear this task?")){
     $("#clearTxt3").val('');
 
    
  }
});

let clearBtn4 = $("#clearBtn4");

clearBtn4.on("click", function() {
  if (confirm("Are you sure you want to clear this task?")){
     $("#clearTxt4").val('');
 
    
  }
});

let clearBtn5 = $("#clearBtn5");

clearBtn5.on("click", function() {
  if (confirm("Are you sure you want to clear this task?")){
     $("#clearTxt5").val('');
 
    
  }
});

let clearBtn6 = $("#clearBtn6");

clearBtn6.on("click", function() {
  if (confirm("Are you sure you want to clear this task?")){
     $("#clearTxt6").val('');
 
    
  }
});
let clearBtn7 = $("#clearBtn7");

clearBtn7.on("click", function() {
  if (confirm("Are you sure you want to clear this task?")){
     $("#clearTxt7").val('');
 
    
  }
});

let clearBtn8 = $("#clearBtn8");

clearBtn8.on("click", function() {
  if (confirm("Are you sure you want to clear this task?")){
     $("#clearTxt8").val('');
 
    
  }
});














//  });
//let textAreas  = $("textarea");

//let clear = $("#clearTxt");
 
//clearBtn.click( function() {
    //if (alert("You are about to clear out all of your tasks.")){
        
       // $("#clearTxt").val('');  
      //  for(let i=0; i<textAreas.length;i++)
       // textAreas[i].value='';
    
      // localStorage.setItem(time, plan); 
   //}
//});





      
  
    
 


 
  
function usePlanner() {

    $(".hour").each(function() {
        let currHour = $(this).text();
        let currPlan = localStorage.getItem(currHour);

       

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}



timeBlockColor();
usePlanner();

    });
