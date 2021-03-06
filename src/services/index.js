const API_ROOT="http://localhost:3000/api/v1"

const getHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
}

const getFriends = () => {
  return fetch(`${API_ROOT}/friends`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const getFriend = friendId => {
  return fetch(`${API_ROOT}/friends/${friendId}`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const createNewFriend = newFriend => {
  debugger
  return fetch(`${API_ROOT}/friends`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(newFriend)
  }).then(res => res.json());
};

const editFriend = (friendId,friendAttributesToUpdate) => {
  return fetch(`${API_ROOT}/friends/${friendId}`, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify(friendAttributesToUpdate)
  }).then(res => res.json());
}

const deleteFriend = friendId => {
  return fetch(`${API_ROOT}/friends/${friendId}`, {
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
  return fetch(`${API_ROOT}/hangs/${hangId}`, {
    headers: getHeaders()
  }).then(res => res.json());
};

const createNewHang = newHang => {
  return fetch(`${API_ROOT}/hangs`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(newHang)
  }).then(res => res.json());
};

const editHang = (hangId,hangAttributesToUpdate) => {
  return fetch(`${API_ROOT}/hangs/${hangId}`, {
    method: "PATCH",
    headers: getHeaders(),
    body: JSON.stringify(hangAttributesToUpdate)
  }).then(res => res.json());
}

const deleteHang = hangId => {
  return fetch(`${API_ROOT}/hangs/${hangId}`, {
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
