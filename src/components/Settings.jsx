import React, {useState, useEffect} from 'react'
import Select, { components } from 'react-select'

import arrowLeftDark from "../svg/Arrow left dark.svg";
import arrowLeftGrey from "../svg/Arrow left grey.svg";
import plus from '../svg/Plus.svg'
import infoGrey from "../svg/Info grey.svg";
import infoDark from "../svg/Info dark.svg";

import RadioButton from "./RadioBtn";

import './../scss/blocks/settings.scss'

const selectOptions = [
    { value: 'value1', label: 'Value 1' },
    { value: 'value2', label: 'Value 2' },
    { value: 'value3', label: 'Value 3' },
    { value: 'value4', label: 'Value 4' },
    { value: 'value5', label: 'Value 5' }
]

const customSelectStyles = {
    option: (provided, state) => ({
        ...provided,
        height: 40,
        color: state.isFocused ? '#2168F5' : '#20284A',
        textAlign: 'left',
        fontWeight: state.isFocused ? 'medium' : 'normal',
        backgroundColor: state.isFocused ? '#F9FAFC' : '#ffffff',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    }),
    control: (provided, state) => ({
        width: 264,
        height: 40,
        border: '1px solid',
        borderColor: (state.isSelected || state.isFocused) ? '#2168F5' : '#CFD4DD',
        borderRadius: 4,
        padding: '8px 10px',
        fontWeight: 'normal',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer'
    }),
    menu: (provided, state) => ({
        ...provided,
        padding: '8px 10px',
    }),
    placeholder: () => ({
        color: '#20284A'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    }),
}

const DropdownIndicator = props => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                {props.selectProps.menuIsOpen ?
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29752 2.88253L4.70752 0.292529C4.31752 -0.0974705 3.68752 -0.0974704 3.29752 0.292529L0.707517 2.88253C0.0775165 3.51253 0.527517 4.59253 1.41752 4.59253L6.59752 4.59253C7.48752 4.59253 7.92752 3.51253 7.29752 2.88253Z" fill="#20284A"/>
                    </svg>
                    :
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.710006 1.71L3.30001 4.3C3.69001 4.69 4.32001 4.69 4.71001 4.3L7.30001 1.71C7.93001 1.08 7.48001 0 6.59001 0H1.41001C0.520006 0 0.0800057 1.08 0.710006 1.71Z" fill="#20284A"/>
                    </svg>
                }
            </components.DropdownIndicator>
        )
    );
};

const Settings = ({onNextActive, onBackActive}) => {
    const [info, setInfo] = useState(true)
    const [selected, setSelected] = useState(null)
    const [filledDates, setFilledDates] = useState(['', '', ''])
    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        onNextActive(!!selected && !!filledDates && !!desc && !!amount)
        onBackActive(!!selected && !!filledDates && !!desc && !!amount)
    }, [selected, filledDates, desc, amount, onNextActive, onBackActive])

    const onSelectionChange = (selectedOption) => {
        setSelected(selectedOption)
    }

    const onDateChange = (e) => {
        let dates = [...filledDates]
        dates[e.target.dataset.date_index] = e.target.value
        setFilledDates(dates)
    }

    const onDescChange = (e) => {
        setDesc(e.target.value)
    }

    const onAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const onFocusPlaceholder = (e) => {
        e.target.placeholder = 'Master State'
    }

    const onBlurPlaceholder = (e) => {
        e.target.placeholder = e.target.dataset.placeholder
    }

    return (
        <div>
            <div className={"settings"}>
                <div className={"setting-container"}>
                    <div className={"setting-title"}>
                        <p className={"setting-name"}>Columns</p>
                        <img src={arrowLeftDark} alt={"field arrow"}/>
                    </div>
                    <p>File report_09.10.20.xls</p>
                </div>
                <div className={"setting-container"}>
                    <div className={"setting-title"}>
                        <p className={"setting-name"}
                           style={{color: filledDates.every(item => item.length !== 0) && !!selected ? '#20284A' : '#898EA3'}}
                        >
                            Date
                        </p>
                        <img src={filledDates.every(item => item.length !== 0) && !!selected ? arrowLeftDark : arrowLeftGrey}
                             alt={"field arrow"}/>
                    </div>
                    <div className={"date-fields"}>
                        <Select options={selectOptions} styles={customSelectStyles}
                                placeholder={"Column 1: Date"}
                                components={{ DropdownIndicator }}
                                onChange={onSelectionChange}
                                value={selected}
                                className="select"
                                classNamePrefix="select"
                        />
                        <input type={"text"}
                               placeholder={"Month"}
                               className={"date-field field field-small"}
                               onChange={onDateChange}
                               data-date_index={0}
                               data-placeholder={'Month'}
                               onMouseDown={onFocusPlaceholder}
                               onMouseUp={onBlurPlaceholder}
                        />
                        <input type={"text"}
                               placeholder={"Day"}
                               className={"date-field field field-small"}
                               onChange={onDateChange}
                               data-date_index={1}
                               data-placeholder={'Day'}
                               onMouseDown={onFocusPlaceholder}
                               onMouseUp={onBlurPlaceholder}
                        />
                        <input type={"text"}
                               placeholder={"Year"}
                               className={"date-field field field-small"}
                               onChange={onDateChange}
                               data-date_index={2}
                               data-placeholder={'Year'}
                               onMouseDown={onFocusPlaceholder}
                               onMouseUp={onBlurPlaceholder}
                        />
                    </div>
                </div>
                <div className={"setting-container"}>
                    <div className={"setting-title"}>
                        <p className={"setting-name"} style={{color: !!desc ? '#20284A' : '#898EA3'}}>Description</p>
                        <img src={!!desc ? arrowLeftDark : arrowLeftGrey} alt={"field arrow"}/>
                    </div>
                    <div className={"descriptions"}>
                        <textarea placeholder={"Enter description"}
                               className={"description-field field field-large"}
                               onChange={onDescChange}
                               value={desc}
                               data-placeholder={'Enter description'}
                               onMouseDown={onFocusPlaceholder}
                               onMouseUp={onBlurPlaceholder}
                        />
                        <button className={"map-column-btn"}>
                            <img src={plus} alt={"add column"}/>
                            <p>To map one more column</p>
                        </button>
                    </div>
                </div>
                <div className={"setting-container"}>
                    <div className={"setting-title"}>
                        <p className={"setting-name"} style={{color: !!amount ? '#20284A' : '#898EA3'}}>Amount</p>
                        <img src={!!amount ? arrowLeftDark : arrowLeftGrey} alt={"field arrow"}/>
                    </div>
                    <input type={"text"}
                           placeholder={"Enter amount"}
                           className={"amount-field field field-small"}
                           onChange={onAmountChange}
                           value={amount}
                           data-placeholder={'Enter amount'}
                           onMouseDown={onFocusPlaceholder}
                           onMouseUp={onBlurPlaceholder}
                    />
                </div>
            </div>
            <div className={"amounts"}>
                <div className={"amounts-header"}>
                    <p>File has amounts in:</p>
                    <img src={info ? infoGrey : infoDark}
                         alt={"info"}
                         onMouseEnter={() => setInfo(!info)}
                         onMouseLeave={() => setInfo(!info)}
                    />
                    <p style={info ? {display: "none"} : {display: "block"}} className={"tooltip"}>Info text</p>
                </div>
                <div className={"file-radios"}>
                    <RadioButton id={"1column"} name={"file-radio"} value={"1column"}
                                 className={"radio-btn"}
                                 label={"1 column: both positive and negative numbers"}
                                 checked={true}
                    />
                    <RadioButton id={"2column"} name={"file-radio"} value={"2column"}
                                 className={"radio-btn"}
                                 label={"2 columns: separate positive and negative numbers"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Settings;