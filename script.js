const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');


const checkPalindrome = () => {
    const regex = /[\W^_]/g;
    const strClear = textInput.value.replace(regex, '').toLowerCase();
    const strReverse = strClear.split('').reverse().join('');
    console.log(strClear, ': clear', strReverse, ':reverse');
    
    if (strClear === strReverse) {
        return result.innerHTML = `<p><strong>${textInput.value}</strong> is a palindrome.</p>`;
    } else {
        return result.innerHTML = `<p><strong>${textInput.value}</strong> is not a palindrome.</p>`;
    }
    
};

checkBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!textInput.value) {
        alert('inserisci un valore');
    }else {
        checkPalindrome();
    }
});