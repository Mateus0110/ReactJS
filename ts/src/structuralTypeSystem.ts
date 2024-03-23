type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string, password: string };

const VerifyUser: VerifyUserFn = (user: User, sentValue: User) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'Enzo', password: '1234' };
const sentUser = { username: 'Enzo', password: '1234' }
const loggedIn = VerifyUser(bdUser, sentUser);

console.log(loggedIn);
