import * as React from 'react';
import { useState, useEffect } from 'react';

const KyugyoList = (props) => {
    const kyugyos = props.kyugyos;
    return (
        <ul className="list-unstyled px-sm-5">
            {kyugyos.map((k, i) => {
                return (
                <li className="h4 d-flex justify-content-between border border-white py-4 px-3 px-md-5">
                    <div className="flex-fill text-white kg-font-size">
                    <div>店名：{k.storeName}</div>
                    <div>住所：{k.address}</div>
                    <div>アクセス：{k.access}</div>
                    <div>店舗URL：{k.hpUrl}</div>
                    <div>備考：{k.misc}</div>
                    <div>作成日時：{k.createdAt}</div>
                    <div>更新日時：{k.updatedAt}</div>
                    </div>
                    <div className="border border-white text-white p-2 p-sm-3 rounded-pill text-nowrap my-3 my-sm-0 kg-kyugyo-button">
                    {k.isClosed ? '休業中' : '開業中'}
                    </div>
                </li>
                )
            })}
        </ul>
    );
};

export default KyugyoList;