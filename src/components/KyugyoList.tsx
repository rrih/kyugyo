import * as React from 'react';
import KyugyoPost from './KyugyoPost';
import { useState, useEffect } from 'react';
import axios from "axios";
import { KyugyoType, CommentPostType } from '../models/interfaces';
import apiUrl from '../config';
// import { Route } from 'react-router-dom';
// import KyugyoPage from './KyugyoPage';

const KyugyoList = (props) => {
    const [ kyugyos, setKyugyos ] = useState<KyugyoType[]>(props.kyugyos);
    const [ allComments, setAllComments ] = useState<CommentPostType[]>(props.comments);

    const getKyugyos = async () => {
        const response = await axios.get(apiUrl);
        setKyugyos(response.data);
    };

    const getAllComments = async () => {
        await axios.get('https://kyugyo-back.herokuapp.com/api/comments')
        .then((res) => {
            setAllComments(res.data);
        });
    };

    useEffect(() => {
        getKyugyos();
        getAllComments();
    }, []);

    return (
        <div className="d-flex">
            <ul className="list-unstyled px-sm-5 w-75">
                {kyugyos.map((k, i) => {
                    return (
                        // <KyugyoPost />
                        <li className="h4 border border-white py-4 px-3 px-md-5" key={k.id}>
                            <KyugyoPost
                                kyugyo={k}
                            />
                        </li>
                    )
                })}
            </ul>

            {allComments && (
                <div className="text-white">
                    <h2>新着コメント</h2>
                    <ul className="list-unstyled w-25 text-white">
                        {allComments.map((comment, i) => {
                            return (
                                <li key={`comment-${i}`}>
                                    {comment.text} by {comment.author}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default KyugyoList;