export interface Results {
    adult: boolean
    original_name: string
    media_type: string
    vote_average: number
    title: string
}

export const dummyResults = {
    adult: false,
    original_name: 'Asterix',
    media_type: 'tv',
    vote_average: 1,
    title: 'Coucou'
}

export interface ResultFetch {
    page: number
    results: Array<Results>
    total_pages: number
    total_results: number
}

export const dummyFetch: ResultFetch = {
    page: 1,
    results: [dummyResults],
    total_pages: 1,
    total_results: 1
}
