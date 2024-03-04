import './App.css';
import React, { useState } from 'react';
import Popup from './Popup';

function MenuItems1({ menuItem }) {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="portfolis">
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <input type="button" value={item.icon1} onClick={togglePopup} />
                                    <p>Click to Open</p>
                                    {isOpen && <Popup content={<>
                                                <img src={item.image} alt ="" />
                                                <button>Close</button> </>}
                                                handleClose={togglePopup}/>
                                    }
                                </li>
                            </ul>
                        </div>
                        <h5 >
                            {item.title}
                        </h5>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems1;
