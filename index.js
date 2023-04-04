let dbUsers = [
    {
        username:"haniff",
        password:"123456",
        name:"Haniff",
        email:"b022120044@utem.student.edu.my"
    },
    {
        username:"john",
        password:"password",
        name:"John",
        email:"johncena@"
    },
    {
        username:"ali",
        password:"67890",
        name:"Ali",
        email:"alinabu@"
    }
]

function login(reqUsername, reqPassword){
    let matchUser = dbUsers.find(
        user => user.username == reqUsername
    )
    if(!matchUser) return "User Not Found"
    if(matchUser.password==reqPassword){
        return matchUser
    }
    else{
        return "invalid password"
    }
}

function register(reqUsername,reqPassword,reqName,reqEmail){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail
    })
}

//try to login
console.log(login("ali","67890"))
register("mir","1234","mirtum","penyu@")
console.log(login("mir","1234"))