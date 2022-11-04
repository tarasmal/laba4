import React, {useState} from 'react';
import Input from "./Input";
import Button from "./Button";

const dateRegexp = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/

const MainPage = () => {
    const [date, setDate] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (!date || !password || !confirmPassword) return alert('Please, fill all fields!')
        if (!date.match(dateRegexp)) return alert('The date value you have written in the field is incorrect! Please, try again')
        if (password !== confirmPassword) return alert('Confirm password is not equal to password. Please enter it`s value correct!')
        alert(`Date: ${date}\n Password: ${password}\n Confirm password: ${confirmPassword}`)
    }
    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',

        }}>
            <form onSubmit={onSubmitHandler} >
                <div style={{display: 'flex', flexDirection: 'column', rowGap: '5px'}}>
                    <Input value={date} setValue={setDate} isRequired isDate/>
                    <Input type={'password'} value={password} setValue={setPassword} isRequired placeholder={'Password'}/>
                    <Input type={'password'} value={confirmPassword} setValue={setConfirmPassword} isRequired placeholder={'Confirm password'}/>
                    <Button>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MainPage;
