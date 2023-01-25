import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {};

  try {
    result.photo = await uploadPhoto();
    result.user = await createUser();
  } catch (err) {
    result.photo = null;
    result.user = null;
  }

  return result;
}
