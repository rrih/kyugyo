import * as React from 'react';

const Login = () => {
    return (
        <div className="text-white text-center">
            <h1 className='my-5'>ログイン</h1>
            <form className='w-75 mx-auto'>
                {/* <label>メールアドレス</label> */}
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
                <button className='btn btn-outline-primary my-5'>ログインする</button>
            </form>
        </div>
    )
};

export default Login;