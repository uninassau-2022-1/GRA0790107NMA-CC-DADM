import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import confetiAnimation from "../../assets/confeti.json";
import GoBackArrow from "../../components/GoBackArrow";
import ResultVotes from "../../components/ResultVotes";
import { deleteAllVotes, getDBConnection, listCandidates } from "../../services/SQLiteConnection";
import { Candidate } from "../../util/types";
import { getWinnersAndDraws, isEmpty, resolveDrawsSecundTurn, resolveNullBlankVotes } from "../../util/utils";
import { Container, ContainerScroll, LottieFile, ResultTitle } from "./styles";

export default function Results() {
    const [winners, setWinners] = useState<Candidate[]>([]);
    const [draws, setDraws] = useState<Candidate[]>([]);
    const [secondTurn, setSecondTurn] = useState<Candidate[]>([]);
    const [blankVotes, setBlankVotes] = useState<Candidate[]>([]);
    const [nullVotes, setNullVotes] = useState<Candidate[]>([]);

    useEffect(() => {
        let isMounted = true;

        loadDataCallback().then(res => {
            if (isMounted) {
                const winnersAndDraws = getWinnersAndDraws(res!);
                const secondTurn = resolveDrawsSecundTurn(winnersAndDraws, true);
                const draws = resolveDrawsSecundTurn(winnersAndDraws, false);

                setSecondTurn(secondTurn);
                setWinners(winnersAndDraws.filter(winner => !secondTurn.concat(draws).includes(winner)));

                setDraws(draws);
                setBlankVotes(resolveNullBlankVotes(res!, true));
                setNullVotes(resolveNullBlankVotes(res!, false));
            }
        });

        return () => {
            isMounted = false;
        }
    }, [useIsFocused()]);

    async function loadDataCallback() {
        try {
            const db = await getDBConnection();
            const storedItems = await listCandidates(db);

            await deleteAllVotes(db);

            if (storedItems.length) {
                return storedItems;
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ContainerScroll>
            <GoBackArrow />
            {!isEmpty(winners) || !isEmpty(secondTurn)
                || !isEmpty(draws) || !isEmpty(nullVotes) || !isEmpty(blankVotes) ?
                <>
                    <LottieFile
                        source={confetiAnimation}
                        loop={false}
                        autoPlay
                    />
                    <Container>
                        {!isEmpty(winners) &&
                            <ResultVotes
                                candidates={winners}
                                headerText={"Ganhadores🎉"}
                                winners />
                        }
                        {!isEmpty(secondTurn) &&
                            <ResultVotes
                                candidates={secondTurn}
                                headerText={"Segundo Turno😬"} />
                        }
                        {!isEmpty(draws) &&
                            <ResultVotes
                                candidates={draws}
                                headerText={"Empate - Assume o mais👴"} />
                        }
                        {!isEmpty(blankVotes) &&
                            <ResultVotes
                                candidates={blankVotes}
                                headerText={"Votos em Branco ⬜"} />
                        }
                        {!isEmpty(nullVotes) &&
                            <ResultVotes
                                candidates={nullVotes}
                                headerText={"Votos Nulos❌"} />
                        }
                    </Container>
                </>
                :
                <ResultTitle>
                    Carregando...
                </ResultTitle>
            }

        </ContainerScroll>
    );
}