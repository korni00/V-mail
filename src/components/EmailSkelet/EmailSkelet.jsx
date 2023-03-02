import React, { useState } from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import mailList from '../../utils/mailList.json';
import { Avatar, Button } from '@mui/material';
import * as HoverCard from '@radix-ui/react-hover-card';
import { SkeletTemplate, MailPreview, Active } from './EmailSkelet.style';
const EmailSkelet = () => {
  return (
    <>
      <SimpleBar style={{ maxHeight: '75vh' }}>
        {mailList.map(({ name, email, title, picture, isActive }) => (
          <SkeletTemplate>
            <span id='details'>
              <HoverCard.Root>
                <HoverCard.Trigger asChild>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Avatar id='img' key={picture} src={picture} />
                    <span id='name' key={name}>
                      {name}
                    </span>
                  </div>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content sideOffset={2}>
                    <MailPreview>
                      <Avatar id='img' key={picture} src={picture} />

                      <span id='name' key={name}>
                        {name}
                        {isActive ? (
                          <h6>
                            <Active style={{ background: '#32a852' }} />
                          </h6>
                        ) : (
                          <Active style={{ background: '#c23636' }} />
                        )}
                      </span>
                      <span id='email' key={email}>
                        {email}
                      </span>
                    </MailPreview>

                    <HoverCard.Arrow className='HoverCardArrow' />
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
              <KeyboardArrowRightIcon />
            </span>
            <span id='title' key={title}>
              {title}
            </span>
          </SkeletTemplate>
        ))}
      </SimpleBar>
    </>
  );
};

export default EmailSkelet;
