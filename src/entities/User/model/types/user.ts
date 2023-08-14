export interface User {
    name: string
    email: string
    key: string
    secret: string
}


export interface UserSchema {
    authData?: User;
}
