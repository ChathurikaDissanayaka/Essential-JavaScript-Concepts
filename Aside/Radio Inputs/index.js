// We can much more easily target pseudo elements like :checked
const submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', function(){
    const checkedRadio = document.querySelector('input[type="radio"]:checked')
    console.log(checkedRadio.value)
})