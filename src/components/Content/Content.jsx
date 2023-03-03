import React, { useContext } from 'react';
import { Button, Typography, Tooltip, Avatar } from '@mui/material';
import BasicAuth from '../BasicAuth/BasicAuth';
import EmailSkelet from '../EmailSkelet/EmailSkelet';
import { AuthContext } from '../../context/Auth.context';
import { ContentContainer, MailsContainer } from './Content.style';
import SendIcon from '@mui/icons-material/Send';

const Content = () => {
  const { isLogged, user, image } = useContext(AuthContext);

  return (
    <>
      {!isLogged && <BasicAuth />}
      <ContentContainer>
        {isLogged && (
          <MailsContainer>
            <span
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'start',
                alignItems: 'center',
              }}
            >
              <Tooltip title={user.email} placement='top-start'>
                <Typography variant='span'>
                  <Avatar
                    alt='avatar'
                    id='picture_preview'
                    src={image}
                  ></Avatar>
                </Typography>
              </Tooltip>

              <Button id='main-button'>
                <SendIcon />
                Send Mail
              </Button>
            </span>
            <EmailSkelet />
          </MailsContainer>
        )}
      </ContentContainer>
    </>
  );
};

export default Content;
