const API_URL = process.env.API_URL;

interface QueryParams {
  [key: string]: string | number | boolean;
}

export interface RequestOptions {
  page?: number;
  _limit?: number;
  rating_like?: string;
}

export const defaultRequestOptions = {
  page: 1,
  _limit: 10,
};

export const buildQueryString = (params: QueryParams) => {
  const query = Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(([key, value]) => [key, encodeURIComponent(String(value))]);

  return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
};

export const apiRequest = async <T>(
  endpoint: string,
  query?: QueryParams,
  options?: RequestOptions
): Promise<T> => {
  const mergedOptions: RequestOptions = {
    ...defaultRequestOptions,
    ...options,
  };
  const queryString: string = buildQueryString({ ...mergedOptions, ...query });

  try {
    console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ')
    console.log(`${API_URL}/${endpoint}${queryString}`)
    const response = await fetch(`${API_URL}/${endpoint}${queryString}`);

    if (!response.ok) {
      throw new Error(`Api request failed: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
