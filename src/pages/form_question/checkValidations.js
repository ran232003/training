export const checkValidationForm1 = (name, value) => {
  switch (name) {
    case "password":
      const pattern = /[!@#$%^&*]/;

      // Test if the string contains at least one of the special characters
      const containsSpecialCharacter = pattern.test(value);
      return (
        value.length > 2 &&
        value.length < 30 &&
        containsSpecialCharacter === true
      );
      break;
    case "name":
      return value.length > 2 && value.length < 30;
      break;
    case "email":
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailChar = emailPattern.test(value);
      return value.length > 2 && value.length < 30 && emailChar;
      break;
    default:
      break;
  }
};
