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
                <div>店名{kyugyo.storeName}</div>
                <div>住所：{kyugyo.address}</div>
                <div>店舗URL：{kyugyo.hpUrl}</div>
                <div>更新日時：{kyugyo.updatedAt}</div>
                <div className="border border-white text-white p-2 p-sm-3 rounded-pill text-nowrap my-3 my-sm-0 kg-kyugyo-button text-center">
                    {kyugyo.isClosed ? '休業中' : '開業中'}
                </div>
            </div>
        </Link>
    )
}

export default KyugyoPost;