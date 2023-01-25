import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();

  Promise.all([p1, p2])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
