import React, { useContext } from 'react';
import { Avatar, Button, Tooltip } from '@mui/material';
import { HeaderContainer, ProfileUpdate } from './Header.style';
import { AuthContext } from '../../context/Auth.context';
import * as Popover from '@radix-ui/react-popover';
//ikony
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  const { image, setImage } = useContext(AuthContext);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <HeaderContainer>
        <span id='flex-row'>
          <h1>V</h1>
          <h4>MAIL</h4>
        </span>
        <span id='flex-row'>
          <AuthContext.Consumer>
            {({ user, logout }) => (
              <>
                {user && (
                  <div id='auth_shortcut'>
                    <Popover.Root>
                      <Popover.Trigger asChild>
                        <Tooltip
                          placement='left'
                          title='Change your account settings.'
                        >
                          <Avatar
                            sx={{ width: 48, height: 48, cursor: 'pointer' }}
                            alt='Avatar'
                            src={image}
                          />
                        </Tooltip>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content
                          className='PopoverContent'
                          sideOffset={5}
                        >
                          <label htmlFor='file-upload'>
                            <ProfileUpdate
                              type='file'
                              onChange={handleImageChange}
                            >
                              <input
                                style={{ display: 'none' }}
                                type='file'
                                id='file-upload'
                                onChange={handleImageChange}
                              />
                              <EditIcon />
                              <h6>Change your avatar</h6>
                            </ProfileUpdate>
                          </label>

                          <Popover.Close id='closePopover'>
                            <CloseIcon />
                          </Popover.Close>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                    <span id='auth_stack'>
                      <h5>{user.email}</h5>
                      <Button id='main-button' onClick={logout}>
                        Wyloguj
                      </Button>
                    </span>
                  </div>
                )}
              </>
            )}
          </AuthContext.Consumer>
        </span>
      </HeaderContainer>
    </>
  );
};

export default Header;
