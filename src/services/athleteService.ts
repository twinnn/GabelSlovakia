import athleteData from "../data/athletes.json";

export interface Equipment {
  name: string;
  img: string;
}

export interface Athlete {
  name: string;
  specialty: string;
  img: string;
  equipment: Equipment[];
}

export interface AthleteData {
  shopUrl: string;
  gold: Athlete;
  silver: Athlete[];
  bronze: Athlete[];
}

export function loadAthletes(): AthleteData {
  return athleteData as AthleteData;
}
