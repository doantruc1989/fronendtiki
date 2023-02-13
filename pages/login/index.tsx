import axiosAll from '../components/other/axiosAll';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [remember, setRemember] = useState(false)
    const [error, setError] = useState()

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axiosAll.post('/auth/signin',
                JSON.stringify({ email, password, remember }),
            );
            console.log(JSON.stringify(response?.data))
            localStorage.setItem("user", JSON.stringify(response?.data));
            setSuccess(true);

        } catch (err: any) {
            setError(err);
            if(err){
                toast(`${err?.response.data.message}. Please try again`, {
                    position: toast.POSITION.TOP_RIGHT,
                    type: toast.TYPE.ERROR,
                    className: "toast-message",
                  });}
        }
    }

    const handleChangeEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const handleclick = () => {
        if(error){
        toast(error?.response.data.message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            type: toast.TYPE.SUCCESS,
            className: "toast-message",
          });}
    }

    return (
        <React.Fragment>
            <ToastContainer />
            {success ? 
            (<section className="text-lg text-center uppercase font-semibold">
            <h1>Success!</h1>
            <p>
              <Link href="/">Back to Home page</Link>
            </p>
          </section>) :
            (<div className='my-10 md:flex items-center justify-center w-11/12 mx-auto'>
                <form className="flex pt-10 flex-col gap-4 md:w-2/4" onSubmit={handleSubmit}>
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
                        <Checkbox id="remember" onClick={()=> {setRemember(!remember)}}/>
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                    <div className='flex items-center justify-center gap-4'>
                    <p>Don’t have an account?</p>
                    <Link href={'/register'} className="font-medium text-blue-700">Register here</Link>
                </div>
                </form>
                
            </div>)}
        </React.Fragment>
    )
}

export default Login