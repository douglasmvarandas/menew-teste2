import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    alignItems:center;
    flex:1;
    justify-content:center;
    padding:0 30px ${Platform.OS === 'android' ? 145 : 40}px;
`;
export const Title = styled.Text`
    font-size: 24px;
    color:#f4ede8;
    font-family: 'RobotoSlab-Medium';
    margin: 10px 0 14px;

`;
export const BackToSignIn = styled.TouchableOpacity`
    position:absolute;
    left:0;
    bottom:0;
    right:0;
    background:#312e38;
    border-top-width: 1px;
    border-color:#232129;
    padding: 16px 0;
    justify-content:center;
    alignItems:center;
    flex-direction:row;
`;
export const BackToSignInText  = styled.Text`
    color:#fff;
    font-size:18px;
    font-family:'RobotoSlab-Regular';
    margin-left:16px;

`;