import React, {useState} from 'react';

import arrow from '../../assets/images/arrow.png';


const Select = ({ options = [], placeholder=""}) => {
    const [isSelect, setSelect] = useState('');
    const [isOptions, setOptions] = useState(false);

    return (
        <div className="selectArea">
            <p className={isSelect === '' ? "inputBox none" : "inputBox"} onClick={() => setOptions(!isOptions)}>
                <span>{isSelect === '' ? placeholder : isSelect}</span>
                <i className={isOptions ? "arrow open" : "arrow"}><img src={arrow} alt="open"/></i>
            </p>
            {isOptions &&
                <>
                    <p className="clossBox" onClick={() => setOptions(!isOptions)}></p>
                    <ul className="optionBox">
                        {
                            options.map((index) => (
                                <li className="option" key={index}>option</li>
                            ))
                        }
                    </ul>
                </>
            }
        </div>
    )
}

export default Select;