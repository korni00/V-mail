import { styled } from '@mui/material';
import { theme } from '../../style/style';

export const ContentContainer = styled('div')`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: start;
  #picture_preview {
    transition: 0.3s ease-in-out;
    margin-top: -8px;
    &:hover {
      transform: scale(115%);
    }
  }
`;

export const MailsContainer = styled('div')`
  width: 100%;
  padding: 0.75rem 2rem;
  margin-top: 4vh;
  background: #010101;
  display: flex;
  flex-direction: column;
  background: ${theme.palette.background.bg900};
  border-radius: 8px;
  & span {
    & button {
      margin-bottom: 0.5rem;
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
`;
