
function onRegister(event){
    event.preventDefault();
    document.getElementById("registerForm").reset();
    alert("Thank You for registering with us.");
    const url = window.location.href;
    const urlArr = url.split("/");
    urlArr.pop();
    urlArr.push("index.html");
    const newUrl = urlArr.join("/");
    window.location.replace(newUrl);
}

function onLogin(event){
    event.preventDefault();
    document.getElementById("loginForm").reset();
    const url = window.location.href;
    const urlArr = url.split("/");
    urlArr.pop();
    urlArr.push("index.html");
    const newUrl = urlArr.join("/");
    window.location.replace(newUrl);
}