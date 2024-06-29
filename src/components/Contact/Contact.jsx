import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

// import { LuPencil } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  // const handleEditContact = () => {
  //   const updatedContact = {
  //     id: id, // або просто id
  //     name: "нове ім'я", // оновлене ім'я контакту
  //     number: "новий номер", // оновлений номер контакту
  //   };

  //   dispatch(editContact(updatedContact));
  // };

  return (
    <div className={css.item}>
      <div>
        <p className={css.iconName}>
          <BsFillPersonFill size={14} className={css.icon} /> {name}
        </p>
        <a href={`tel:${number.split("-").join("")}`} className={css.tel}>
          <BsFillTelephoneFill size={14} className={css.icon} />
          {number}
        </a>
      </div>
      <div className={css.buttonDiv}>
        <button className={css.btn} onClick={handleDeleteContact}>
          Delete
        </button>
        {/* <button className={css.btn} onClick={handleEditContact}>
          <LuPencil size={16} />
        </button> */}
      </div>
    </div>
  );
};

export default Contact;
