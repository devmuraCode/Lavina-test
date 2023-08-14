
export interface SignUpSchema {
    name: string
    email: string
    key: string
    secret: string
}


export interface authSchema {
    isLoading: boolean,
    loggedIn: boolean,
    error: null | string,
    user: SignUpSchema,
}



