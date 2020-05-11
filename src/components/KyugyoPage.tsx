import * as React from 'react';
import { useState, useEffect, DetailedHTMLProps, HTMLAttributes } from 'react';
import { KyugyoType, CommentPostType } from '../models/interfaces';
import axios from 'axios';
import apiUrl, { commentUrl } from '../config';
import InputKyugyo from './InputKyugyo';
import history from "../history";
// import KyugyoContent from './KyugyoContent';


// 休業POSTをクリックすると遷移する休業1店舗についての詳細ページ
const KyugyoPage = (props) => {
    const [kyugyos, setKyugyos] = useState(props.kyugyos); // 親とリンクしてる
    const [id, setId] = useState(props.match.params.id);
    const [kyugyo, setKyugyo] = useState(kyugyos.find((kyugyo: KyugyoType) => id === kyugyo.id));
    const [isUpdating, setIsUpdating] = useState<Boolean>(false);
    // update用の変数
    const [isClosed, setIsClosed] = useState(kyugyo?.isClosed);
    const [storeName, setStoreName] = useState(kyugyo?.storeName);
    const [address, setAddress] = useState(kyugyo?.address);
    const [access, setAccess] = useState(kyugyo?.access);
    const [hpUrl, setHpUrl] = useState(kyugyo?.hpUrl);
    const [misc, setMisc] = useState(kyugyo?.misc);

    const [comments, setComments] = useState(props.comments.filter((comment: CommentPostType) => comment.kyugyo === kyugyo?._id));
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const HandleDeleteKyugyo = (e) => {
        if (kyugyo !== undefined) {
            axios.delete(`${apiUrl}/${kyugyo.id}`, { data: kyugyo }).then((e) => {
                history.push('/kyugyo-front');
                window.location.reload();
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
        })
        props.getKyugyos();
        e.preventDefault();
    }

    /**
     * この休業情報を編集するボタンが押された時にフォームへと変換するトリガー
     */
    const changeUpdateMode = () => {
        console.log(comments);
        setIsUpdating(!isUpdating);
    }

    const handleCommentSubmit = (e) => {
        const comment = {
            text: text,
            author: author,
            kyugyo: {
                id: id
            }
        }
        axios.post('https://kyugyo-back.herokuapp.com/api/comments/', comment).then((e) => {
            history.push('/kyugyo-front');
            window.location.reload();
        })
        e.preventDefault();
    }

    return (
        <>
            <h2 className="text-white mb-4">店舗情報</h2>
            {(kyugyo !== undefined && !isUpdating) && (
                <>
                    <div className="flex-fill text-white kg-font-size ml-0 ml-sm-4">
                        <div className="kg-kyugyo-button text-center border border-white h3
                                        text-white rounded-pill text-nowrap mx-auto p-2 p-sm-3 my-3 my-sm-5 w-50">
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
            <div className="text-right">
                <button
                    type="button"
                    // onClick={HandleDeleteKyugyo}
                    className="btn btn-outline-danger mt-3"
                    data-toggle="modal"
                    data-target="#kyugyo-delete-modal"
                >
                    この休業情報を削除する
                </button>
                <div className="modal fade" id="kyugyo-delete-modal" role="dialog" aria-labelledby="danger-label" aria-hidden="true" tabIndex={-1} >
                    <div className="modal-dialog text-left" role="document">
                        <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <div className="h3 modal-title text-center font-weight-bold text-danger d-block mx-auto" id="danger-label">注意</div>
                        </div>
                        <div className="modal-body text-danger font-weight-bold">
                            本当に消しますか？<br />
                            この休業情報を削除する場合、休業情報と、書き込まれているコメントが全て消去されます。<br />
                            ※この動作はやり直しができません
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger" onClick={HandleDeleteKyugyo}>削除する</button>
                            <button type="button" className="btn btn-outline-primary" data-dismiss="modal">削除しない</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="comments">
                <div className="inputComment text-white my-5">
                    <div className="text-center">
                        <span>{kyugyo.storeName} の休業情報について<br />コメントを書き込む</span>
                    </div>
                    <form className="border border-white">
                        <div className="p-4">
                            <label>名前</label>
                            <input
                                type="text"
                                name="author"
                                onChange={(e) => { setAuthor(e.target.value) }}
                                className='form-control'
                                placeholder='名無しさん'
                            />
                        </div>
                        <div className="p-4">
                            <label>休業情報に対するコメント</label>
                            <input
                                type="text"
                                name="text"
                                onChange={(e) => { setText(e.target.value) }}
                                className='form-control'
                            />
                        </div>
                    </form>
                    <span className="text-center">
                        <button className="btn btn-outline-light m-3 d-block mx-auto" onClick={handleCommentSubmit}>コメントする</button>
                    </span>
                </div>
                <div>
                    <ul className="list-unstyled">
                        {comments.length === 0 && (
                            <span className="text-white">まだコメントが書かれていないようです。コメントを書いてみましょう</span>
                        )}
                        {comments.length !== 0 && (<div className="text-white">コメント覧</div>)}
                        {comments.map((comment) => {
                            return (
                                <li key={comment.id} className="text-white border border-light p-2 my-2">
                                    {comment.text} (名前:{comment.author !== '' ? comment.author : '名無し'}さん)
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default KyugyoPage;