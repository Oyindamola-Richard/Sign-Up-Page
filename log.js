var newUsers = []
if(localStorage.newUserDetails){
    newUsers = JSON.parse(localStorage.getItem("newUserDetails"))
}
function createAccount(){
    var studentDetail = {
        fName : firstName.value,
        mName : middleName.value,
        lName : lastName.value,
        email : userEmail.value,
        password : userPassword.value
    }
    // console.log(newUsers)
    
    if((fName = firstName.value) && (mName = middleName.value) && (lName = lastName.value) && (email = userEmail.value) && (password = userPassword.value)){window.location.href = "logsearch.html", newUsers.push(studentDetail),
        firstName.value = "", middleName.value = "", lastName.value = "", userEmail.value = "", userPassword.value =""  
    }
    else {
        alert ("Please fill in the form correctly")
    }
    localStorage.setItem("newUserDetails", JSON.stringify(newUsers))
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
    show4.innerHTML = "Email Address: <br>" + newUsers[seaRch.value].email
    show5.innerHTML = "Password: " + newUsers[seaRch.value].password
    matric.innerHTML = "Number: " + number
    time.innerHTML = "Date & Time: <br>" + date
}
    else {
        head.innerHTML = "<h3>Invalid Search</h3>"
    }
}