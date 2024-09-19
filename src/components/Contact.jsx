import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, deleteContact, id }) => {
  return (
    <div className={css.contact}>
      <div className={css.contactText}>
        <span>
          <FaUser className={css.contactIcon} />
          {name}
        </span>
        <span>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </span>
      </div>
      <button className={css.btn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
