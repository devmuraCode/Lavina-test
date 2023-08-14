import { useState } from "react";

export type ModalControlType<T = unknown> = {
  visible: boolean;
  openModal: (props?: T) => void;
  closeModal: () => void;
  updateProps: (props: T) => void;
} & T;

export const useModalControl = <T>(initialModalProps?: T) => {
  const [modalProps, setModalProps] = useState({
    visible: false,
    ...initialModalProps,
  });

  const openModal = (props?: T) => {
    setModalProps({ visible: true, ...props });
  };

  const closeModal = () => {
    setModalProps({ visible: false, ...initialModalProps });
  };

  const updateProps = (props: T) => {
    setModalProps({ ...modalProps, ...props });
  };

  return {
    ...modalProps,
    openModal,
    closeModal,
    updateProps,
  } as ModalControlType<T>;
};
