import React from 'react'
import './../scss/blocks/upload.scss'

const UploadButton = (props) => {
    return (
        <button onClick={props.handleClick} className={"upload-btn"}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13 8C13.5128 8 13.9355 8.38604 13.9933 8.88338L14 9V11C14 12.5977 12.7511 13.9037 11.1763 13.9949L11 14H5C3.40232 14 2.09634 12.7511 2.00509 11.1763L2 11V9C2 8.44772 2.44772 8 3 8C3.51284 8 3.93551 8.38604 3.99327 8.88338L4 9V11C4 11.5128 4.38604 11.9355 4.88338 11.9933L5 12H11C11.5128 12 11.9355 11.614 11.9933 11.1166L12 11V9C12 8.44772 12.4477 8 13 8ZM7.85153 2.01102L7.90997 2.004L8 2L8.07524 2.00279L8.20073 2.02024L8.31214 2.04974L8.42322 2.09367L8.52071 2.146L8.62545 2.21969L8.70711 2.29289L10.7071 4.29289C11.0976 4.68342 11.0976 5.31658 10.7071 5.70711C10.3166 6.09763 9.68342 6.09763 9.29289 5.70711L9 5.415V9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9V5.414L6.70711 5.70711C6.31658 6.09763 5.68342 6.09763 5.29289 5.70711C4.90237 5.31658 4.90237 4.68342 5.29289 4.29289L7.29289 2.29289C7.32829 2.2575 7.36567 2.22531 7.40469 2.19633L7.51594 2.12467L7.62866 2.07123L7.73401 2.03585L7.85153 2.01102Z" fill="#2168F5"/>
            </svg>
            <p>Upload transactions</p>
        </button>
    );
}

export default UploadButton;