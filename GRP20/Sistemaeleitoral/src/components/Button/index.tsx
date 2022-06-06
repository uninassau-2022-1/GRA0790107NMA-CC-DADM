import React from "react";
import { ButtonProps } from "../../util/types";
import { Container, ButtonText } from "./styles";

export default function Button({ children, shadow, ...rest }: ButtonProps) {
    return (
        <Container shadow={shadow} {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
    );
}