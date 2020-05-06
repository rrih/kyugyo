import * as React from 'react';

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
                <h2>現在開発中</h2>
                <h3><a href='https://github.com/ryohek/kyugyo-front' className='text-white text-decoration-none'>フロントエンド</a></h3>
                <h4>使用技術</h4>
                <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Bootstrap</li>
                    <li>Scss</li>
                    <li>GitHub Pages</li>
                </ul>
                <h3><a href='https://github.com/ryohek/kyugyo-back' className='text-white text-decoration-none'>サーバーサイド</a></h3>
                <h4>使用技術</h4>
                <ul>
                    <li>Nest.js</li>
                    <li>TypeScript</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Heroku</li>
                </ul>
                <h2>今後開発される機能リスト</h2>
                TBD
                <ul>
                    <li>休業情報の編集機能</li>
                    <li>ユーザー登録機能</li>
                    <li>コメント機能</li>
                    <li>コメントに対する返信機能</li>
                    <li>削除ボタンの確認モーダル追加</li>
                    <li>全体的なデザイン改修</li>
                    <li>地域ごとのタグ追加</li>
                    <li>休業期間入力機能</li>
                    <li>休業情報に入れる情報の全体的な見直し</li>
                    <li>投稿機能のモーダル化(やるかどうか不明)</li>
                </ul>
                <h2>お問い合わせ先</h2>
                メールアドレス：rsklvあっとicloud.com<br />
                あっと部分を@にしてください
            </div>
        </div>
    );
}

export default About;