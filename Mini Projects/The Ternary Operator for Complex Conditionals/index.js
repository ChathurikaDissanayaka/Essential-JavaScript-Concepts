const exerciseTimeMins = 20

const message = exerciseTimeMins < 30 ? 'You need to try harder!' 
    : exerciseTimeMins < 60 ? 'Doing good!' 
    : 'Excellent!'

console.log(message)