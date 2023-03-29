import React from 'react';
import NavContainer from '../Nav/NavContainer';
import classes from './Header.module.css';

const Header = ({ openNavMenu, open }) => {
    // const nav = useNavigate()
    // useEffect(() => {
    //     if (open) {
    //         nav('/nav')
    //     }
    // }, [open])

    return (
        <>
            <div className={classes.wrapper}>
                
                <div className={classes.burger_menu}>
                    <span onClick={() => openNavMenu(!open)}>B</span>
                </div>
                <div className={open ? classes.menu_open : classes.menu_closed}>
                    <NavContainer />
                </div>
                <div className={classes.logo}>
                    <p>Social ·</p>
                    <p className={classes.logo__text}>· NET</p>
                </div>
            </div>
        </>
    )
}

export default Header