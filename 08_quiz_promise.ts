// const DB: User[] = [];

// function saveDB(user: User) {
//   const oldDBLength: number = DB.length;
//   DB.push(user);
//   console.log(`${user.uname} 저장 완료되었습니다.`);
//   if (DB.length > oldDBLength) {
//     return Promise.resolve(user);
//   } else {
//     return Promise.reject(new Error("저장 실패"));
//   }
// }

// function sendEmail(user: User) {
//   console.log(`${user.email}로 전송했습니다`);
//   return Promise.resolve(user);
// }

// function getResult(user: User) {
//   return Promise.resolve(`${user.uname}님 등록 완료되었습니다.`);
// }

// function registerByPromise(user: User) {
//   const result = saveDB(user)
//     .then(sendEmail)
//     .then(getResult)
//     .catch((err) => new Error(err));
//   return result;
// }

// interface User {
//   uname: string;
//   email: string;
// }

// const myUser = { uname: "hi", email: "emem@gmail.com" };
// const result = registerByPromise(myUser);
// result.then(console.log);

// promise 회원가입
const DB: User[] = [];

interface User {
  uname: string;
  email: string;
}

function saveDB(user: User): Promise<User> {
  const oldDBLength: number = DB.length;
  DB.push(user);
  console.log(`${user.uname} 저장 완료되었습니다.`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBLength) {
      resolve(user);
    } else {
      reject(new Error("저장 실패"));
    }
  });
}

function sendEmail(user: User): Promise<User> {
  console.log(`${user.email}로 전송했습니다`);
  return new Promise((resovle) => {
    resovle(user);
  });
}

function getResult(user: User): Promise<string> {
  return new Promise((resolve) => {
    resolve(`${user.uname}님 등록 완료되었습니다.`);
  });
}

function registerByPromise(user: User): Promise<string | Error> {
  const result = saveDB(user)
    .then(sendEmail)
    .then(getResult)
    .catch((err) => new Error(err));
  return result;
}

const myUser:User = { uname: "hi", email: "emem@gmail.com" };
const result: Promise<string | Error> = registerByPromise(myUser);
result.then(console.log);
