import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import KyugyoList from './KyugyoList';
import { Link } from 'react-router-dom';
import apiUrl from '../config';
import { KyugyoType, CommentPostType } from '../models/interfaces';

const TopPageContainer = (props) => {
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
        <>
            <KyugyoList
                kyugyos={kyugyos}
                allComments={allComments}
            />
        </>
    );
}

export default TopPageContainer;