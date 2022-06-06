import styled from "styled-components/native";
import AnimatedLottieView from "lottie-react-native";

export const Container = styled.SafeAreaView`
    height: 100%;
    width: 100%;
    background-color: #1D1D1D;
    align-items: center;
`;

export const Header = styled.View`
    margin: 10% 0px;
`;

export const TitleText = styled.Text`
    text-align: center;
    font-size: 20px;
    color: #a0ddcf;
`;

export const LoadingText = styled.Text`
    text-align: center;
    font-size: 28px;
    color: #a0ddcf;
    `;

export const LottieFile = styled(AnimatedLottieView)`
    height: 60%;
    margin-top: 14%;
    margin-left: 12%;
    margin-bottom: -26%;
`;