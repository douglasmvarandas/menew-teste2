import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #FFF;
`;

export const Button = styled.TouchableOpacity`
    padding: 15px;
    background: #567DF4;
    border-radius: 10px; 
    margin-bottom: 10px;
`;

export const TextButton = styled.Text`
    font-family: Roboto_400Regular;
    font-size: 16px;
    color: #FFF;
    flex: none;
    align-self: center;
`;


export const Input = styled.TextInput`
    background: #FFFFFF;
    border: 1px solid #EEF2FE;
    border-radius: 10px; 
    font-family: Roboto_400Regular;
    color: #000;
    padding: 10px;
    margin-bottom: 10px;
`;

export const InputGroup = styled.View`
    padding: 12px 0px;
    position: absolute;
    left: 7.47%;
    right: 7.47%;
    top: 55.17%;
`;