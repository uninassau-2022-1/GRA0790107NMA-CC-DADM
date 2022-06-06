import React, { useEffect, useState } from "react";
import { Alert, Image } from "react-native";
import loadingAnimation from "../../assets/loadingAnimation.json";
import GoBackArrow from "../../components/GoBackArrow";
import Input from "../../components/Input";
import ModalCandidates from "../../components/ModalCandidates";
import { Candidate, EnumRole } from "../../util/types";
import { Container, Header, LoadingText, LottieFile, TitleText } from "./styles";
import {
    firstElement, getBlankOrNullCandidate, getEnumRoleElements, getUriCandidates,
    handleNewVote, handleUpdateVotes, isSameRole, validCandidate
} from "../../util/utils";

export default function Vote({ route, navigation }: any) {
    const enumRoles: EnumRole[] = getEnumRoleElements();
    const isNewVote = !route.params.isContainVotes;
    const [index, setIndex] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [votedList, setVotedList] = useState<Candidate[]>([]);
    const [candidatesList, setCandidatesList] = useState<Candidate[]>([]);

    useEffect(() => {
        let isMounted = true;

        setInterval(() => {
            fetch(getUriCandidates())
                .then(res => {
                    res.json().then(json => isMounted ? setCandidatesList(json.candidates) : false);
                })
                .catch(() => Alert.alert("Erro ao buscar dados dos candidatos!❌"))
                .finally(() => isMounted ? setLoading(false) : false);
        }, 4200);

        return () => {
            isMounted = false;
        }
    }, []);

    async function handleVote(candidateCode: number, isNullBlankVote: boolean) {
        const votedCandidate = firstElement(candidatesList.filter(candidate => candidate.code == candidateCode));
        const isLastIndex = enumRoles.length == index + 1;

        if (!validCandidate(votedCandidate, enumRoles[index], isNullBlankVote)) {
            return;
        }

        votedCandidate.votesNumber = 1;

        if (isLastIndex) {
            votedList.push(votedCandidate);

            isNewVote ? handleNewVote(votedList) : handleUpdateVotes(votedList);

            navigation.goBack();
        } else {
            votedList.push(votedCandidate);

            setVotedList(votedList);
            setIndex(index + 1);
        }
    }

    function handleNullBlankVote(isBlankVote: boolean) {
        const nullOrBlankCandidate = getBlankOrNullCandidate(isBlankVote, enumRoles[index]);

        if (!candidatesList.includes(nullOrBlankCandidate)) {
            candidatesList.push(nullOrBlankCandidate);
        }

        handleVote(nullOrBlankCandidate.code, true);
    }

    return (
        isLoading ?
            <Container>
                <LottieFile
                    source={loadingAnimation}
                    autoPlay
                    loop
                />
                <LoadingText>
                    Carregando...
                </LoadingText>
            </Container>
            :
            <>
                <GoBackArrow />
                <Container>
                    <Header />
                    <TitleText>
                        Informe o número do seu candidato para {enumRoles[index]}
                    </TitleText>
                    <ModalCandidates candidates={candidatesList.filter(
                        candidate => isSameRole(candidate.role, enumRoles[index])
                    )} />
                    <Input
                        headerText={"Informe o número do candidato"}
                        handleVote={handleVote}
                    />
                    <ModalCandidates showBlankNullBtn handleFinishVote={handleNullBlankVote} />
                </Container>
            </>
    );
}