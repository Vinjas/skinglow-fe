import { API } from 'aws-amplify';
import { getJwtToken } from './getJwtToken';

export async function getAllItems(context: string, locale?: string) {
  const jwtToken = await getJwtToken();

  const init = {
    headers: {
      Authorization: jwtToken
    }
  };

  const localeQueryString = locale ? `?locale=${locale}` : '';

  const url = `/products/${context}${localeQueryString}`;

  const response = await API.get('SkinglowAPI', url, init);

  if (!response) {
    throw new Error('Empty response');
  }

  if (!response[context]) {
    throw new Error('Items not found');
  }

  return response[context];
}
