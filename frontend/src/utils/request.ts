// Pegue o valor da variavél de ambiente BASE_URL se não exitir pegue o valor padrão

export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";