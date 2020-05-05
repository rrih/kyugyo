import * as React from 'react';
import { useState, useEffect } from 'react';
import { KyugyoType } from '../models/interfaces';

// 休業POSTをクリックすると遷移する休業1店舗についての詳細ページ
const KyugyoPage = (props) => {
    const kyugyos: KyugyoType[] = props.kyugyos;
    const id = props.match.params.id;
    const kyugyo: KyugyoType | undefined = kyugyos.find((kyugyo: KyugyoType) => id === kyugyo.id);

    return (
        <>
            <div className="text-white">{id} kyugyo page</div>
            {kyugyo !== undefined && (
                <div className="flex-fill text-white kg-font-size">
                <div>店名：{kyugyo.storeName}</div>
                <div>住所：{kyugyo.address}</div>
                <div>店舗URL：{kyugyo.hpUrl}</div>
                <div>更新日時：{kyugyo.updatedAt}</div>
                <div className="border border-white text-white p-2 p-sm-3 rounded-pill text-nowrap my-3 my-sm-0 kg-kyugyo-button">
                    {kyugyo.isClosed ? '休業中' : '開業中'}
                </div>
            </div>
            )}
        </>
    );
}

export default KyugyoPage;