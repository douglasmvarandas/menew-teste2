import React from 'react'
import { Wrapper, Container } from './styles'


type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    children?:any
    error?: any
}

const Input:React.FC<Props> = ({error, children,...props}:Props)=>{
    
    return(
        <Wrapper>
        <Container>
            {children && children}
        <input {...props}
        name={props.name} 
        type={props.type}
        onChange={props.onChange}
        placeholder={props.placeholder}
        />
        </Container>
        {error && (<p>{error}</p>)}
        </Wrapper>
    )
}

export default Input;