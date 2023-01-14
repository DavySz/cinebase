import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from "@env";

const RESPONSE_TYPE = "token";
const SCOPE = encodeURI("profile email");
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
