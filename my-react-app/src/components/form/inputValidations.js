const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const onlyLetters = /^[A-Za-z\s]+$/;
const onlyNumbers = /^[0-9]+$/;
const specialChar =
  /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;

const inputValidations = (formData, formErrors, setFormErrors, inputName) => {
  //Name validations
  if (inputName === "name") {
    if (formData.name === "") {
      setFormErrors({ ...formErrors, name: "Ingrese un nombre." });
    } else if (!onlyLetters.test(formData.name)) {
      setFormErrors({
        ...formErrors,
        name: "El nombre solo debe contener letras.",
      });
    } else {
      setFormErrors({ ...formErrors, name: "" });
    }
  }
  //Email validations
  if (inputName === "email") {
    if (formData.email === "") {
      setFormErrors({ ...formErrors, email: "Ingrese su correo electronico." });
    } else if (!emailRegex.test(formData.email)) {
      setFormErrors({ ...formErrors, email: "Email invalido." });
    } else {
      setFormErrors({ ...formErrors, email: "" });
    }
  }
  //Phone validations
  if (inputName === "phone") {
    if (formData.phone === "") {
      setFormErrors({ ...formErrors, phone: "Ingrese un numero de telefono." });
    } else if (!onlyNumbers.test(formData.phone) || formData.phone.length < 8) {
      setFormErrors({ ...formErrors, phone: "Numero invalido" });
    } else {
      setFormErrors({ ...formErrors, phone: "" });
    }
  }
  //Address validations
  if (inputName === "address") {
    if (formData.address === "") {
      setFormErrors({ ...formErrors, address: "Ingrese su direccion." });
    } else {
      setFormErrors({ ...formErrors, address: "" });
    }
  }
  //Password validations
  if (inputName === "password") {
    if (formData.password === "") {
      setFormErrors({ ...formErrors, password: "Ingrese una contraseña." });
    } else if (formData.password.length < 8) {
      setFormErrors({
        ...formErrors,
        password: "La contraseña es demasiado corta.",
      });
    } else {
      setFormErrors({ ...formErrors, password: "" });
    }
  }
  //RepeatPassword validations
  if (inputName === "repeatPassword") {
    if (formData.repeatPassword === "") {
      setFormErrors({ ...formErrors, repeatPassword: "Repita su contraseña." });
    } else if (formData.repeatPassword !== formData.password) {
      setFormErrors({
        ...formErrors,
        repeatPassword: "La contraseña no coincide.",
      });
    } else {
      setFormErrors({ ...formErrors, repeatPassword: "" });
    }
  }
};

export default inputValidations;
