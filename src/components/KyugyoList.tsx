import * as React from 'react';
import { useState, useEffect } from 'react';
import KyugyoPost from './KyugyoPost';
import { KyugyoType } from '../models/interfaces';
import { Route } from 'react-router-dom';
import KyugyoPage from './KyugyoPage';

const KyugyoList = (props) => {
    const kyugyos: KyugyoType[] = props.kyugyos;

    return (
        <>
            <ul className="list-unstyled px-sm-5">
                {kyugyos.map((k, i) => {
                    return (
                        // <KyugyoPost />
                        <li className="h4 border border-white py-4 px-3 px-md-5">
                            <KyugyoPost
                                kyugyo={k}
                            />
                            {/* <Route path={k.id} render={() => <KyugyoPage kyugyo={k}>}/> */}
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default KyugyoList;