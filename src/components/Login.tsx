import * as React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="text-white text-center">
            <h1 className='my-5'>ログイン (TBD)</h1>
            <form className='w-75 mx-auto'>
                <input
                    type="text"
                    name="mailAddress"
                    className='form-control my-2'
                    placeholder='メールアドレス'
                />
                <input
                    type="text"
                    name='password'
                    className='form-control my-2'
                    placeholder='パスワード'
                />
                <button className='btn btn-outline-info my-5'>ログインする</button>
            </form>
            <Link to='/kyugyo/register' className='text-white text-decoration-none'>新規登録はこちらから</Link>
        </div>
    )
};

export default Login;