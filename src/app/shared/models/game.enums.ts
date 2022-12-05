export enum CharacterType {
  peoples = 'peoples',
  planets = 'planets',
  starships = 'starships',
}

export enum CharacterSelectionType {
  random = 'random',
  manually = 'manulally',
}

export const GameCharacterAttributes = {
  [CharacterType.peoples]: ['Height', 'Mass'],
  [CharacterType.planets]: [
    'Diamater',
    'Rotation Period',
    'Orbital Period',
    'Population',
    'Surface Water',
  ],
  [CharacterType.starships]: [
    'Cost In Credits',
    'Length',
    'Crew',
    'Passengers',
    'Max Atmosphering Speed',
    'Hyperdrive Rating',
    'Cargo Capacity',
  ],
};
