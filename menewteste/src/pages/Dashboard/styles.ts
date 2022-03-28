import { FlatList, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Provider } from './index';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    flex:1;
`;
export const Header = styled.View`
    padding: 10px 10px 10px;
    background:#28262e;
    flex-direction:row;
    justify-content: space-between;
    alignItems:center;

`;
export const HeaderTitle = styled.Text`
    font-size: 24px;
    color:#f4ede8;
    font-family: 'RobotoSlab-Medium';
    line-height:28px;

`;
export const Title = styled.Text`
    font-weight:bold;
    font-size: 24px;
    color:red;
    font-family: 'RobotoSlab-Medium';

`;
export const List = styled(FlatList as new () => FlatList<Provider>)`
    margin-top:5px;
    margin-bottom:55px
    padding: 0px 15px 15px;
`;

export const ProviderContainer = styled(RectButton)`
    background:#3e3b47;
    border-radius:10px;
    padding: 15px 20px 20px;
    margin-bottom:10px;
    flex-direction:row;
    alignItems: center;
`;
export const ProviderAvatar = styled.Image`
    width:72px;
    height:72px;
    border-radius:36px;
`;
export const ProviderInfo = styled.View`
    flex:1px;
    margin-left:20px;
`;
export const ProviderName = styled.Text`
    font-family:'RobotoSlab-Medium;
    font-size: 20px;
    color:#f4ede8;
`;
export const ProviderDescription = styled.Text`
    font-family:'RobotoSlab-Regular;
    font-size: 15px;
    alignItems:center;
    margin-top:5px;
    color:#999591;
`;

export const BackToSignOut = styled.TouchableOpacity`
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
export const BackToSignOutText  = styled.Text`
    color:#fff;
    font-size:18px;
    font-family:'RobotoSlab-Regular';
    margin-left:16px;

`;