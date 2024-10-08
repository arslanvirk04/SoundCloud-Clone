import React from "react";
// import { Modal } from "../../context/Modal";
import Modal from "react-modal";
import SignupForm from "./SignupForm";
import "./SignupForm.css";
import { useSelector, useDispatch } from "react-redux";
import { openSignup, closeSignup } from "../../store/modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function SignupFormModal() {
  // const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const signupState = useSelector((state) => state.modal.signupShow);

  const closeModal = () => dispatch(closeSignup());


  const history = useHistory();

  const handleSignup = () => {
    history.push("/register");

  };

  return (
    <>
      {/* <button
        id="createAccBtn"
        className="nav-bar-btn"
        onClick={handleSignup}
      >
        Create Account
      </button> */}
      <Modal
        width={800}
        isOpen={signupState}
        closeTimeoutMS={500}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Signup Modal"
        overlayClassName="OuterModal"
        className="InnerModal"
      >
        <SignupForm />
      </Modal>
    </>
  );
}

export default SignupFormModal;
