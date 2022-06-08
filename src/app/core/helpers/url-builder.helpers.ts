import { environment } from 'src/environments/environment';

export const urlBuilder = (endpoint: string): string => {
  return environment.apiURL + endpoint;
};