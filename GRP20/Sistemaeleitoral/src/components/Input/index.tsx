import React from "react";
import { SetStateAction, useState } from "react";
import { Keyboard } from "react-native";
import { InputProps } from "../../util/types";
import Button from "../Button";
import { HeaderTitle, InputVote, Container } from "./styles";

export default function Input({ headerText,  handleVote}: InputProps) {
    const [candidateCode, setCandidateCode] = useState<number>();

    function performVote() {
        Keyboard.dismiss();
        setCandidateCode(undefined);

        handleVote(candidateCode, false);
    }

    return (
        <Container>
            <HeaderTitle>
                {headerText}
            </HeaderTitle>
            <InputVote
                keyboardType="numeric"
                maxLength={2}
                value={candidateCode}
                onChangeText={(value: SetStateAction<number | undefined>) => setCandidateCode(value)}
            />
            <Button onPress={() => performVote()}>
                Confirmar
            </Button>
        </Container>
    );
}