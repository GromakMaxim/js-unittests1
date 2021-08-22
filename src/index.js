export default function calculateCharacterHealth(character) {
  if (character.name !== '' && typeof character.name === 'string'
        && typeof character.health === 'number') {
    if (character.health >= 0 && character.health <= 100) {
      if (character.health >= 50) return 'healthy';
      if (character.health >= 15 && character.health < 50) return 'wounded';
      if (character.health < 15) return 'critical';
    }
  }
  throw new Error('illegal data');
}
