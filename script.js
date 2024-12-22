// access elements from DOM
const counterDisplay =  document.getElementById('counter');
const increaseBtn =  document.getElementById('increment');
const decreaseBtn =  document.getElementById('decrement');

//now innitialize the counter
let count=0;

//icrementation  we will add event Listeners

increaseBtn.addEventListener('click', function(){
    count +=  1;
    counterDisplay.textContent = count;
}
)
decreaseBtn.addEventListener('click', function(){
    count -=  1;
    counterDisplay.textContent = count;
}
)
