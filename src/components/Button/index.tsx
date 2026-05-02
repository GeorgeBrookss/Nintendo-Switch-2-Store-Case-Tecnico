import { ButtonContainer } from './styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
    return <ButtonContainer {...props}>{children}</ButtonContainer>
}