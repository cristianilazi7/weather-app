export type CityApiResponse = CityInfo[];

export interface CityInfo {
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export const COUNTRY_CODES: Record<string, string> = {
  'US': 'Estados Unidos',
  'GB': 'Reino Unido',
  'ES': 'España',
  'MX': 'México',
  'AR': 'Argentina',
  'CO': 'Colombia',
  'CL': 'Chile',
  'PE': 'Perú',
  'VE': 'Venezuela',
  'EC': 'Ecuador',
  'BO': 'Bolivia',
  'PY': 'Paraguay',
  'UY': 'Uruguay',
  'BR': 'Brasil',
  'FR': 'Francia',
  'DE': 'Alemania',
  'IT': 'Italia',
  'PT': 'Portugal',
  'JP': 'Japón',
  'CN': 'China',
  'IN': 'India',
  'RU': 'Rusia',
  'CA': 'Canadá',
  'AU': 'Australia',
};

export const getLocalizedCityName = (city: CityInfo, languageCode: string = 'es'): string => {
  if (city.local_names && city.local_names[languageCode]) {
    return city.local_names[languageCode];
  }
  return city.name;
};


export const getCountryName = (countryCode: string): string => {
  return COUNTRY_CODES[countryCode] || countryCode;
};


export const formatLocation = (city: CityInfo, languageCode: string = 'es'): string => {
  const cityName = getLocalizedCityName(city, languageCode);
  const countryName = getCountryName(city.country);
  return city.state 
    ? `${cityName}, ${city.state}, ${countryName}` 
    : `${cityName}, ${countryName}`;
};