function comparePassword(){
    let pass1= document.getElementById("pwd1").value
    let pass2= document.getElementById("pwd2").value
    if(pass1 == pass2){
        alert("data was sent to the server...");
    }
    else{
        alert("password don't match...")
    }
 }

function sameName(){
    if(sameFullname.checked == true){
        cln.value = ln.value;
        cfn.value = fn.value;
    }
}
