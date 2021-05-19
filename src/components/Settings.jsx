import React from 'react'
import arrowLeftDark from "../svg/Arrow left dark.svg";
import arrowLeftGrey from "../svg/Arrow left grey.svg";
import plus from '../svg/Plus.svg'
import './../scss/blocks/settings.scss'

const Settings = () => {
    const fillArrow = () => {

    }

    return (
        <div className={"settings"}>
            <div className={"setting-container"}>
                <div className={"setting-title"}>
                    <p className={"setting-name"}>Columns</p>
                    <img src={arrowLeftDark} alt={"filled field arrow"}/>
                </div>
                <p>File report_09.10.20.xls</p>
            </div>
            <div className={"setting-container"}>
                <div className={"setting-title"}>
                    <p className={"setting-name"}>Date</p>
                    <img src={arrowLeftGrey} alt={"unfilled field arrow"}/>
                </div>
                <div className={"date-fields"}>
                    <input type={"text"} placeholder={"Month"} className={"field field-small"}/>
                    <input type={"text"} placeholder={"Day"} className={"field field-small"}/>
                    <input type={"text"} placeholder={"Year"} className={"field field-small"}/>
                </div>
            </div>
            <div className={"setting-container"}>
                <div className={"setting-title"}>
                    <p className={"setting-name"}>Description</p>
                    <img src={arrowLeftGrey} alt={"unfilled field arrow"}/>
                </div>
                <div className={"descriptions"}>
                    <input type={"textarea"} placeholder={"Enter description"} className={"field field-large"}/>
                    <button className={"map-column-btn"}>
                        <img src={plus} alt={"add column"}/>
                        <p>To map one more column</p>
                    </button>
                </div>
            </div>
            <div className={"setting-container"}>
                <div className={"setting-title"}>
                    <p className={"setting-name"}>Amount</p>
                    <img src={arrowLeftGrey} alt={"unfilled field arrow"}/>
                </div>
                <input type={"text"} placeholder={"Enter amount"} className={"field field-small"}/>
            </div>
        </div>
    );
}

export default Settings;