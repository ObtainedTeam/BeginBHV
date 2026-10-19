// BeginBHV heeft geen vaste trainingslocatie: trainingen zijn incompany of op een externe locatie in overleg.
export const locaties = [];
export const getLocatie = (slug) => locaties.find((l) => l.slug === slug);
