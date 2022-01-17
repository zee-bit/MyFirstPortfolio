import React, { useEffect, useState } from 'react';
import { setTheme } from '../utils/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


function ThemeToggler() {
    const [themeClass, setThemeClass] = useState('light');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setThemeClass('light');
        }
        else {
            setTheme('theme-dark');
            setThemeClass('dark');
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setThemeClass('dark');
        }
        else if (localStorage.getItem('theme') === 'theme-light') {
            setThemeClass('light');
        }
    }, [theme])

    return (
        <div className="container-toggle">
            {
                // themeClass === "light" ?
                <input type="checkbox" id="checkbox" className="checkbox" onChange={handleOnClick} checked={themeClass === 'light'} />
                // :
                // <input type="checkbox" id="checkbox" className="checkbox" onClick={handleOnClick} />
            }
            <label htmlFor="checkbox" className="label">
                {/* <i class="fas fa-moon"></i>
                <i class='fas fa-sun'></i> */}
                <FontAwesomeIcon icon={faMoon} className="icon" color='pink' />
                <FontAwesomeIcon icon={faSun} className="icon" color='yellow' />
                <div className='ball'></div>
            </label>
        </div>
    )
}

export default ThemeToggler;