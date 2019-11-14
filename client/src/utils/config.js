export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const getConfig = () => {
  const token = localStorage.getItem('token')
  if (token) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Jwt ' + token
      }
    };
    return config;
  }
  return null;
}