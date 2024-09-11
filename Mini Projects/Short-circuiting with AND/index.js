const user = {
    userName: 'Tom',
    role: 'admin',
}

user.role === 'admin' && greetAdmin()

function greetAdmin(){
    console.log('Hi Admin!')
}

// console.log(user.role === 'admin')