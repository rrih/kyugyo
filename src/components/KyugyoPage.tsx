import * as React from 'react';
// import { useState, useEffect } from 'react';
import { KyugyoType } from '../models/interfaces';
import axios from 'axios';
import apiUrl from '../config';
import { useState } from 'react';
import InputKyugyo from './InputKyugyo';
import history from "../history";
// import KyugyoContent from './KyugyoContent';


// 休業POSTをクリックすると遷移する休業1店舗についての詳細ページ
const KyugyoPage = (props) => {
    const [kyugyos, setKyugyos] = useState(props.kyugyos); // 親とリンクしてる
    const id = props.match.params.id;
    const [kyugyo, setKyugyo] = useState<KyugyoType>(kyugyos.find((kyugyo: KyugyoType) => id === kyugyo.id));
    const [isUpdating, setIsUpdating] = useState<Boolean>(false);
    // update用の変数
    const [isClosed, setIsClosed] = useState(kyugyo?.isClosed);
    const [storeName, setStoreName] = useState(kyugyo?.storeName);
    const [address, setAddress] = useState(kyugyo?.address);
    const [access, setAccess] = useState(kyugyo?.access);
    const [hpUrl, setHpUrl] = useState(kyugyo?.hpUrl);
    const [misc, setMisc] = useState(kyugyo?.misc);

    const HandleDeleteKyugyo = (e) => {
        if (kyugyo !== undefined) {
            axios.delete(`${apiUrl}/${kyugyo.id}`, { data: kyugyo }).then((e) => {
                history.push('/kyugyo-front');
            })
        }
        e.preventDefault();
    }

    // 休業情報を更新し、更新し終わった状態にする
    const HandleUpdateKyugyoAndSetUpdatedMode = (e) => {
        const updateKyugyos = {
            id: id,
            storeName: storeName,
            isClosed: isClosed,
            misc: misc,
            address: address,
            access: access,
            hpUrl: hpUrl
        }
        axios.put(`${apiUrl}/${id}`, updateKyugyos)
        .then((res) => {
            setIsUpdating(!isUpdating);
            setKyugyo(res.data);
            // setKyugyos(res.data);
            
            // 一旦トップへ飛ばすことにする            
            // const url = `/kyugyo-front/kyugyo/${id}`;
            // history.push(url);
            // history.push('/kyugyo-front');
        })
        props.getKyugyos();
        e.preventDefault();
    }

    /**
     * この休業情報を編集するボタンが押された時にフォームへと変換するトリガー
     */
    const changeUpdateMode = () => {
        setIsUpdating(!isUpdating);
    }
    return (
        <>
            <h2 className="text-white mb-4">店舗情報</h2>
            {(kyugyo !== undefined && !isUpdating) && (
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
                </>
            )}
            {(kyugyo !== undefined && isUpdating) && (
                <>
                    <div className="flex-fill text-white kg-font-size ml-4">
                        <h2>休業情報の更新</h2>
                        <form className="border border-white px-4 py-5 rounded form-group">
                            <div>
                                <label className="text-white">休業ステータス</label>
                                <input
                                    type="checkbox"
                                    name="isClosed"
                                    onClick={(e) => {setIsClosed(!isClosed)}}
                                    defaultChecked
                                />
                            </div>
                            <div className="p-4">
                                <label className="text-white">店の名前</label>
                                <input
                                    type="text"
                                    name="storeName"
                                    onChange={(e) => { setStoreName(e.target.value) }}
                                    className='form-control'
                                    defaultValue={storeName}
                                />
                            </div>
                            <div className="p-4">
                                <label className="text-white">住所</label>
                                <input
                                    type="text"
                                    name="address"
                                    onChange={(e) => { setAddress(e.target.value) }}
                                    className='form-control'
                                    defaultValue={address}
                                />
                            </div>
                            <div className="p-4">
                                <label className="text-white">アクセス</label>
                                <input 
                                    type="text"
                                    name="access"
                                    onChange={(e) => { setAccess(e.target.value) }}
                                    className='form-control'
                                    defaultValue={access}
                                />
                            </div>
                            <div className="p-4">
                                <label className="text-white">ホームページ等のURL</label>
                                <input 
                                    type="text"
                                    name="hpUrl"
                                    onChange={(e) => { setHpUrl(e.target.value) }}
                                    className='form-control'
                                    defaultValue={hpUrl}
                                />
                            </div>
                            <div className="p-4">
                                <label  className="text-white">備考</label>
                                <input 
                                    type="text"
                                    name="misc"
                                    onChange={(e) => { setMisc(e.target.value) }}
                                    className='form-control'
                                    defaultValue={misc}
                                />
                            </div>
                        </form>
                    </div>
                </>
            )}
            {!isUpdating && (<div className="text-right"><button onClick={changeUpdateMode} className="btn btn-outline-info mt-3">この休業情報を編集する</button></div>)}
            {isUpdating && (<div className="text-right"><button onClick={HandleUpdateKyugyoAndSetUpdatedMode} className="btn btn-outline-primary mt-3">この内容で編集完了する</button></div>)}
            {/* TODO 本当に削除するか確認モーダル追加 */}
            <div className="text-right"><button onClick={HandleDeleteKyugyo} className="btn btn-outline-danger mt-3">この休業情報を削除する</button></div>
        </>
    );
}

export default KyugyoPage;