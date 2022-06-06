import React, { useState } from "react";
import { Image, Modal, View } from "react-native";
import { ModalProps } from "../../util/types";
import Button from "../Button";
import { Container, LineSeparator, ModalArea, ModalButtonArea, ModalPressable, ModalText, ModalTextArea } from "./styles";

export default function ModalCandidates({ candidates, showResultBtn, showBlankNullBtn, handleFinishVote }: ModalProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [isBlankVote, setBlankVote] = useState(false);

    function handlePropsFunction() {
        setModalVisible(!modalVisible);
        handleFinishVote!(isBlankVote);
    };

    function handleShowBlankNullVote(isBlankVote: boolean) {
        setBlankVote(isBlankVote);
        setModalVisible(true);
    }

    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }} >
                <ModalArea>
                    <ModalTextArea>
                        {candidates != undefined ?
                            candidates.map(candidate => (
                                <View key={candidate.code}>
                                    <ModalText>
                                        Partido: {candidate.politicalParty}
                                    </ModalText>
                                    <ModalText>
                                        Nome: {candidate.name}
                                    </ModalText>
                                    <ModalText>
                                        Número: {candidate.code}
                                    </ModalText>
                                    <LineSeparator />
                                </View>
                            ))
                            :
                            <ModalText>
                                {showResultBtn && 'Deseja mesmo realizar a apuração dos votos?'}
                                {showBlankNullBtn && isBlankVote && 'Deseja mesmo realizar o voto em BRANCO?'}
                                {showBlankNullBtn && !isBlankVote && 'Deseja mesmo ANULAR o voto?'}
                            </ModalText>
                        }
                    </ModalTextArea>
                    <ModalButtonArea>
                        {(showResultBtn || showBlankNullBtn) &&
                            <Button onPress={() => handlePropsFunction()}>
                                SIM
                            </Button>}
                        <Button onPress={() => setModalVisible(!modalVisible)}>
                            {candidates != undefined ? "FECHAR" : "NÃO"}
                        </Button>
                    </ModalButtonArea>
                </ModalArea>
            </Modal>
            {candidates != undefined &&
                <ModalPressable onPress={() => setModalVisible(true)}>
                    <ModalText>ℹ️ </ModalText>
                    
                </ModalPressable>
                
            }
                

            {showResultBtn &&
                <Button onPress={() => setModalVisible(true)}>
                    Resultado
                </Button>
            }
            {showBlankNullBtn &&
                <>
                    <Button shadow onPress={() => handleShowBlankNullVote(false)}>
                        Anular
                    </Button>
                    <Button shadow onPress={() => handleShowBlankNullVote(true)}>
                        Branco
                    </Button>
                </>
            }
        </Container>
    );
}