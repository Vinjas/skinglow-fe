import { Auth } from 'aws-amplify';

export async function getJwtToken() {
  return (await Auth.currentSession()).getIdToken().getJwtToken();
}
