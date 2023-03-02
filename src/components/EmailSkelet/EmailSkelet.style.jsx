import { styled } from '@mui/material';
import { theme } from '../../style/style';

export const SkeletTemplate = styled('div')`
  background: ${theme.palette.background.bg600};
  display: flex;
  border-radius: 0.2rem;
  flex-direction: row;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid ${theme.palette.background.bg900};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${theme.palette.background.bg700};
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
  & svg {
    color: rgba(0, 0, 0, 55%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #name {
    color: ${theme.palette.primary.main600};
  }
  #details {
    display: flex;
    gap: 0.75rem;
    justify-content: start;
    align-items: center;
    #img {
      height: 20px;
      width: 20px;
    }
  }
`;

export const MailPreview = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 2;
  color: black;
  margin-left: 2rem;
  background: ${theme.palette.background.bg900};
  border-radius: 8px;
  padding: 0.75rem;
  #name {
    display: flex;
    gap: 0.25rem;
    justify-content: start;
    align-items: center;
    color: ${theme.palette.primary.main};
  }
  #email {
    color: rgba(255, 255, 255, 75%);
  }
`;

export const Active = styled('div')`
  height: 10px;
  width: 10px;
  border-radius: 50%;
`;
