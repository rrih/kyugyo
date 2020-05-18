import * as React from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-3 kyg-navbar shadow justify-content-between">
            <Link to='/kyugyo-front' className="h2 my-3 text-white text-decoration-none flex-fill">休業.com</Link>
            {/* <Link to='/kyugyo-front/login' className="btn btn-outline-light float-right mx-2  text-decoration-none border"><i className="fas fa-sign-in-alt"></i>ログイン</Link> */}
            <div>
                <Link to='/kyugyo-front/post' className="d-none d-md-block text-white"><i className="fas fa-pen mr-2"></i>休業情報を投稿する</Link>
                <div className="text-right text-white">休業中の店の情報共有サイト</div>
            </div>
        </nav>        
    )
}

export default HeaderBar;