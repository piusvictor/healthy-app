
//Declaration Starts
//-----------------------

//var timerId=0;
var timers=[];

//Alarm declaration
var audio = new Audio('wind.mp3');

//Time variables declaration
var text_time,txtH,txtM;  

   //User Variables
  //-----------------

 var Name,Age,Gender;    


  //Morning Variables
  //-----------------

 //Diet Variables
  //-----------------
  var morningDiet="",morningDietTime="";        

  //Drink Variables
  //-----------------

  var morningDrink="",morningDrinkTime="";

  //Medicine Variables
  //-----------------
   var morningMedicine="",morningMedicineTime="";

  //Exercise Variables
  //-----------------
   var morningExercise="",morningExerciseTime="";


  //Afternoon Variables
  //-----------------


 //Diet Variables
  //-----------------
  
  var afternoonDiet="",afternoonDietTime=""  ; 




  //Drink Variables
  //-----------------
  var afternoonDrink="",afternoonDrinkTime=""  ; 





  //Medicine Variables
  //-----------------
  var afternoonMedicine="",afternoonMedicineTime=""  ; 




  //Exercise Variables
  //-----------------

  var afternoonExercise="",afternoonExerciseTime=""  ; 







 //Evening Variables
 //-----------------


 //Diet Variables
  //-----------------
  var eveningDiet="",eveningDietTime=""  ; 




  //Drink Variables
  //-----------------

  var eveningDrink="",eveningDrinkTime=""  ; 




  //Medicine Variables
  //-----------------
  var eveningMedicine="",eveningMedicineTime=""  ; 




  //Exercise Variables
  //-----------------
  var eveningExercise="",eveningExerciseTime=""  ; 

  


//-------------------
//Declaration Stops







$(document).ready(function(){
     
//$('.save-diet').click(function(){         
    //      //var diet=$('#noondiet :selected').text();
    //    // alert(diet);

    //     $('#noondiet').append('<option value="Makande">Makande</option>');

    //  });

    //$(document).on('shown.bs.tab', function (e) { 	console.log('ae'); });
     

     
       
       //Initialize timepicker
       $('.timepicker').timepicker({
        // timeFormat: 'h:mm p',
         timeFormat: 'HH:mm',
         interval: 60,
         minTime: '00:00',
         maxTime: '23:00',
         defaultTime: '00',
         startTime: '00:00',
         dynamic: false,
         dropdown: true,
         scrollbar: true
     });
    



     //start Monitor Button

     $('#monitor').click(function(){
      healthSession("Morning Session Routine","Time for Eating Breakfast",$("#morningDiet").val());
setTimeout(function(){healthSession("Morning Session Routine","Time for Drink Juice",$("#morningDrink").val())},20000);
      
      //morningDrink

     });



     //stop set interval on modal close

     $("#myModal").on('hide.bs.modal', function(){      
        
      
      timers.forEach(timer=>{

        if(timer){

          clearInterval(timer);
            audio.pause();   
  
        }

      });
      
      timers=[];
      
    });



     });


     //function to check the diet,exercise,drink Timing

     function timeCheck(inputtime){

      //Declaration for current time variables
      var d=new Date();    
      var curHour=parseInt(d.getHours());
      var curMinutes=parseInt(d.getMinutes());

      var HM=inputtime.split(":");
      txtH=parseInt(HM[0]);
      txtM=parseInt(HM[1]);
      
      if(curHour==txtH){
          if(curMinutes==txtM){
              
         var timerId=setInterval(function(){audio.play()},3000);
         timers.push(timerId);            
      
              //setTimeout(function(){alert("Time to Exercise");},2000);
              setTimeout(function(){$("#myModal").modal();},2000);
              
      
      
          }
      }
      
      else
      return false;
      
      
      
      
      
      }
      

      function healthSession(session,activity,activitytime){

        $('.modal-title').text(session);
        $('.modal-body').text(activity);

        timeCheck(activitytime);
      }