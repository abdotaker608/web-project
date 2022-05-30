/* Default validations */

//Form
const form = document.getElementById("department-form");

//Inputs
const idInput = document.getElementById("id");

//Radios
const radios = document.querySelectorAll('input[type="radio"]');

//error message
const errorMessage = document.querySelector(".error-message");

//Data
let data = {
    department: "",
};

//Form submit handler
const handleNewStudentFormSubmit = (e) => {
    //stop redirection
    e.preventDefault();
    //validate data
    const validId = validateId(idInput.value);
    const validDepartment = validateDepartment(data.department)
    //all data valid?
    const allIsValid =
        validId &&
       validDepartment;
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
        jData=JSON.parse(this.response);
        document.getElementById("name").innerHTML=jData["name"];
        alert("added data");
    }
    };
    xhtml.send(JSON.stringify({...data}));
}
    //otherwise, we show the error message
    else {
        //check each validation separately
        if (!validId) errMess = "Invalid ID!";
        else if (!validDepartment) errMess = "Invalid Department!";
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


