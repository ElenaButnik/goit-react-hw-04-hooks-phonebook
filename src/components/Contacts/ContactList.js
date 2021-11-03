import s from "../Contacts/ContactList.module.css";
import PropTypes from "prop-types";

export default function ContactList ({removeContact, contacts}) {
 
    return (
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.list__item} key={id}>
            {name} : {number}
            <button
              className={s.button}
              onClick={removeContact}
              type="button"
              id={id}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }

ContactList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
};
