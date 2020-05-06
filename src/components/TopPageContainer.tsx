import * as React from 'react';
import { useState, useEffect } from 'react';
import InputKyugyo from './InputKyugyo';
import KyugyoList from './KyugyoList';
import { Link } from 'react-router-dom';

const TopPageContainer = (props) => {
    const kyugyos = props.kyugyos;

    return (
        <>
            <Link to='/post' className="text-white">休業情報を投稿する</Link>
            <KyugyoList
                kyugyos={kyugyos}
            />
        </>
    );
}

export default TopPageContainer;