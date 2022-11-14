const fetchSearch = (artist, country) => {
  return fetch(
    `http://musicbrainz.org/ws/2/artist/?query=artist:${artist}&type:group&country:${country}&fmt=json`
  ).then((response) => {
    if (!response.ok) {
      console.log(`${response.status} ${response.statusText}`);
      throw `${response.status} ${response.statusText}`;
    } else {
      return response.json();
    }
  });
};

const fetchLookUp = (entity, mbid) => {
  return fetch(
    `http://musicbrainz.org/ws/2/${entity}/${mbid}?inc=aliases+annotation+genres+recordings+releases+release-groups+works&fmt=json`
  ).then((response) => {
    if (!response.ok) {
      console.log(`${response.status} ${response.statusText}`);
      throw `${response.status} ${response.statusText}`;
    } else {
      return response.json();
    }
  });
};

export { fetchSearch, fetchLookUp };
