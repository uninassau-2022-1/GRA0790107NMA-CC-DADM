import { RectButtonProperties } from "react-native-gesture-handler";

export interface ButtonProps extends RectButtonProperties {
    children: string;
    shadow?: boolean;
}

export interface InputProps {
    headerText: string;
    handleVote: Function;
}

export interface ResultVotesProps {
    candidates: Candidate[];
    headerText: string;
    winners?: boolean;
}

export interface ModalProps {
    candidates?: Candidate[];
    handleFinishVote?: Function;
    showResultBtn?: boolean;
    showBlankNullBtn?: boolean;
}

export type Candidates = {
    candidates: Candidate[];
}

export type Candidate = {
    name: string;
    role: EnumRole,
    code: number;
    votesNumber: number;
    politicalParty: string;
}

export enum EnumRole {
    PRESIDENTE = "Presidente",
    GOVERNADOR = "Governador",
    SENADOR = "Senador",
    DEPUTADO_FEDERAL = "Deputado Federal",
    DEPUTADO_ESTADUAL = "Deputado Estadual"
}
