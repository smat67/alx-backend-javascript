import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);

  return Promise.allSettled([p1, p2])
    .then((data) => {
      const result = [];

      data.forEach((item) => {
        if (item.status === 'fulfilled') {
          result.push({ status: item.status, value: item.value });
        } else {
          result.push({ status: item.status, value: `${item.reason}` });
        }
      });

      return result;
    });
}
