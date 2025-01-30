import { IApiResponse } from "./IApiResponse";

export async function fetchData<T>(url: string): Promise<IApiResponse<T>> {
    const response = await fetch(url);
    const data = await response.json();
    return { data, status: response.status };
  }