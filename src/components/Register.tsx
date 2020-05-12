import * as React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="text-white text-center">
            <h1 className='my-5'>新規登録(TBD)</h1>
            <form className='w-75 mx-auto'>
                <input
                    type="text"
                    name="name"
                    className='form-control my-2'
                    placeholder='名前'
                />
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
                <button className='btn btn-outline-info my-5'>アカウントを登録する</button>
            </form>
        </div>
    )
};

export default Register;