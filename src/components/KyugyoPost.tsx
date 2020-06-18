import * as React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { KyugyoType } from '../models/interfaces';

const KyugyoPost = (props) => {
    const kyugyo: KyugyoType = props.kyugyo;
    const link = `/kyugyo-front/kyugyos/${kyugyo.id}`;

    return (
        <Link to={link}>
            <div className="flex-fill text-white kg-post-box">
                <div className='border-bottom py-2'>
                    <span className='font-weight-bold mr-3'>店名</span>
                    <span>{kyugyo.storeName !== "" ? kyugyo.storeName : '未入力'}</span>
                </div>
                <div className='border-bottom py-2'>
                    <span className='font-weight-bold mr-3'>住所</span>
                    <span>{kyugyo.address !== "" ? kyugyo.address : '未入力'}</span>
                </div>
                <div className='border-bottom py-2'>
                    <span className='font-weight-bold mr-3'>店舗URL</span>
                    <span>{kyugyo.hpUrl !== "" ? kyugyo.hpUrl : '未入力'}</span>
                </div>
                <div className={`font-weight-bold border border-white p-2 p-sm-3 rounded-pill text-nowrap my-3 my-sm-0 kg-kyugyo-button text-center text-white ${kyugyo.isClosed ? 'bg-danger' : 'bg-success'}`}>
                    {kyugyo.isClosed ? '休業中' : '開業中'}
                </div>
            </div>
        </Link>
    )
}

export default KyugyoPost;