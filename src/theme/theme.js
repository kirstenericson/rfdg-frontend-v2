import { createTheme } from '@mui/material/styles';

// Define custom palette colors
const primaryColor = '#1976d2';
const secondaryColor = '#dc004e';
const errorColor = '#f44336';
const warningColor = '#ff9800';
const infoColor = '#2196f3';
const successColor = '#4caf50';

// Light mode palette
const lightPalette = {
  primary: {
    main: primaryColor,
    light: '#42a5f5',
    dark: '#1565c0',
    darker: '#0d47a1',
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: primaryColor,
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
  },
  secondary: {
    main: secondaryColor,
    light: '#f73378',
    dark: '#c2185b',
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: secondaryColor,
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
  },
  error: {
    main: errorColor,
    light: '#ef5350',
    dark: '#d32f2f',
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
  },
  warning: {
    main: warningColor,
    light: '#ffb74d',
    dark: '#f57c00',
    50: '#fff3e0',
    100: '#ffe0b2',
  },
  info: {
    main: infoColor,
    light: '#64b5f6',
    dark: '#1565c0',
    50: '#e3f2fd',
  },
  success: {
    main: successColor,
    light: '#81c784',
    dark: '#388e3c',
    50: '#e8f5e9',
  },
  background: {
    default: '#f5f7fa',
    paper: '#ffffff',
    light: '#fafbfc',
  },
  text: {
    primary: '#262c34',
    secondary: '#717579',
    disabled: '#919eab',
  },
  divider: '#e9ecef',
  grey: {
    50: '#fafbfc',
    100: '#f5f7fa',
    200: '#ebeef0',
    300: '#dfe3e8',
    400: '#d0d5dd',
    500: '#adb5bd',
    600: '#919eab',
    700: '#637381',
    800: '#454f5b',
    900: '#262c34',
  },
};

// Dark mode palette
const darkPalette = {
  ...lightPalette,
  background: {
    default: '#1a1f36',
    paper: '#212946',
    light: '#2d3561',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b0b8c1',
    disabled: '#717579',
  },
  divider: '#323d52',
};

// Create theme
const theme = createTheme({
  palette: lightPalette,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.6,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      letterSpacing: '0.3px',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: '0.3px',
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.71,
      letterSpacing: '0.3px',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.67,
      letterSpacing: '0.4px',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.08)',
    '0px 4px 8px rgba(0, 0, 0, 0.1)',
    '0px 6px 12px rgba(0, 0, 0, 0.12)',
    '0px 8px 16px rgba(0, 0, 0, 0.14)',
    '0px 10px 20px rgba(0, 0, 0, 0.16)',
    '0px 12px 24px rgba(0, 0, 0, 0.18)',
    '0px 14px 28px rgba(0, 0, 0, 0.2)',
    '0px 16px 32px rgba(0, 0, 0, 0.22)',
    '0px 18px 36px rgba(0, 0, 0, 0.24)',
    '0px 20px 40px rgba(0, 0, 0, 0.26)',
    '0px 22px 44px rgba(0, 0, 0, 0.28)',
    '0px 24px 48px rgba(0, 0, 0, 0.3)',
    '0px 26px 52px rgba(0, 0, 0, 0.32)',
    '0px 28px 56px rgba(0, 0, 0, 0.34)',
    '0px 30px 60px rgba(0, 0, 0, 0.36)',
    '0px 32px 64px rgba(0, 0, 0, 0.38)',
    '0px 34px 68px rgba(0, 0, 0, 0.4)',
    '0px 36px 72px rgba(0, 0, 0, 0.42)',
    '0px 38px 76px rgba(0, 0, 0, 0.44)',
    '0px 40px 80px rgba(0, 0, 0, 0.46)',
    '0px 42px 84px rgba(0, 0, 0, 0.48)',
    '0px 44px 88px rgba(0, 0, 0, 0.5)',
    '0px 46px 92px rgba(0, 0, 0, 0.52)',
    '0px 48px 96px rgba(0, 0, 0, 0.54)',
    '0px 50px 100px rgba(0, 0, 0, 0.56)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 600,
          padding: '10px 24px',
          borderRadius: 8,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1rem',
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.75rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
          borderRadius: 12,
          border: '1px solid rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation0: {
          boxShadow: 'none',
        },
        elevation1: {
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
        },
        elevation2: {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.2s ease-in-out',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: primaryColor,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
              borderColor: primaryColor,
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
