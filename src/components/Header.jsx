import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import './static/Header.css';

const Header = () => {
    return (
        <header className="Header">  
            <section>
                <div className="list-name">Todas</div>
                <div className="user-information">
                    <i>
                        <AccountCircle/>
                    </i>
                    Luiz vilarinho
                    <div><a href="/">Logout</a></div>
                </div>
            </section>
        </header>
    );
}

export default Header;
