import axiosAll from '../components/other/axiosAll';
import { Alert, Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { HiInformationCircle } from 'react-icons/hi'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axiosAll.post('authentication/log-in',
                JSON.stringify({ email, password }),
            );
            console.log(JSON.stringify(response?.data));
            // const accessToken = response?.data?.access_token;
            // const roles = response?.data?.roles;
            // const id = response?.data?.id;

            localStorage.setItem("user", JSON.stringify(response?.data));
            // setAuth({ username, roles, accessToken, id });
            // setUsername('');
            // setPassword('');
            // navigate(from, { replace: true });
        } catch (err: any) {
            console.log(err)
        }
    }

    const handleChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <Alert
                color="failure"
                icon={HiInformationCircle}
            >
                <span>
                    <span className="font-medium">
                        Info alert!
                    </span>
                    {' '}Change a few things up and try submitting again.
                </span>
            </Alert>
            <div className='my-10 md:flex items-center justify-center'>
                <form className="flex flex-col gap-4 md:w-2/4" onSubmit={handleSubmit}>
                    <h1 className='text-lg text-center uppercase font-semibold'>Login</h1>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@flowbite.com"
                            required={true}
                            // value={email}
                            onChange={handleChangeEmail}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            required={true}
                            // value={password}
                            onChange={handleChangePassword}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </>
    )
}

export default Login