import { IoPerson, IoCallSharp } from "react-icons/io5";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.contactDiv}>
      <div className={css.container}>
        <div className={css.containerName}>
          <IoPerson />
          <p className={css.name}>{contact.name}</p>
        </div>
        <div className={css.containerNumber}>
          <IoCallSharp />
          <p className={css.number}>{contact.number}</p>
        </div>
      </div>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
export default Contact;
