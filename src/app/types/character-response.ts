import Character from './character';

export default interface CharacterResponse {

    info: {
        count: number,
        pages: number,
        next: string,
        prev: object
    },
    results: Character[]
}