import * as React from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-3 px-5 kyg-navbar shadow justify-content-between">
            <Link to='/' className="h2 my-3 text-white">休業.com</Link>
            <div className="text-right text-white">休業中の店の情報共有サイト</div>
        </nav>        
    )
}

export default HeaderBar;