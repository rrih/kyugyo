import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import KyugyoList from './KyugyoList';
import { Link } from 'react-router-dom';
import apiUrl from '../config';
import { KyugyoType } from '../models/interfaces';

const TopPageContainer = (props) => {
    const [ kyugyos, setKyugyos ] = useState<KyugyoType[]>([]);

    const getKyugyos = async () => {
        const response = await axios.get(apiUrl);
        setKyugyos(response.data);
    };

    useEffect(() => {
        getKyugyos();
    }, []);

    return (
        <>
            <Link to='/kyugyo-front/post' className="text-white">休業情報を投稿する</Link>
            <KyugyoList
                kyugyos={kyugyos}
            />
        </>
    );
}

export default TopPageContainer;