import { createAuthClient } from 'better-auth/react';
export const { signIn, signUp, useSession, listAccounts,signOut } = createAuthClient({
  baseURL: 'http://localhost:5000',
});
