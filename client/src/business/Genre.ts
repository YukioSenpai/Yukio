
export interface ResultGenre {
    id: number
    name: string
}

export const dummyResultGenre = {
    id: 1,
    name: 'coucou'
}
export interface Genre {
    genres: Array<ResultGenre>
}

export const dummyGenre = {
    genres: [dummyResultGenre]
}