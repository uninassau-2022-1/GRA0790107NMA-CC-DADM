import AnimatedLottieView from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "../../../node_modules/styled-components/native";

export const ContainerScroll = styled(ScrollView)`
    height: 100%;
    background-color: #a0ddcf;
`;

export const Container = styled.View`
    align-items: center;
    margin-top: 48px;
`;

export const LottieFile = styled(AnimatedLottieView)`
    height: 780px;
    position: absolute;
`;

export const ResultTitle = styled.Text`
    font-size: 32px;
    margin-top: 50%;
    text-align: center;
    color: #a0ddcf;
`