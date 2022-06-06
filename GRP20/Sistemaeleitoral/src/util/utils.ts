import { Alert } from "react-native";
import { getDBConnection, listCandidates, saveVotes, updateVotes } from "../services/SQLiteConnection";
import { Candidate, EnumRole } from "./types";
import {API_BASE_URL, API_VERSION, API_PATH} from "@env";

export function getEnumRoleElements() {
    let elements: EnumRole[] = [];

    elements.push(EnumRole.PRESIDENTE);
    elements.push(EnumRole.GOVERNADOR);
    elements.push(EnumRole.SENADOR);
    elements.push(EnumRole.DEPUTADO_FEDERAL);
    elements.push(EnumRole.DEPUTADO_ESTADUAL);

    return elements;
}

export function firstElement(list: any[]) {
    if (list.length != undefined
        && list.length > 0) {
        return list[0];
    }
}

export function isEmpty(array: any[]) {
    return array != undefined && array.length == 0;
}

export function getUriCandidates() {
    return API_BASE_URL + API_VERSION + API_PATH;
}

export function isSameRole(candidateRole: string, role: string) {
    return EnumRole[candidateRole] == role;
}

export async function handleNewVote(votedList: Candidate[]) {
    try {
        const db = await getDBConnection();
        await saveVotes(db, votedList);
    } catch (error) {
        console.error(error);
    }
}

export async function handleUpdateVotes(votedList: Candidate[]) {
    try {
        const newVotedCandidates: Candidate[] = [];
        const db = await getDBConnection();
        const storedItems = await listCandidates(db);

        if (storedItems.length) {
            votedList.map(async candidate => {
                let isContainCandidate = false;
                storedItems.forEach(c => c.code === candidate.code
                    && isContainCandidate === false ? isContainCandidate = true : false);

                if (isContainCandidate) {
                    await updateVotes(db, firstElement(storedItems.filter(c => c.code === candidate.code)));
                } else {
                    newVotedCandidates.push(candidate);
                }
            });
        }

        if (newVotedCandidates.length >= 1) {
            await saveVotes(db, newVotedCandidates);
        }
    } catch (error) {
        console.error(error);
    }
}

export function getWinnersAndDraws(candidates: Candidate[]): Candidate[] {
    const roles = getEnumRoleElements();
    const nullOrBlank = "BRANCO" || "NULO";
    let winners: Candidate[] = [];

    roles.forEach(role => {
        const candidatesInRole = candidates.filter(candidate => isSameRole(candidate.role, role) && candidate.name != nullOrBlank);

        if (candidatesInRole.length) {
            const candidateWinner: Candidate = firstElement(candidatesInRole.sort((a, b) => sortByVotes(a, b)));
            const candidatesInTie: Candidate[] = candidatesInRole.filter(candidate => candidate.votesNumber == candidateWinner.votesNumber);

            if (candidatesInTie.length > 1) {
                winners = winners.concat(candidatesInTie);
            } else {
                winners.push(candidateWinner);
            }
        }

    });
    
    return winners;
}

export function resolveDrawsSecundTurn(candidates: Candidate[], onlySecondTurn: boolean): Candidate[] {
    const roles = onlySecondTurn ? getEnumRoleElements().slice(0, 2) : getEnumRoleElements().slice(2, 5);
    let drawsSecundTurn: Candidate[] = [];

    roles.forEach(role => {
        const candidatesInRole = candidates.filter(candidate => isSameRole(candidate.role, role));

        if (candidatesInRole.length) {
            if (candidatesInRole.length > 1) {
                drawsSecundTurn = drawsSecundTurn.concat(candidatesInRole);
            }
        }
    });
    
    return drawsSecundTurn;
}

export function resolveNullBlankVotes(candidates: Candidate[], onlyBlank: boolean): Candidate[] {
    const nullBlankType = onlyBlank ? "BRANCO" : "NULO";
    let nullBlankVotes: Candidate[] = [];

    const candidatesNullOrBlank = candidates.filter(candidate => candidate.name == nullBlankType);

    if (candidatesNullOrBlank.length) {
        nullBlankVotes = nullBlankVotes.concat(candidatesNullOrBlank);
    }

    return nullBlankVotes;
}

export function sortByVotes(a: Candidate, b: Candidate) {
    if (a.votesNumber > b.votesNumber) {
        return -1;
    }

    if (a.votesNumber < b.votesNumber) {
        return 1;
    }

    return 0;
}

export function getBlankOrNullCandidate(isBlank: boolean, enumRole: EnumRole): Candidate {
    const blankNullCandidate: Candidate = {
        code: getNullBalnkCandidateCode(enumRole, isBlank),
        name: isBlank ? "BRANCO" : "NULO",
        politicalParty: isBlank ? "BRANCO" : "NULO",
        role: enumRole,
        votesNumber: 0
    };

    return blankNullCandidate;
}

export function validCandidate(votedCandidate: Candidate, enumRole: EnumRole, isBlankNullVote: boolean): boolean {
    if (votedCandidate == undefined) {
        Alert.alert("Número de candidato informado inválido!");
        return false;
    } else if (!isSameRole(votedCandidate.role, enumRole)
        && !isBlankNullVote) {
        Alert.alert(`Número candidato inválido para o cargo de ${enumRole}!`);
        return false;
    }

    return true;
}

export function getEnumValue(enumStringValue: string) {
    return EnumRole[enumStringValue] != undefined ? EnumRole[enumStringValue] : enumStringValue;
}

function getNullBalnkCandidateCode(enumRole: EnumRole, isBlank: boolean) {
    if (isBlank) {
        switch (enumRole) {
            case EnumRole.PRESIDENTE:
                return 1;
            case EnumRole.SENADOR:
                return 2;
            case EnumRole.GOVERNADOR:
                return 3;
            case EnumRole.DEPUTADO_FEDERAL:
                return 4;
            case EnumRole.DEPUTADO_ESTADUAL:
                return 5;
        }
    } else {
        switch (enumRole) {
            case EnumRole.PRESIDENTE:
                return 6;
            case EnumRole.SENADOR:
                return 7;
            case EnumRole.GOVERNADOR:
                return 8;
            case EnumRole.DEPUTADO_FEDERAL:
                return 9;
            case EnumRole.DEPUTADO_ESTADUAL:
                return 10;
        }
    }
}