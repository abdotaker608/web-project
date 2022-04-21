const validateRequired = (value) => {
    return !!value;
};

const validateId = (value) => {
    return !!value && value.length <= 8;
};

const validateName = (value) => {
    return validateRequired(value);
};

const validateEmail = (value) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(value);
};

const validateDate = (value) => {
    return validateRequired(value);
};

const validateGpa = (value) => {
    return validateRequired(value);
};

const validateMobile = (value) => {
    return validateRequired(value);
};

const validateGender = (value) => {
    return validateRequired(value);
};

const validateStatus = (value) => {
    return validateRequired(value);
};

const validateLevel = (value) => {
    return validateRequired(value);
};

const validateDepartment = (value, level, isRequired = false) => {
    if (value && +level < 3) return false;
    return isRequired ? validateRequired(value) : true;
};
