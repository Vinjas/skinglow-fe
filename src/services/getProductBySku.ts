import { API } from 'aws-amplify';
import { getJwtToken } from './getJwtToken';

export async function getProductBySku(sku: string) {
  const jwtToken = await getJwtToken();

  const init = {
    headers: {
      Authorization: jwtToken
    }
  };

  const response = await API.get('SkinglowAPI', `/products/${sku}`, init);

  if (!response) {
    throw new Error('Empty response');
  }

  if (!response.product) {
    throw new Error('Product not found');
  }

  return response.product;
}
