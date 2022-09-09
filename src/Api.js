export const URL = 'https://narutoql.up.railway.app/graphql';

export const GET_ALL_CHARACTERS = (page) => {
  return {
    url: URL,
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
                characters(page:${page}) {
                  info {
                    count
                    pages
                    next
                    prev
                  }
                  results {
                    _id
                    name
                    avatarSrc
                    description
                    rank
                    village
                  }
                }
              }`})
    },
  }
}

export const GET_ALL_CHARACTERS_BY_VILLAGE = (village) => {
  return {
    url: URL,
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          characters(filter: {village: "${village}"}) {
            info {
              count
              pages
              next
              prev
            }
            results {
              _id
              name
              avatarSrc
              description
              rank
              village
            }
          }
        }`})
    },
  }
}

export const GET_SINGLE_CHARACTER = (id) => {
  return {
    url: URL,
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          character(id: "${id}") {
            name
            avatarSrc
            description
            village
          }
        }`})
    },
  }
}

export const GET_ALL_VILLAGES = (name) => {
  return {
    url: URL,
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          villages {
            results {
              _id
              name
            }
          }
        }`})
    },
  }
}

export const GET_SINGLE_VILLAGE = (id) => {
  return {
    url: URL,
    options: {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
          village(id: "${id}") {
            _id
            name
          }
        }`})
    },
  }
}