import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ModalArea = styled.View`
    margin: 18% 12px;
    background-color: #fff;
    border-radius: 20px;
    padding: 18px;
    align-items: center;
    shadow-opacity: 0.25;
    shadow-radius: 4,;
    elevation: 4;
`

export const ModalTextArea = styled.View`
    width: 100%;
`

export const ModalPressable = styled.Pressable`
    margin-top: 4%;
`

export const ModalText = styled.Text`
    font-size: 18px;
    color: #da2b00;
    text-align: center;
`

export const LineSeparator = styled.Text`
    border-top-color: #D19EF3;
    border-top-width: 1.5px;
    margin-top: 14px;
`

export const ModalButtonArea = styled.View`
    flex-flow: row;
`