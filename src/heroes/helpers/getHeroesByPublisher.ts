import { Publisher, heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher : Publisher) => {

    const filteredHeroes = heroes.filter(hero => hero.publisher === publisher)

    return filteredHeroes ? filteredHeroes : []
}