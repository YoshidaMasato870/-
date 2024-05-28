let startButton =document.getElementsByClassName("startButton")[0];
let stopButton =document.getElementsByClassName("stopButton")[0];
let resetButton =document.getElementsByClassName("resetButton")[0];
let dHour=document.getElementsByClassName("dhour")[0];
let dMinute=document.getElementsByClassName("dminute")[0];
let dSecond=document.getElementsByClassName("dsecond")[0];
let dMsecond=document.getElementsByClassName("dmsecond")[0];
let timer;
let hold;
let msecond=0;
let second=0;
let minute=0;
let hour=0;

startButton.addEventListener("click",function(){
  startButton.disabled=true;
  stopButton.disabled=false;
  resetButton.disabled=false;
  timer=timer+hold;
    timer=setInterval(function(){
      msecond++;
      if(msecond>=10){
        msecond=0;
        second++;
      }
      if(second>=60){
        second=0;
        minute++;
      }
      if(minute>=60){
        minute=0;
        hour++;
      }
    console.log(msecond);
    console.log(second);
    console.log(minute);
    console.log(hour);
    dMsecond.innerText=msecond;
    dSecond.innerText=second;
    dMinute.innerText=minute;
    dHour.innerText=hour;
    },100);
  });

stopButton.addEventListener("click",function(){
  startButton.disabled=false;
  stopButton.disabled=true;
  resetButton.disabled=false;
  hold=clearInterval(timer);
});

resetButton.addEventListener("click",function(){
  stopButton.disabled=true;
  resetButton.disabled=true;
  hold=0;
  msecond=0;
  second=0;
  minute=0;
  hour=0;
  dMsecond.innerText=msecond;
  dSecond.innerText=second;
  dMinute.innerText=minute;
  dHour.innerText=hour;
});