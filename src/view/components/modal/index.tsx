import { FC, ReactNode, useState } from "react";
import ReactModal from "react-modal";

import styles from "./modal.module.css";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "40%",
    left: "40%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "250px",
  },
};

interface Props {
  children: ReactNode;
  onClose(): void;
}

export const Modal: FC<Props> = (props: Props) => {
  const { children, onClose } = props;
  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className={styles.content}>
          <button type="button" onClick={closeModal}>
            X
          </button>
          <div>{children}</div>
        </div>
      </ReactModal>
    </div>
  );
};
