import * as React from 'react';
import axios from 'axios';
import apiUrl from '../config';
// import { KyugyoType } from '../models/interfaces';
// import KyugyoPage from './KyugyoPage';
import { useState } from 'react';
// import { Redirect, Link } from 'react-router-dom';
import history from "../history";

// input formを設置
const InputKyugyo = () => {
    const [storeName, setStoreName] = useState('');
    const [address, setAddress] = useState('');
    const [access, setAccess] = useState('');
    const [hpUrl, setHpUrl] = useState('');
    const [misc, setMisc] = useState('');

    // storeName address access hpUrl misc が入力され、postボタンが押されて発火したら実行する
    // state の変化を受け、apiを叩くメソッド
    const handleSubmit = (e) => {
        const kyugyos = {
            storeName: storeName,
            misc: misc,
            address: address,
            access: access,
            hpUrl: hpUrl
        }
        axios.post(apiUrl, kyugyos).then((e) => {
            history.push('/');
            window.location.reload();
        })
        e.preventDefault();
    }

    // TODO 後で共通化
    return (
        <div className="pb-5">
            <div className="text-white h3 mb-4">休業情報の入力</div>
            <form className="border border-white px-4 py-5 rounded form-group">
                <div className="p-4">
                    <label className="text-white">店の名前</label>
                    <input
                        type="text"
                        name="storeName"
                        onChange={(e) => { setStoreName(e.target.value) }}
                        className='form-control'
                        placeholder='休業中の店舗名を入力'
                    />
                </div>
                <div className="p-4">
                    <label className="text-white">住所</label>
                    <input
                      type="text"
                      name="address"
                      onChange={(e) => { setAddress(e.target.value) }}
                      className='form-control'
                      placeholder='休業中の店舗の住所を入力'
                    />
                </div>
                <div className="p-4">
                    <label className="text-white">アクセス</label>
                    <input 
                      type="text"
                      name="access"
                      onChange={(e) => { setAccess(e.target.value) }}
                      className='form-control'
                      placeholder='休業中の店舗のアクセスを入力'
                    />
                </div>
                <div className="p-4">
                    <label className="text-white">ホームページ等のURL</label>
                    <input 
                      type="text"
                      name="hpUrl"
                      onChange={(e) => { setHpUrl(e.target.value) }}
                      className='form-control'
                      placeholder='休業中の店舗に関するホームページ等のURLを入力'
                    />
                </div>
                <div className="p-4">
                    <label  className="text-white">備考</label>
                    <input 
                      type="text"
                      name="misc"
                      onChange={(e) => { setMisc(e.target.value) }}
                      className='form-control'
                      placeholder='備考欄'
                    />
                </div>
                <div className="text-center">
                    <button onClick={handleSubmit} className="btn btn-outline-light">投稿する</button>
                </div>
            </form>
        </div>        
    )
}

export default InputKyugyo;