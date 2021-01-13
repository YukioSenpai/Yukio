export interface User {
    username: string
    isAdmin: boolean
    id: string
}

export const dummyUser: User = {
    username: 'test',
    isAdmin: false,
    id: '1'
}