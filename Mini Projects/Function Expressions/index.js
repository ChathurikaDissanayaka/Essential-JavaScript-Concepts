console.log(getTheftAlert(6))
const getTheftAlert = function(numberOfTransactionsHour){
    if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`
    }  
}


