var newUsers = []
if(localStorage.newUserDetails){
    newUsers = JSON.parse(localStorage.getItem("newUserDetails"))
}
function createAccount(){
    var newDetail = {
        fName : firstName.value,
        mName : middleName.value,
        lName : lastName.value,
        email : userEmail.value,
        password : userPassword.value
    }
    // console.log(newUsers)
    
    if((fName = firstName.value) && (mName = middleName.value) && (lName = lastName.value) && (email = userEmail.value) && (password = userPassword.value)){window.location.href = "login.html", newUsers.push(newDetail),
        firstName.value = "", middleName.value = "", lastName.value = "", userEmail.value = "", userPassword.value =""  
    }
    else {
        alert ("Please fill in the form correctly")
    }
    localStorage.setItem("newUserDetails", JSON.stringify(newUsers))
}
function signIn(){
    var myEmail = userEmail.value
    var myPassword = userPassword.value
    var newUsers = JSON.parse(localStorage.getItem("newUserDetails"))
    var found = false
    for (let index = 0; index < newUsers.length; index++) {
        if(newUsers[index].email==myEmail && newUsers[index].password==myPassword){
            found = true
            alert("CORRECT")
        }
    }
    if(found){
    window.location.href = "logsearch.html"
    }
    else {
    alert("INVALID")
    }
}

function search(){
    var number = "001" + Math.round(Math.random()*1000)
    var date = new Date()
    date.getFullYear
    var newUsers = JSON.parse(localStorage.getItem("newUserDetails"))
    var confirmSearch = seaRch.value
    if (confirmSearch = newUsers[seaRch.value]){
    head.innerHTML = "<h1> User Info </h1>"
    show.innerHTML = "Firstname: " + newUsers[seaRch.value].fName   
    show2.innerHTML = "Middlename: " + newUsers[seaRch.value].mName
    show3.innerHTML = "Lastname: " + newUsers[seaRch.value].lName
    show4.innerHTML = "Email Address: " + newUsers[seaRch.value].email
    show5.innerHTML = "Password: " + newUsers[seaRch.value].password
    matric.innerHTML = "ID-Number: " + number
    time.innerHTML = "Date & Time: <br>" + date
}
    else {
        head.innerHTML = "<h3>Invalid Search</h3>"
    }
}
function checkAll(){
    window.location.href = "logcheck.html"   
}
function alll(){
    var newUsers = JSON.parse(localStorage.getItem("newUserDetails"))
        for (var index = 0; index < newUsers.length; index++) {
            table.innerHTML +=`
            <tr>
                <td>${index+1}</td>
                <td>${newUsers[index].fName}</td>
                <td>${newUsers[index].mName}</td>
                <td>${newUsers[index].lName}</td>
                <td>${newUsers[index].email}</td>
                <td><button>Edit</button><button onclick="del()">Delete</button></td>
            </tr>`
        }
}
// function del(){
//     newUsers.pop(index)
//     console.log(newUsers)
// }
// TRAVERSY MEDIA/