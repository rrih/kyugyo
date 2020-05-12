import * as React from 'react';

const About = () => {
    return (
        <div>
            <div className="text-white">
                <h1>休業.comについて</h1>
                <p>
                    休業.comに訪問いただきありがとうございます。当サイトは開発中のため、保存したデータが突然消えることがあります。ご了承ください。
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
                <h2>お問い合わせ先</h2>
                メールアドレス：rsklvあっとicloud.com<br />
                あっと部分を@にしてください
                <h2>サービスに関する改善、修正要望、不具合があったらissueにお願いします</h2>
                <a href='https://github.com/ryohek/kyugyo-front/issues' className="text-white">フロント側(画面上の不具合、4XX系のエラーが出た場合)はこちらから</a><br/>
                <a href='https://github.com/ryohek/kyugyo-back/issues' className="text-white">サーバー側(5XX系のエラーが出た場合)はこちらから</a>
            </div>
        </div>
    );
}

export default About;