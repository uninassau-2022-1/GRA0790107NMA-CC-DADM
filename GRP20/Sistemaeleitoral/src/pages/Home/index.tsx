import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import votingAnimation from "../../assets/votingAnimation.json";
import Button from "../../components/Button";
import ModalCandidates from "../../components/ModalCandidates";
import { getDBConnection, listCandidates } from "../../services/SQLiteConnection";
import { Container, LottieFile, TextVote } from "./styles";

export default function Home() {
    const navigation = useNavigation<any>();
    const [isContainVotes, setContainVotes] = useState(false);

    useEffect(() => {
        loadDataCallback();
    }, [useIsFocused()]);

    function handleNavigate() {
        navigation.navigate("Vote", { isContainVotes });
    }
    
    function handleFinishVote() {
        navigation.navigate("Results");
    }
    
    function handleAbout() {
        navigation.navigate("About");
    }


    async function loadDataCallback() {
        try {
            const db = await getDBConnection();
            const storedItems = await listCandidates(db);

            if (storedItems.length) {
                setContainVotes(true);
            } else {
                setContainVotes(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        
        <Container>
            <LottieFile
                source={votingAnimation}
                autoPlay
                loop
            />
            <TextVote>
                Sistema Eleitoral
            </TextVote>

            <Button onPress={() => handleNavigate()}>
                Votar
            </Button>
            {isContainVotes &&
                <ModalCandidates showResultBtn handleFinishVote={handleFinishVote} />
            }
            <Button onPress={() => handleAbout()}>
                Sobre
            </Button>

        </Container>
        
    );
}