import React, { Fragment, useState} from "react";
import { FaTimes } from "react-icons/fa";

const useModal = () => {
    const [showModal, setModal] = useState(false);
    const [modalBusy, setModalBusy] = useState(false);

    const setShowModal = (state) => setModal(state);

    const Modal = ({ title, children }) => {
        return (
            <>
                { showModal &&
                    <div
                        className="fixed top-0 left-0 index-30 w-full h-screen flex items-center justify-center bg-modal"
                        onClick={() => setShowModal(false)}
                        >
                        <div className="w-11/12 md:w-8/12 lg:w-5/12 xl:w-4/12  p-4 lg:px-8 rounded shade bg-white" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-start justify-between py-2 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 ">
                                    {title}
                                </h3>
                                <button
                                onClick={() => setShowModal(false)}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            {modalBusy && (
                                <div className="absolute w-full h-full justify-center align-top">
                                <Loading />
                                </div>
                            )}
                            <div className="py-6">{children}</div>
                        </div>
                    </div>
                }
            </>
        )
    }
    return { Modal, showModal, setShowModal, setModalBusy };
}

export default useModal