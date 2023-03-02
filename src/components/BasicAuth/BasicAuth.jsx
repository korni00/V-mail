import React, { useState, useContext } from 'react';
import { Button, Typography } from '@mui/material';
import { AuthContext } from '../../context/Auth.context';
import { AuthContainer } from './BasicAuth.style';

import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const BasicAuth = () => {
  const { login, isLogged } = useContext(AuthContext);
  const [inputKey, setInputKey] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passVisible, setIsVisible] = useState(false);
  const formRef = React.useRef(null);

  const handleChangeVisible = () => {
    setIsVisible(!passVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.length > 3 && password.length > 3) {
      login(email, password);
    }
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setIsVisible(false);
    setInputKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      {!isLogged && (
        <AuthContainer>
          <FormControl
            variant='standard'
            id='form'
            ref={formRef}
            onSubmit={handleLogin}
          >
            <Typography variant='h4'>Sign up</Typography>
            <Typography variant='h6'>
              You can enter anything you want here, your data will only be
              stored in LocalStorage.
            </Typography>
            <span id='email' key={`email_${inputKey}`}>
              <Input
                autoComplete='false'
                placeholder='Name'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='input-with-icon-adornment'
                name='email'
                startAdornment={<AccountCircle />}
              />
            </span>
            <span id='password' key={`password_${inputKey}`}>
              <Input
                autoComplete='false'
                type={passVisible ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id='input-with-icon-adornment'
                name='password'
                startAdornment={
                  <>
                    {passVisible ? (
                      <RemoveRedEyeIcon
                        style={{ cursor: 'pointer' }}
                        onClick={handleChangeVisible}
                      />
                    ) : (
                      <VisibilityOffIcon
                        style={{ cursor: 'pointer' }}
                        onClick={handleChangeVisible}
                      />
                    )}
                  </>
                }
              />
            </span>
            <div id='buttons'>
              <Button id='main-button' onClick={handleLogin} type='submit'>
                Sign up
              </Button>
              <Button id='basic-button' type='reset' onClick={handleReset}>
                Reset
              </Button>
            </div>
          </FormControl>
        </AuthContainer>
      )}
    </>
  );
};

export default BasicAuth;
