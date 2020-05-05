import * as React from 'react';
import { useState, useEffect } from 'react';
import InputKyugyo from './InputKyugyo';
import KyugyoList from './KyugyoList';

const TopPageContainer = (props) => {
    const kyugyos = props.kyugyos;

    return (
        <>
            <InputKyugyo />
            <KyugyoList
                kyugyos={kyugyos}
            />
        </>
    );
}

export default TopPageContainer;