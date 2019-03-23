import { generate_id } from '../helpers';
import { new_planet, Planet } from './planet';
import { Ship } from './ship';

/** INTERFACE */

export interface Game {
  id: string;
  name: string;
  ships: Ship[];
  planets: Planet[];
  net_worth: number;
}

/** GENERATORS */

export const create_game = (name: string): Game => {
  return {
    id: generate_id(),
    name,
    ships: [],
    planets: new Array(10).fill(null).map(e => new_planet()),
    net_worth: 1000,
  };
};
