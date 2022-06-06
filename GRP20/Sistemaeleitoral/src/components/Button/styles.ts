import styled from "../../../node_modules/styled-components/native";

export const Container = styled.TouchableOpacity`
    height: 52px;
    width: 142px;
    background: ${props => props.shadow ? "red" : "green"};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    margin: 5% 4% 0px 4%;
`;

export const ButtonText = styled.Text`
    color: #f7f7f7;
    font-size: 22px;
`;