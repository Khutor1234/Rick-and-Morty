export default class service {

  _apiBase = 'https://rickandmortyapi.com/api';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllPeople = async (page, field, value) => {
    const res = await this.getResource(`/character/?page=${page}&${field}=${value}`);
    return res
  };

  getAllLocations = async (page, field, value) => {
    const res = await this.getResource(`/location/?page=${page}&${field}=${value}`);
    return res
  };

  getAllEpisodes = async (page, field, value) => {
    const res = await this.getResource(`/episode/?page=${page}&${field}=${value}`);
    return res
  };

}
