import { styled } from '@mui/material';
import { theme } from '../../style/style';

export const HeaderContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 3rem 0.5rem 4rem;
  background: ${theme.palette.background.bg700};
  box-shadow: 0px 0px 10px ${theme.palette.background.bg900};
  @media (max-width: 900px) {
  padding: 0.5rem 1rem 0.5rem 2rem;
  }

  #flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    & h1 {
      color: ${theme.palette.primary.main};
    }
    & h4 {
      color: white;
    }
    & button {
      & svg {
        color: ${theme.palette.primary.main};
      }
    }
  }

  #auth_stack {
    display: flex;
    flex-direction: column;
    & button {
      margin-bottom: 0.25rem;
      height: 30px;
      &:hover {
        & svg {
          transition: 0.4s ease-in-out;
          rotate: 360deg;
        }
      }
      & svg {
        color: black;
        transform: scale(75%);
        margin-right: 0.25rem;
      }
    }
  }
  }
  #auth_shortcut {
    padding: 0rem 1rem;
    border-radius: 0.2rem;
    gap: 0.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h5 {
      font-weight: 400;
      font-size: 14px;
    }
  }
  
`;

export const ProfileUpdate = styled('div')`
  display: flex;
  width: 150px;
  justify-content: space-between;
  padding: 0.25rem 0.75rem;
  align-items: center;
  background: ${theme.palette.background.bg700};
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: 2px solid ${theme.palette.background.bg900};
  &:hover {
    background: ${theme.palette.background.bg500};
    & svg {
      color: ${theme.palette.primary.main};
    }
  }
`;
