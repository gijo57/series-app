import React, { useState } from 'react'

const LoginPage = ({ login }) => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <form id='seriesform' onSubmit={login(username, password)}>
                Username: <input id='title' type='text' name='title' />
                Password: <input id='title' type='text' name='title' />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default LoginPage