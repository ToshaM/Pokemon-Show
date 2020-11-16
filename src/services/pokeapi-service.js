export default class PokeapiService {
    _apiBase = "https://pokeapi.co/api/v2";
  
    async getResourse(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
      }
  
      return await res.json();
    }
  
    async getAllPokemon() {
      const res = await this.getResourse(`/pokemon/?limit=893&offset=0`);
      return res.results.map(this._transformPerson);
    }
  
    getPokemon(id) {
      return this.getResourse(`/pokemon/${id}`);
    }

    _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }

    _transformPerson = (person) => {
      return {
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      }
    }
  }