function getNumber(value: number): number {
  return value;
}

function getString(value: string): string {
  return value;
}

function getSimple<T>(value: T): T {
  return value;
}

const result = getSimple<number>(1);
console.log(result);
const result1 = getSimple<string>("hlhl");
console.log(result1);
const result2 = getSimple(true); // 형추론
console.log(result2);

function getBoolean(bool: Boolean) {
  return bool;
}

function getArray(arr: Array<string>) {
  // string[]를 Array<string>으로
  return arr;
}
function object(obj: { name: string }) {
  return obj;
}

function getValue2<T>(value: T): T {
  return value;
}

getValue2(true);
getValue2<string[]>(["1"]);
getValue2({ name: "hoho" });

/* 인터페이스 */
interface Box<T, U> {
  value: T;
  width: U;
}

const numberBox: Box<number, number> = {
  value: 10,
  width: 2,
};

const stringBox: Box<string, string> = {
  value: "hihi",
  width: "rlrl",
};

interface ApiResponse<T> {
  data: T;
  status: number;
}

const res: ApiResponse<string> = {
  data: "success",
  status: 200,
};

interface List<T> {
  items: T[];
}

/* type 제한 */
// length 속성이 있는 타입만 허용
function printLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

printLength("hihi");
printLength([1, 2, 3]);
printLength({ length: 3, name: "hoho" });
printLength(123); // 에러 발생 length가 없는 것

// 특정 타입만 허용
function logValue<T extends string | number>(value: T) {
  console.log(value);
}

logValue("hi");
logValue(1);
logValue(true); // 오류: 자격 없음

// 객체 속성 제한

function printName<T extends Person>(obj: T) {
  console.log(obj.name);
}

class Person {
  name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

printName({ name: "hoho" });
printName({ name: "hihi", age: 40 });
printName({ age: 30 }); // 에러 발생

// 키 제한
function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key];
}
const user = {name:'히히',age:22};

getProperty(user,"name");
getProperty(user,"age");
getProperty(user,"job") // 에러 발생
