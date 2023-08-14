import md5 from "md5";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const createAuthenticationHeaders = (method: HttpMethod, path: string, body?: string) => {
    const userInfo = localStorage.getItem('user')
    const user = JSON.parse(userInfo as string);

    if (user) {
        const { secret, key } = user;
        const signature = md5(`${method}${path}${body || ''}${secret}`);

        return {
            Key: key.toString(),
            Sign: signature.toString()
        };
    }
};

export {
    createAuthenticationHeaders
};





