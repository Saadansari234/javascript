
// 1. INPUT SHOULDNT BE EMPTY.
// 2. MIN 8 CHARS.
// 3. 20 CHARS.
// 4. OLD AND NEW PASSWORD SHOULD BE SAME LOKE A===B.


function btn() {
    let newpass = document.getElementById("newpass").value;
    let newmsg = document.getElementById("newmsg");
    let confpass = document.getElementById("confpass").value
    let confmsg = document.getElementById("confmsg");

if (newpass.trim()==="") {
    newmsg.innerHTML= "insert a new password";
    newmsg.style.display="block";
}else {
    newmsg.style.display="none";
}

if (confpass.trim()==="") {
    confmsg.innerHTML= "insert a new password";
    confmsg.style.display="block";
}else {
    confmsg.style.display="none";
}



}


