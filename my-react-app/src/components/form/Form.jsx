import { useState } from "react";
import styles from "./Form.module.css";

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
          <input
            className={styles.input}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleFormChanges}
            placeholder="Email"
          />
          <input
            className={styles.input}
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleFormChanges}
            placeholder="Phone"
          />
          <input
            className={styles.input}
            type="text"
            name="address"
            value={formData.address}
            onChange={handleFormChanges}
            placeholder="Address"
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleFormChanges}
            placeholder="Password"
          />
          <input
            className={styles.input}
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleFormChanges}
            type="password"
            placeholder="Repeat password"
          />
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
