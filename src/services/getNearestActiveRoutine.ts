import { API_URL, DEFAULT_HEADERS } from '@constants/services';

type GetNearestActiveRoutine = {
  userEmail: string;
};

export async function getNearestActiveRoutine<T>({
  userEmail
}: GetNearestActiveRoutine): Promise<T> {
  const url = `/routines/current/${userEmail}`;

  try {
    const response = await fetch(`${API_URL}${url}`, {
      method: 'GET',
      headers: DEFAULT_HEADERS
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }

    const data: T = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
