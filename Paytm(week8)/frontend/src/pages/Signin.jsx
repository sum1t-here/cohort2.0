/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  BottomWarning,
  Button,
  Heading,
  InputBox,
  SubHeading,
} from '../components';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={'Sign in'} />
          <SubHeading label={'Enter your credentials to access your account'} />
          <InputBox
            onchange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder='harkirat@gmail.com'
            label={'Email'}
          />
          <InputBox
            onchange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='123456'
            label={'Password'}
          />
          <div className='pt-4'>
            <Button label={'Sign in'} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={'Sign up'}
            to={'/signup'}
          />
        </div>
      </div>
    </div>
  );
}

export default Signin;
