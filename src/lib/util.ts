export function serialize(obj) {
  const str = [];
  for(const p in obj) {
    if (obj[p] !== undefined) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
}

export async function getAddress(
  lon, lat,
  zoom=18, addressdetails=1, acceptLaunguage='en-US'
) {
  const params = {
    lat, lon, zoom, addressdetails,
    format: 'json',
    'accept-language': acceptLaunguage
  };

  const url = `https://nominatim.openstreetmap.org/reverse?${serialize(params)}`;
  const resp = await fetch(url).then(resp => resp.json());
  return resp['display_name'];
}

export async function getLonLat(
  q,
  addressdetails=1, limit=10, countrycodes='', acceptLaunguage='en-US'
) {
  const params = {
    q, addressdetails, limit, countrycodes,
    format: 'json',
    'accept-language': acceptLaunguage
  };

  const url = `https://nominatim.openstreetmap.org/search?${serialize(params)}`;
  const resp = await fetch(url).then(resp => resp.json())
  return resp;
}