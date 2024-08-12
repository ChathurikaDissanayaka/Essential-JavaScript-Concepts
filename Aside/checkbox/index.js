const continueBtn = document.getElementById('continue-btn')
const acceptTerms = document.getElementById('accept-terms')
const acceptMail = document.getElementById('accept-mail')

continueBtn.addEventListener('click', function(){
    if (acceptTerms.checked){
        console.log("Terms accepted!")    
    }
    else{
        console.log("Terms refused!")         
    }
    
    if (acceptMail.checked){
        console.log("Mail accepted")
    }
    else{
        console.log("Mail refused")
    }
    
})