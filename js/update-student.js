/* Default validations */

//Form
const form = document.getElementById("update-student-form");

//Inputs
const idInput = document.getElementById("id");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const gpaInput = document.getElementById("gpa");
const mobileInput = document.getElementById("mobile");

//Radios
const radios = document.querySelectorAll('input[type="radio"]');

//error message
const errorMessage = document.querySelector(".error-message");

//Data
let data = {
    level: "",
    status: "",
    gender: "",
};

document.getElementById("button").onclick=function(){
    var xhtml= new XMLHttpRequest();
    xhtml.open("DELETE","https://web-project-api.herokuapp.com/students/"+idInput.value,true);
    xhtml.setRequestHeader('Content-Type', 'application/json');
    xhtml.onreadystatechange =function() {
    if(this.readyState==4 && this.status==204){
        alert("Deleted data");
    }
    };
    xhtml.send();
}

//Form submit handler
const handleNewStudentFormSubmit = (e) => {
    //stop redirection
    e.preventDefault();
    //validate data
    const validId = validateId(idInput.value);
    const validName = validateName(nameInput.value);
    const validEmail = validateEmail(emailInput.value);
    const validDate = validateDate(dateInput.value);
    const validGpa = validateGpa(gpaInput.value);
    const validMobile = validateMobile(mobileInput.value);
    const validGender = validateGender(data.gender);
    const validLevel = validateLevel(data.level);
    const validStatus = validateStatus(data.status);
    //all data valid?
    const allIsValid =
        validId &&
        validName &&
        validEmail &&
        validDate &&
        validGender &&
        validMobile &&
        validGpa &&
        validLevel &&
        validStatus;
    //error message to display
    let errMess;
    //if everything is valid submit data to backend
    if (allIsValid) {
        //remove error message
        errorMessage.textContent = "";

        /* AJAX Request */
    var xhtml= new XMLHttpRequest();
    xhtml.open("PUT","https://web-project-api.herokuapp.com/students/"+idInput.value,true);
    xhtml.setRequestHeader('Content-Type', 'application/json');
    xhtml.onreadystatechange =function() {
    if(this.readyState==4 && this.status==200){
        alert("added data");
    }
    };
    xhtml.send(JSON.stringify({...data,name:nameInput.value,email:emailInput.value,birth:dateInput.value,gpa:gpaInput.value,mobile_number:mobileInput.value}));
}
    //otherwise, we show the error message
    else {
        //check each validation separately
        if (!validId) errMess = "Invalid ID!";
        else if (!validName) errMess = "Invalid Name!";
        else if (!validEmail) errMess = "Invalid Email!";
        else if (!validDate) errMess = "Invalid Date!";
        else if (!validGpa) errMess = "Invalid GPA!";
        else if (!validMobile) errMess = "Invalid Mobile No.!";
        else if (!validGender) errMess = "Invalid Gender!";
        else if (!validLevel) errMess = "Invalid level!";
        else if (!validStatus) errMess = "Invalid Status!";
        //Update DOM
        errorMessage.textContent = errMess;
        errorMessage.scrollIntoView({ block: "start", behavior: "smooth" });
    }
};

//Radio change handler
const handleRadioChange = (e) => {
    data[e.target.name] = e.target.value;
};

//Attach handler to form
form.addEventListener("submit", handleNewStudentFormSubmit);

//Attach handler to radios
radios.forEach((radio) => radio.addEventListener("change", handleRadioChange));
