function uploadPhoto() {
  return new Promise((resolve) => {
    resolve({
      status: 200,
      body: 'photo-profile-1',
    });
  });
}

function createUser() {
  return new Promise((resolve) => {
    resolve({
      firstName: 'Guillaume',
      lastName: 'Salva',
    });
  });
}

export { uploadPhoto, createUser };
