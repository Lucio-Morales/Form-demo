import { useState } from "react";
import styles from "./Form.module.css";
import inputValidations from "./inputValidations";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    repeatPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    repeatPassword: "",
  });

  const handleFormChanges = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    inputValidations(
      {
        ...formData,
        [event.target.name]: event.target.value,
      },
      formErrors,
      setFormErrors,
      event.target.name
    );
  };
  return (
    <div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChanges}
            placeholder="Name"
          />
          {formErrors.name && <p className={styles.error}>{formErrors.name}</p>}
          <input
            className={styles.input}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleFormChanges}
            placeholder="Email"
          />
          {formErrors.email && (
            <p className={styles.error}>{formErrors.email}</p>
          )}
          <input
            className={styles.input}
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleFormChanges}
            placeholder="Phone"
          />
          {formErrors.phone && (
            <p className={styles.error}>{formErrors.phone}</p>
          )}
          <input
            className={styles.input}
            type="text"
            name="address"
            value={formData.address}
            onChange={handleFormChanges}
            placeholder="Address"
          />
          {formErrors.address && (
            <p className={styles.error}>{formErrors.address}</p>
          )}
          <input
            className={styles.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleFormChanges}
            placeholder="Password"
          />
          {formErrors.password && (
            <p className={styles.error}>{formErrors.password}</p>
          )}
          <input
            className={styles.input}
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleFormChanges}
            type="password"
            placeholder="Repeat password"
          />
          {formErrors.repeatPassword && (
            <p className={styles.error}>{formErrors.repeatPassword}</p>
          )}
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
