import { styled } from '@mui/material';
import { theme } from '../../style/style';

export const AuthContainer = styled('div')`
  width: 100%;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #form {
    overflow: hidden;
    background: ${theme.palette.background.bg700};
    display: flex;
    flex-direction: column;
    padding: 4rem 4rem;
    justify-content: space-between;
    align-items: start;
    border: 2px solid ${theme.palette.background.bg800};
    margin-top: 1rem;
    border-radius: 0.5rem;
    transition: 0.2s all ease-in-out;
    &:hover {
      box-shadow: 0px 10px 20px ${theme.palette.background.bg900};
      & h6 {
        color: ${theme.palette.primary.main};
        transition: 0.2s all ease-in-out;
      }
    }
    & h4 {
      color: white;
    }
    & h6 {
      color: rgba(0, 0, 0, 35%);
    }
  }
  #email,
  #password {
    margin-top: 0.35rem;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 25%);
    padding: 0.25rem;
    border-radius: 4px;
    display: flex;
    & div {
      width: 100%;
      & input {
        width: 100%;
      }
    }
  }
  #buttons {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: end;
  }
  & button {
    padding: 0.45rem 1.35rem;
  }
  & svg {
    color: ${theme.palette.primary.main600};
    margin-right: 1rem;
    margin-left: 0.25rem;
    &:hover {
      color: ${theme.palette.primary.main};
    }
  }
  #input-with-icon-adornment {
    color: ${theme.palette.primary.main900};
  }
`;
