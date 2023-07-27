import { appStorage } from '@app-storage/app-storage';
import { REFRESH_TOKEN } from '@constants/app-storage';
import { Auth } from 'aws-amplify';

export async function getSession() {
  try {
    const storageToken = appStorage.getString(REFRESH_TOKEN);
    const session = await Auth.currentSession();
    const cognitoToken = session.getRefreshToken().getToken();

    if (cognitoToken === storageToken) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
