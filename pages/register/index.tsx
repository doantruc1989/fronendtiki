import axios from 'axios';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import router from 'next/router';
import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        axios({
            method: 'post',
            data: {
                email: email,
                name: username,
                password: password
            },
            withCredentials: true,
            url: 'http://localhost:3006/auth/signup'
        }).then(res => { console.log(res) }).catch(err => { console.log(err) })
        router.push('http://localhost:3000')
    }
    

    const handleChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handleChangeUsername = (e: any) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    return (
        <div className='my-10 md:flex items-center justify-center'>

            <form className="flex flex-col gap-4 md:w-2/4">
                <h1 className='text-lg text-center uppercase font-semibold'>Register</h1>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        placeholder="enter your email"
                        required={true}
                        shadow={true}
                        onChange={handleChangeEmail}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="username"
                            value="Your username"
                        />
                    </div>
                    <TextInput
                        id="username2"
                        type="text"
                        placeholder="enter your username"
                        required={true}
                        shadow={true}
                        onChange={handleChangeUsername}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        required={true}
                        shadow={true}
                        onChange={handleChangePassword}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        id="repeat-password"
                        type="password"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree">
                        I agree with the{' '}
                        <a
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button type="submit" onClick={handleSubmit}>
                    Register new account
                </Button>
            </form>
        </div>
    )
}

export default Register