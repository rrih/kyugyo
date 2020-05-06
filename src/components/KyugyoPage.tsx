import * as React from 'react';
import { useState, useEffect } from 'react';
import { KyugyoType } from '../models/interfaces';
import axios from 'axios';
import apiUrl from '../config';
import history from "../history";

// 休業POSTをクリックすると遷移する休業1店舗についての詳細ページ
const KyugyoPage = (props) => {
    const kyugyos: KyugyoType[] = props.kyugyos;
    const id = props.match.params.id;
    const kyugyo: KyugyoType | undefined = kyugyos.find((kyugyo: KyugyoType) => id === kyugyo.id);

    const HandleDeleteKyugyo = (e) => {
        if (kyugyo !== undefined) {
            axios.delete(`${apiUrl}/${kyugyo.id}`, { data: kyugyo }).then((e) => {
                history.push('/kyugyo-front');
            })
        }
        e.preventDefault();
    }
    return (
        <>
            <h2 className="text-white mb-4">店舗情報</h2>
            {kyugyo !== undefined && (
                <>
                    <div className="flex-fill text-white kg-font-size ml-4">
                        <div className="kg-kyugyo-button text-center border border-white h3
                                        text-white rounded-pill text-nowrap mx-auto p-2 p-sm-3 my-3 my-sm-5 w-25">
                            {kyugyo.isClosed ? '休業中' : '開業中'}
                        </div>
                        <div className="h3 border border-white mb-3 py-4 px-5">店名：{kyugyo.storeName}</div>
                        <div className="h3 border border-white mb-3 py-4 px-5">住所：{kyugyo.address}</div>
                        <div className="border border-white mb-3 py-4 px-5">
                            アクセス：{kyugyo.access}
                        </div>
                        <div className="border border-white mb-3 py-4 px-5">
                            <h3>店舗URL</h3>
                            {kyugyo.hpUrl}
                        </div>
                        <div className="kg-misc-box border border-white mb-3 pt-4 pb-5 px-5">
                            <h3>備考</h3>
                            {kyugyo.misc}
                        </div>
                        <div className="border border-white py-4 px-5">
                            <div>更新日時：{kyugyo.updatedAt}</div>
                            <div>作成日時：{kyugyo.createdAt}</div>
                        </div>
                    </div>
                    {/* TODO 本当に削除するか確認モーダル追加 */}
                    <div className="text-right"><button onClick={HandleDeleteKyugyo} className="btn btn-outline-danger mt-3">この休業情報を削除する</button></div>
                </>
            )}
        </>
    );
}

export default KyugyoPage;