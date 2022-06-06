import React from "react";
import { EnumRole, ResultVotesProps } from "../../util/types";
import { getEnumValue } from "../../util/utils";
import { LineSeparator, ResultText, ResultTitle, ResultView } from "./styles";

export default function ResultVotes(props: ResultVotesProps) {
    return (
        <>
            <ResultTitle>
                {props.headerText}
            </ResultTitle>
            {props.candidates.map(candidate => (
                <ResultView key={candidate.code}>
                    <ResultText>
                        {getEnumValue(candidate.role)}
                    </ResultText>
                    {props.winners ?
                        <ResultText>
                            {candidate.name} eleito com total de {candidate.votesNumber} votos!
                        </ResultText>
                        :
                        <ResultText>
                            {candidate.name} - {candidate.votesNumber} votos
                        </ResultText>
                    }
                    <LineSeparator />
                </ResultView>
            ))}
        </>
    );
}