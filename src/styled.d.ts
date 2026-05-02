import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            white: string;
            success: string;
        };
        fonts: {
            regular: string
            bold: string
        }
}
}
