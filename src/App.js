import React, {useState} from 'react'

import UploadBtn from "./components/UploadBtn.jsx";
import Checkbox from "./components/CheckBox";
import Settings from "./components/Settings";

import ReactModal from "react-modal";

import './scss/blocks/modal.scss'

const App = () => {
  const [open, openModal] = useState(false);
  const [nextActive, setNextActive] = useState(false)
    const [backActive, setBackActive] = useState(false)

  const toggleModal = () => {
      openModal(!open)
  }

  const toggleNextActive = (active) => {
      setNextActive(active)
  }

  const toggleBackActive = (active) => {
      setBackActive(active)
  }

  return (
        <div className="App">
            <UploadBtn handleClick={toggleModal}/>
            <ReactModal
                isOpen={open}
                contentLabel={"Upload transactions"}
                className={"modal-container"}
                overlayClassName={"modal-overlay"}
                onRequestClose={toggleModal}
                shouldCloseOnOverlayClick={false}
                parentSelector={() => document.getElementsByClassName("App")[0]}
            >
                <div className={"modal-header"}>
                    <h1>Upload transactions</h1>
                    <svg width="24" height="24" onClick={toggleModal} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.4143 12.0002L18.7072 6.70725C19.0982 6.31625 19.0982 5.68425 18.7072 5.29325C18.3162 4.90225 17.6842 4.90225 17.2933 5.29325L12.0002 10.5862L6.70725 5.29325C6.31625 4.90225 5.68425 4.90225 5.29325 5.29325C4.90225 5.68425 4.90225 6.31625 5.29325 6.70725L10.5862 12.0002L5.29325 17.2933C4.90225 17.6842 4.90225 18.3162 5.29325 18.7072C5.48825 18.9022 5.74425 19.0002 6.00025 19.0002C6.25625 19.0002 6.51225 18.9022 6.70725 18.7072L12.0002 13.4143L17.2933 18.7072C17.4882 18.9022 17.7443 19.0002 18.0002 19.0002C18.2562 19.0002 18.5122 18.9022 18.7072 18.7072C19.0982 18.3162 19.0982 17.6842 18.7072 17.2933L13.4143 12.0002Z" fill="#141419"/>
                    </svg>
                </div>
                <div className={"modal-content"}>
                    <h2>Map columns. For each field, select bank account fields</h2>
                    <div className={"header-selection"}>
                        <Checkbox className={"checkbox"}
                                  id={"header-checkbox"}
                                  label={"First row in file is a header row"}
                        />
                    </div>
                    <Settings onNextActive={toggleNextActive} onBackActive={toggleBackActive}/>
                    <div className={"button-container"}>
                        <button className={nextActive ? "back-btn-active" : "back-btn"}>Back</button>
                        <button className={nextActive ? "next-btn-active" : "next-btn"}>
                            Next
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.7097 4.3871L9.79289 4.29289C10.1534 3.93241 10.7206 3.90468 11.1129 4.2097L11.2071 4.29289L14.2071 7.29289L14.2485 7.33685V7.33685L14.3037 7.40469V7.40469L14.3753 7.51594V7.51594L14.4288 7.62866V7.62866L14.4642 7.73401V7.73401L14.4931 7.8819V7.8819L14.5 8V8L14.4972 8.07524V8.07524L14.4798 8.20073V8.20073L14.4503 8.31214V8.31214L14.4063 8.42322V8.42322L14.354 8.52071V8.52071L14.2803 8.62545V8.62545L14.2071 8.70711L11.2071 11.7071C10.8166 12.0976 10.1834 12.0976 9.79289 11.7071C9.43241 11.3466 9.40468 10.7794 9.7097 10.3871L9.79289 10.2929L11.085 9H3.5C2.94772 9 2.5 8.55228 2.5 8C2.5 7.44772 2.94772 7 3.5 7H11.085L9.79289 5.70711C9.43241 5.34662 9.40468 4.77939 9.7097 4.3871L9.79289 4.29289L9.7097 4.3871Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </ReactModal>
        </div>
  );
}

export default App;
