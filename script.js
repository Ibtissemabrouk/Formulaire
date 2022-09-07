const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

console.log(username)

let etas = false;

function checkInputs(){
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const password2Value = password2.value.trim();

if (usernameValue === ""){
    // ERROR
    changeRedBorder(username,"Username cannot be blank");
    etas = false;
}
else if(usernameValue.length < 5){
    //ERROR
    changeRedBorder(username,"username length must be longer than 5");
    etas = false;
}
else{
    //SUCCESS
    changeGreenBorder(username);
    etas = true;
}
if (emailValue === ""){
    //ERROR
    changeRedBorder(email,"Email cannot be blank");
    etas = false;
}
else if (!isEmail(emailValue)){
    //ERROR
    changeRedBorder(email,"Email incorrect");
    etas = false;
}
else {
    //success
    changeGreenBorder(email);
    etas = true;
}
if (passwordValue === ""){
    //ERROR
    changeRedBorder(password,"Password cannot be blank");
    etas = false;
}
else{
    //SUCCESS
    changeGreenBorder(password);
    etas = true;
}
if(password2Value ===""){
    //ERROR
    changeRedBorder (password2,"Password cannot be blank");
    etas = false;
}
else if (password2Value !== passwordValue){
    //ERROR
    changeRedBorder (password2,"Passwords not matching");
    etas = false;
}
else{
    //SUCCESS
    changeGreenBorder(password2);
    etas = true;
}
}
function changeGreenBorder(input){
    const grandDiv = input.parentElement;
    grandDiv.className = "form-control success"

}

function changeRedBorder (input,message){
    const grandDiv = input.parentElement;
    grandDiv.className = "form-control error";
    const small = grandDiv.querySelector('small');
    small.innerText = message;


}
//****** controle les email
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}






form.addEventListener('submit', (e) => {
    e.preventDefault(); //! DISABLE HARD REFRESH;
    checkInputs();
    // if (etas === true)=if(etas)
    if(etas){
        //message success
        const success = document.getElementById("message");
        success.innerText ="Account created successfully";
        //FORM DELETED
        form.reset();

        //message Deleted apres 3 sec
        setTimeout(()=>{success.innerText=""},3000)
    }
})
