document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();



    if(username && email && password)  {
        window.location.href = "login.html";
    } else{
          alert("Iltimos, barcha maydonni to'ldiring")
    }


    })