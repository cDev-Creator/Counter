// set initial count
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);
// node list of buttons will be displayed 
// node lists are similar to arrays but not have all the same functionality

btns.forEach(function (btn) {
    console.log(btn);
    // prints out each individual buttons value
    btn.addEventListener('click', function (e){
        console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
        }
        else if(styles.contains('reset')){
            count = 0;
        }
        if(count > 0){
            value.style.color ='green'
        }
        if(count < 0){
            value.style.color ='red'
        }
        if(count === 0) {
            value.style.color = '#222'
        }
        value.textContent = count;
    })
})