import * as React from 'react';
// import { useState, useEffect } from 'react';
import KyugyoPost from './KyugyoPost';
// import { KyugyoType } from '../models/interfaces';
// import { Route } from 'react-router-dom';
// import KyugyoPage from './KyugyoPage';

const KyugyoList = (props) => {
    const { kyugyos, setKyugyos } = props;

    return (
        <>
            <ul className="list-unstyled px-sm-5">
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
        </>
    );
};

export default KyugyoList;