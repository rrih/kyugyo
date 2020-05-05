import * as React from 'react';
import { useState, useEffect } from 'react';

// 休業POSTをクリックすると遷移する休業1店舗についての詳細ページ
const About = () => {
    return (
        <div>
            <div className="text-white">
                <h1>休業.comについて</h1>
                <p>
                    休業.com(以下、当サイト)に訪問いただきありがとうございます。当サイトは開発中のため、また開発者が未熟なため様々な脆弱性及び不便さを多く抱えています。
                    そのためデータ入力の場面においてはダミーデータのようなものを使用ください。仮に情報漏洩などが発生して際に生じた被害等に対する責任は置いかねます。
                    ご了承ください。
                </p>
            </div>
        </div>
    );
}

export default About;