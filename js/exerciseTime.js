
//Declaration Starts
//-----------------------

//var timerId=0;
var timers=[];

//Alarm declaration
var audio = new Audio('alarm.mp3');


//Alarm declaration using library
var sound=null;
  
  //sound.play();



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




//Exercise count variable
var exerciseCount=0;
var clearExerciseTimer=0;
var isExerciseStart=true;


var source = "alarm.mp3"
// var audio1 = document.createElement("audio");
// audio1.src = source;
// audio1.autoplay = true;
// audio1.load()


// audio1.addEventListener("load", function() {
//   audio1.play();
// }, true);


$(document).ready(function(){
  
 $('#myModal1').modal();
 
 var isPlay=false;
 $('#audio-btn').click(function(){
if(!isPlay){
  sound.play();
  isPlay=true;
}
else
  {
    sound.stop();
    isPlay=false;
  }


 });
  // var sound = new Howl({
  //   src: ['alarm.mp3']

  // });
  
  // sound.play();


  clearExerciseTimer=setInterval(function(){        
        startnow()   
  },5000);
  

     
//$('.save-diet').click(function(){         
    //      //var diet=$('#noondiet :selected').text();
    //    // alert(diet);

    //     $('#noondiet').append('<option value="Makande">Makande</option>');



    //  });

    //$(document).on('shown.bs.tab', function (e) { 	console.log('ae'); });
     


//trigger button to play audio



// $('#audio-btn').on('click',function(e){
//   //e.preventDefault();
//   audio1.play();
//   console.log('Clicked');
// });





//start now button monitor
$('#monitor-now-btn').click(function(){

  //if condition for time range is between 08 and 17
      // var d=new Date();    
      // var curHour=parseInt(d.getHours());

 
  clearExerciseTimer=setInterval(function(){
    if(exerciseCount<=5)
      startnow()  
     
  
  },15000);
  
});



     
       
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

     $("#myModal1").on('hide.bs.modal', function(){      
        
      
      // timers.forEach(timer=>{

      //   if(timer){

      //     clearInterval(timer);
      //       audio.pause();   
  
      //   }

      // });
      resetIsAlarmed();

      sound=new Howl({
        src: ['alarm.mp3'],
        loop: true,
    
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

var isAlarmed9=false;
var isAlarmed10=false;
var isAlarmed11=false;
var isAlarmed12=false;
var isAlarmed14=false;
var isAlarmed15=false;




function resetIsAlarmed(){
  isAlarmed9=false;
  isAlarmed10=false;
  isAlarmed11=false;
  isAlarmed12=false;
  isAlarmed14=false;
  isAlarmed15=false;
}

      function startnow(){

         //Declaration for current time variables
      var d=new Date();    
      var curHour=parseInt(d.getHours());
      var curMinutes=parseInt(d.getMinutes());
       
      if(curHour==8){
        resetIsAlarmed();
      }

          
      if(curHour==9 && isAlarmed9!=true ){
        if(curMinutes==30){
          sound.play();
            isAlarmed9=true;
            setTimeout(function(){remindMe()},1000);
            
        }
    }


   else if(curHour==10 && isAlarmed10!=true){
    if(curMinutes==30){
      sound.play();
        isAlarmed10=true;
        setTimeout(function(){remindMe()},1000);
        
    }
  }



        else if(curHour==11 && isAlarmed11!=true ){
          if(curMinutes==30){
            sound.play();
              isAlarmed11=true;
              setTimeout(function(){remindMe()},1000);
              
          }
      }



      else if(curHour==12 && isAlarmed12!=true){
        if(curMinutes==30){
          sound.play();
            isAlarmed12=true;
            setTimeout(function(){remindMe()},1000);
            
        }
      }

        else if(curHour==14 && isAlarmed14!=true){
          if(curMinutes==30){
            sound.play();
              isAlarmed14=true;
              setTimeout(function(){remindMe()},1000);
              
          }
        }



        else if(curHour==15 && isAlarmed15!=true){
          if(curMinutes==30){
            sound.play();
              isAlarmed15=true;
              setTimeout(function(){remindMe()},1000);
              
          }
          }   









        
        
      }


      function remindMe(){
        
        if(confirm("Habari,Ni muda wako wa kufanya Zoezi,tafadhali nyanyuka upige hatua kumi,zungusha kiuno,nyosha mikono na mgongo wako pia,bonyeza Ok kuendelea")){
          sound.stop();
          isExerciseStart=false;
          for(let i = 3;i>=0;i--){
            setTimeout(function timer(){console.log("Seconds Remain"+i);
            if(i==3){
              if(confirm("Tafadhali ukimaliza zoezi Bonyeza kitufe cha Ok na uendelee kufanya kazi")){
                isExerciseStart=true;
              }
              else
                isExerciseStart=true;

            }

         
         
          },1000 * i);
            
            
          }
          exerciseCount+=1;
          
      }
      else{
        sound.stop();
        return
      }
      
      }





      function lastReminder(){

        //audio.play();
        if(confirm("Habari,Ni muda wako wa kufanya Zoezi,tafadhali nyanyuka upige hatua kumi,zungusha kiuno,nyosha mikono na mgongo wako pia,bonyeza Ok kuendelea")){
          audio.pause();
          isExerciseStart=false;
          for(let i = 5;i>=0;i--){
            setTimeout(function timer(){console.log("Seconds Remain"+i);
            if(i==5){
              clearInterval(clearExerciseTimer);
              alert("Hili ni zoezi lako la Mwisho kwa siku ya leo,Tafadhali bonyeza Ok kuendelea");
              if(confirm("Tafadhali ukimaliza zoezi Bonyeza kitufe cha Ok na uendelee kufanya kazi")){
                isExerciseStart=true;
              }
              alert(" Tunachukua nafasi hii kukupongeza kwa kufanya Mazoezi vizuri sana,Hongera sana na bonyeza Ok kuendelea ");
              $("#myModal").modal();
               
            }
            
          
          },1000 * i);
            
            
            
          }
          exerciseCount+=1;

          

          
      }
      else
      sound.pause();

      }