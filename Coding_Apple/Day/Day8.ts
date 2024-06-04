// 타입스크립트로 HTML 변경과 조작할 때 주의점

let 제목 = document.querySelector('#title');

// 1. narrowing
if(제목 !== null){
    제목.innerHTML = "반가워요"
}

// 2. instanceof 연산자
if(제목 instanceof Element){
    제목.innerHTML = "반가워요"
}

// 3. as 사용 자주 사용 x

// let 제목 = document.querySelector("#title") as Element;
// 제목.innerHTML = "반가워요"

// 4. 오브첵트에 붙이는  ?.
if(제목?. innerHTML != undefined){
    제목.innerHTML = "반가워요"
}

// 5. tsconfig에서 "strictNullChecks": true => false로 변경

// a 태그의 href 속성을 바꿔보자
let 링크 = document.querySelector('.link');

if(링크 instanceof HTMLAnchorElement){
    링크.href = 'https://kakao.com'
}

// 이벤트리스너 부착해보기
let 버튼 = document.querySelector('#button');
버튼?.addEventListener('click', function(){
    console.log('Hi')
})

// (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
let 사진 = document.querySelector('#image')
if(사진 instanceof HTMLImageElement){
    사진.src = "new.jpg"
}

// (숙제2) 바꾸고 싶은 html 요소가 많습니다.
let 요소 = document.querySelectorAll('.naver')
    요소.forEach((el) => {
        if(el instanceof HTMLAnchorElement){
        el.href = "https://kakao.com"
    }
})
