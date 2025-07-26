export function serialize(obj: Record<string, any>) {
  const str: string[] = [];
  for (const p in obj) {
    if (obj[p] !== undefined) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
}

export async function getAddress(
  lon: number,
  lat: number,
  zoom: number = 18,
  addressdetails: number = 1,
  acceptLaunguage: string = 'en-US',
) {
  const params = {
    lat,
    lon,
    zoom,
    addressdetails,
    format: 'json',
    'accept-language': acceptLaunguage,
  };

  const url = `https://nominatim.openstreetmap.org/reverse?${serialize(params)}`;
  const resp = await fetch(url).then((resp) => resp.json());
  return resp['display_name'];
}

export async function getLonLat(
  q: string,
  addressdetails: number = 1,
  limit: number = 10,
  countrycodes: string = '',
  acceptLaunguage: string = 'en-US',
) {
  const params = {
    q,
    addressdetails,
    limit,
    countrycodes,
    format: 'json',
    'accept-language': acceptLaunguage,
  };

  const url = `https://nominatim.openstreetmap.org/search?${serialize(params)}`;
  const resp = await fetch(url).then((resp) => resp.json());
  return resp;
}