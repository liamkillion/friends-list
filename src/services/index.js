const API_ROOT="http://localhost:3000/api/v1"

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
}

const getFriends = () => {
  return fetch(`${API_ROOT}/hangs`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const getFriend = friendId => {
  return fetch(`${API_ROOT}/friend/${friendId}`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const createNewFriend = newFriend => {
  return fetch(`${API_ROOT}/entries`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ friend: newFriend })
  }).then(res => res.json());
};

const editFriend = (friendId,friendAttributesToUpdate) => {
  return fetch(`${API_ROOT}/entries/${friendId}`, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify(friendAttributesToUpdate)
  }).then(res => res.json());
}

const deleteFriend = friendId => {
  return fetch(`${API_ROOT}/entries/${friendId}`, {
    method: "DELETE",
    headers: getHeaders()
  }).then(res => res.json());
}

const getHangs = () => {
  return fetch(`${API_ROOT}/hangs`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const getHang = hangId => {
  return fetch(`${API_ROOT}/hang/${hangId}`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const createNewHang = newHang => {
  return fetch(`${API_ROOT}/entries`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ hang: newHang })
  }).then(res => res.json());
};

const editHang = (hangId,hangAttributesToUpdate) => {
  return fetch(`${API_ROOT}/entries/${hangId}`, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify(hangAttributesToUpdate)
  }).then(res => res.json());
}

const deleteHang = hangId => {
  return fetch(`${API_ROOT}/entries/${hangId}`, {
    method: "DELETE",
    headers: getHeaders()
  }).then(res => res.json());
}



export const services = {
  friends:{
    getFriends,
    getFriend,
    createNewFriend,
    editFriend,
    deleteFriend
  },
  hangs:{
    getHangs,
    getHang,
    createNewHang,
    editHang,
    deleteHang
  }
}
