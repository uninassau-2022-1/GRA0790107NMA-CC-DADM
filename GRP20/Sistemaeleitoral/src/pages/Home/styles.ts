import styled from "styled-components/native";
import AnimatedLottieView from "lottie-react-native";

export const Container = styled.SafeAreaView`
    height: 100%;
    width: 100%;
    background-color: #1D1D1D;
    align-items: center;
`;

export const LottieFile = styled(AnimatedLottieView)`
    height: 50%;
    margin-left: 15%;
`;

export const TextVote = styled.Text`
    font-size: 36px;
    margin-top: -52%;
    color: #a0ddcf;
    align-items: stretch;
`;