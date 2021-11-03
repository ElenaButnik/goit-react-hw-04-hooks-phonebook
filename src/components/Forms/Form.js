import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "../Forms/Form.module.css";
import PropTypes from "prop-types";

export default function Form({ addNewContact }) {
  const [userName, setName] = useState("");
  const [userNumber, setNumber] = useState("");
  const prodIdName = uuidv4();
  const prodIdNumber = uuidv4();

  //console.log(setName);

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "userName":
        setName(value);
        break;

      case "userNumber":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //const { name, number } = this.state;

    // let obj = {
    //   userName,
    //   userNumber,
    // };

    addNewContact(userName, userNumber);
    reset();
  };

   const reset = () => {
    setName("");
    setNumber("");
    };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={prodIdName}>
          Name
        </label>
        <input
          className={s.input}
          id={prodIdName}
          type="text"
          name="userName"
          value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />

        <label className={s.label} htmlFor={prodIdNumber}>
          Number
        </label>
        <input
          className={s.input}
          id={prodIdNumber}
          type="tel"
          name="userNumber"
          value={userNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />

        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  addNewContact: PropTypes.func,
};
