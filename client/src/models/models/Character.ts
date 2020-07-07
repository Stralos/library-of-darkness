import { Merit } from './Merit';

export interface Character {
  name?: string;
  virtue?: string;
  vice?: string;
  concept?: string;
  clan?: string;
  legacy?: string;
  covenant?: string;
  attributes: {
    intelligence?: number;
    wits?: number;
    resolve?: number;
    strength?: number;
    dexterity?: number;
    stamina?: number;
    presence?: number;
    manipulation?: number;
    composure?: number;
  };
  skills: {

  }
  merits: Merit[];
  aspirations: string[]
}