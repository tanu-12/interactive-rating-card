const submit=document.querySelector(".Submit_b");
console.log(submit);

const class1=document.querySelector(".rate-card");
const class2=document.querySelector(".thank_you_state");
const rating=document.querySelectorAll(".rate");
const f_rate=document.querySelector(".f_rate");
for (let i=0;i<rating.length;i++){

rating[i].addEventListener('click',function(e){
    f_rate.textContent=e.target.value

});

}


submit.addEventListener('click', function(){
    class1.classList.toggle("hidden");
    class2.classList.toggle("hidden");
    });