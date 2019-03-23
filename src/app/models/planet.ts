/** INTERFACE */

export interface Planet {
  name: string;
}

/** GENERATORS */

export const new_planet = (): Planet => {
  return {
    name: planet_name(),
  };
};

/** HELPERS */

const planet_name = () => {
  return '';
};
