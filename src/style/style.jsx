import { createTheme } from '@mui/material';

const globalTheme = {
  palette: {
    primary: {
      main: '#00ffae',
      main500: '#00e69d',
      main600: '#00bf83',
      main700: '#009968',
      main800: '#007d55',
      main900: '#01573b',
    },

    background: {
      bg500: '#131321',
      bg600: '#1d1d32',
      bg700: '#181829',
      bg800: '#131321',
      bg900: '#10101b',
    },

    text: {
      primary: '#EFEFF1',
      secondary: '#85ABBE',
    },

    success: {
      light: '#81c784',
      main: '#66bb6a',
      dark: '#388e3c',
    },

    error: {
      light: '#ff2c2c',
      main: '#fa2c46',
      dark: '#ad1e30',
    },
  },

  shape: {
    borderRadius: '0.5rem',
  },
  spacing: 8,
};

export const theme = createTheme({
  ...globalTheme,
  components: {
    MuiInputLabel: {
      root: {
        color: 'orange',
        '&$focused': {
          border: '2px solid red',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          background: 'rgba(0,0,0,0)',
          color: 'white',
          ':hover': {
            background: 'rgba(255,255,255,0.15)',
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        root: {
          background: `${globalTheme.palette.background.bg700}`,
          borderRadius: '0.2rem',
          color: `${globalTheme.palette.primary.main}`,
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

      
        #main-button {
         background: ${globalTheme.palette.primary.main600};
         color: black;
         font-weight: 600;
         border-radius: 4px;
         &:hover {
          background: ${globalTheme.palette.primary.main600};
          color: white;
          font-weight: 800;
          text-shadow: 0px 0px 3px white;
          }
      }
        #basic-button {
        color: rgba(255,255,255,65%);
        font-weight: 200;
        border-radius: 4px;
        background: ${globalTheme.palette.background.bg700};
        border: 2px solid ${globalTheme.palette.background.bg900};
        &:hover{
        font-weight: 400;
    }
  }

        body {
          font-family: Roboto, Arial, sans-serif;
          background: #0f0f0f;
          overflow: hidden;
          background: ${globalTheme.palette.background.bg500};
        }

        .simplebar-scrollbar {
          &::before {
            background: ${globalTheme.palette.primary.main};
            pointer-events: all;
            border-radius: 0.5rem;
          }
        }

        .css-v4u5dn-MuiInputBase-root-MuiInput-root:after {
          opacity: 0;

        }
        .css-v4u5dn-MuiInputBase-root-MuiInput-root:before {
          opacity: 0;
        }
        .PopoverContent{
          display: flex;
          flex-direction: column;
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          background: ${globalTheme.palette.background.bg900};
          box-shadow: 0px 0px 10px ${globalTheme.palette.background.bg500};
          #closePopover {
            color: rgba(255,255,255,65%);
            cursor: pointer;
            font-weight: 200;
            border-radius: 4px;
            background: ${globalTheme.palette.background.bg700};
            border: 2px solid ${globalTheme.palette.background.bg900};
            &:hover{
            background: ${globalTheme.palette.background.bg500};
            color: #db312e;
            font-weight: 400;
          }
        }

        `,
    },
  },
});
