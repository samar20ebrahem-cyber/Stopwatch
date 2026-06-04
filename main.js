// الخطوه 1
// 1- هنادي العناصر 
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const mSecondsDisplay = document.getElementById('ms');

// 2- هعمل متغيرات واسويها ب ال 0 تشيل الارقام اللي هتزيد
let hours =0;
let minutes =0;
let seconds =0;
let mSeconds =0;
// اديتها قيمه null عشان تكون فاضية خالص  مفهاش قيمه ع عكس لو اديتها 0 هيفهم ان لها قيمه وهيزود عليها 
let timerInterval = null;  
// 3- هنعمل دالة 
function updateTime(){
mSeconds++;
// 4- الشروط 
if(mSeconds === 100){
mSeconds=0;
seconds++;}
if (seconds === 60){
seconds=0;
minutes++;
}
if(minutes === 60){
minutes=0;
hours++;
};
mSecondsDisplay.textContent = mSeconds <10 ? '0'+ mSeconds :mSeconds;
secondsDisplay.textContent = (seconds <10 ? '0' + seconds :seconds)+' : ';
minutesDisplay.textContent = (minutes <10 ? '0' + minutes :minutes)+' : ';
hoursDisplay.textContent = (hours <10 ? '0' + hours :hours)+' : ';
};
//  خطوه 2

//  1-استدعاء الازرار
const btnStart = document.getElementById('start');
const btnPause = document.getElementById('Pause');
const btnRresume= document.getElementById('resume');
const btnReset = document.getElementById('reset');
btnRresume.style.display='none';
// 2- start حدث ال 
btnStart.addEventListener('click',function(){

    if (timerInterval !== null)
         return;
    timerInterval = setInterval(updateTime, 10);   // setInterval 
    btnStart.style.display = 'none';
    btnPause.style.display = 'inline-block';
});
// 2- Pause حدث ال 
btnPause.addEventListener('click', function() {
     clearInterval(timerInterval);   // clearInterval
     timerInterval = null;        //  بتمسح القيمه القديمه 
     this.style.display='none';
     btnRresume.style.display='block';
});

// 3- Rresume حدث ال 
btnRresume.addEventListener('click',function(){
   if (timerInterval !== null)
     return;
    timerInterval = setInterval(updateTime, 10); 
     this.style.display='none';
     btnPause.style.display='block';
});
// 3- Reset حدث ال 
btnReset.addEventListener('click', function() {
     clearInterval(timerInterval);   
     timerInterval = null;      
     
     hours =0;
     minutes=0;
     seconds=0;
     mSeconds=0;

     hoursDisplay.textContent='00 :';
     minutesDisplay.textContent='00 :';
     secondsDisplay.textContent='00 :';
     mSecondsDisplay.textContent='00';

     btnRresume.style.display='none';
     btnPause.style.display='block';
     btnStart.style.display = 'block';
});