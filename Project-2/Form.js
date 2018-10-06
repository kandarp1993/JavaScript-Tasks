var users = [];

    
    if(localStorage.a_users){
        users = JSON.parse(localStorage.a_users);
    }
    for(let i = 0; i < users.length;i++){
        var table = document.getElementById("myTable");
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = users[i].Username;
        cell2.innerHTML = users[i].Password;
        cell3.innerHTML = users[i].email;
        cell4.innerHTML = users[i].location;
        cell5.innerHTML = users[i].gender;
    }


document.getElementById('save').addEventListener('click',function(){
    var x = document.getElementsByTagName("h4");
    console.log(x)
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "";
    }
    var uname = true;
    if(document.getElementById('uname').value == ''){
        document.getElementById('uname').insertAdjacentHTML('afterend','<h4 style=color:red>Please enter Username</h4>')
    }
    if(document.getElementById('psw').value == ''){
        document.getElementById('psw').insertAdjacentHTML('afterend','<h4 style=color:red>Please enter password</h4>')
    }
    if(document.getElementById('email').value == ''){
        document.getElementById('email').insertAdjacentHTML('afterend','<h4 style=color:red>Please enter email address</h4>')
    }
    if(document.getElementById('location').value == ''){
        document.getElementById('location').insertAdjacentHTML('afterend','<h4 style=color:red>Please enter location</h4>')
    }
    else{
        var radios = document.getElementsByName('gender');
        var gender;
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                gender = radios[i].value;
                break;
            }
        }
        var info = {
            "Username": document.getElementById('uname').value,
            "Password":document.getElementById('psw').value,
            "email":document.getElementById('email').value,
            "location":document.getElementById('location').value,
            "gender":gender
        };
        users.push(info);
        localStorage.a_users = JSON.stringify(users);
        users = JSON.parse(localStorage.a_users);
        var i = users.length;

        if(i == 1){
            i = 0;
        }
        else{
            i = i - 1;
        }
        var table = document.getElementById("myTable");
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = users[i].Username;
        cell2.innerHTML = users[i].Password;
        cell3.innerHTML = users[i].email;
        cell4.innerHTML = users[i].location;
        cell5.innerHTML = users[i].gender;
        document.getElementById('uname').value = "";
        document.getElementById('psw').value = "";
        document.getElementById('email').value = "";
        document.getElementById('location').value = "";
        document.getElementById('male').checked = true;

        // console.log(users)
        //location.reload();
    }
        
    })