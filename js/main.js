const frame = "section";
const box = "article";
const speed = '0.5s';
const activeClass = "on";
const btn = document.querySelectorAll("main ul li");
let grid; //플러그인의 정봇값이 담길 변수를 전역으로 설정

//이미지 소스를 활용한 모든 콘텐츠의 로딩이 완료
window.addEventListener("load", () => {
    init(); //화면 초기화 함수 호출
    filter(btn); //정렬 버튼 기넝의 함수 호출
});

//화면 초기와 함수 정의
function init() {
    //변수 grid에 담길 결괏값이 다른 함수인 filter에서도 활용되어야 하므로 전역 변수로 선언
    gird = new Isotope(frame, {
        itemSelector: box,
        columnWidth: box,
        transitionDuration: speed
    });
}

//정렬 버튼 기능 함수 정의
function filter(arr) {
    for(let el of arr) {
        el.addEventListener("click", e => {
            e.prevendDefault();

            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter: sort
            })

            for(let el of arr) {
                el.classList.remove(activeClass);
            }
            e.currentTarget.classList.add(activeClass);
        })
    }
}