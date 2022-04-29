// export const day21 = 10;

// 자동으로 로컬 모듈로 만들어 진다.
export {}

const day21 = 10;

// 글로벌 변수를 만들고 싶을 때
declare global {
    type Dog = string;
}