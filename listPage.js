
const data = [
  { num: 10, title: "공지사항 - 시험 일정 안내", writer: "관리자", date: "2025-06-13", views: 120 },
  { num: 9, title: "자유주제 토론 열렸습니다", writer: "홍길동", date: "2025-06-12", views: 87 },
  { num: 8, title: "오늘 급식 정보", writer: "영희", date: "2025-06-12", views: 42 },
  { num: 7, title: "방과후 수업 신청 안내", writer: "관리자", date: "2025-06-11", views: 61 },
  { num: 6, title: "운동회 사진 공유해요", writer: "철수", date: "2025-06-10", views: 73 },
  { num: 5, title: "시험 끝나고 뭐할거예요?", writer: "민수", date: "2025-06-10", views: 55 },
  { num: 4, title: "질문 있습니다 (수학)", writer: "수정", date: "2025-06-09", views: 36 },
  { num: 3, title: "웹사이트 버그 발견", writer: "태현", date: "2025-06-09", views: 24 },
  { num: 2, title: "방명록 기능 추가 제안", writer: "지민", date: "2025-06-08", views: 19 },
  { num: 1, title: "첫 번째 게시글입니다!", writer: "관리자", date: "2025-06-08", views: 100 },

];

// let html = ""
// data.forEach((item) => {
//   html = html + `
//   <tr>
//     <td>${item.num}</td>
//     <td>${item.title}</td>
//     <td>${item.writer}</td>
//     <td>${item.date}</td>
//     <td>${item.views}</td>
//   </tr>
// `;
// });
// document.querySelector("#tablebody").innerHTML = html
let currentPage = 1;
let perPage = 5;

let changePage = function (pageNum) {
  currentPage = pageNum;

  //let page = 1;

  let start = (currentPage - 1) * perPage; // 예: (1-1)*5 = 0
  let end = start + perPage;        // 0 + 5 = 5

  let pageData = data.slice(start, end);

  let html = ""

  pageData.forEach((item) => {
    html = html + `
    <tr>
      <td>${item.num}</td>
      <td>${item.title}</td>
      <td>${item.writer}</td>
      <td>${item.date}</td>
      <td>${item.views}</td>
    </tr>
  `;
  });
  document.querySelector("#tablebody").innerHTML = html

}
changePage(1);

//총 페이지 수 계산
let totalPage = Math.ceil(data.length / perPage)

const container = document.querySelector("#page-numbers");
container.innerHTML = "";

for (let i = 1; i <= totalPage; i++) {
  const btn = document.createElement("button")
  container.appendChild(btn);
  btn.innerText = i;
  btn.onclick = function () {
    changePage(i);
  };
}

// //로그인
// function showLogin() {
//   document.querySelector("#boardPage").style.display = "none";
//   document.querySelector(".pagination").style.display = "none";
//   document.querySelector(".loginPage").style.display = "block";
//   // document.querySelector("#loginBtn").style.display = "none"
//   document.querySelector(".top2").style.display = "none"

// }

// function goHome() {
//   document.querySelector("#boardPage").style.display = "block";
//   document.querySelector(".pagination").style.display = "block";
//   document.querySelector(".loginPage").style.display = "none";
//   // document.querySelector("#loginBtn").style.display = "block"
//   document.querySelector(".top2").style.display = "flex"

// }

function showLogin() {
  document.querySelector("#boardPage").classList.add("hidden");
  document.querySelector(".pagination").classList.add("hidden");
  document.querySelector(".loginPage").classList.remove("hidden");
  document.querySelector(".top2").classList.add("hidden");
}

function goHome() {
  document.querySelector("#boardPage").classList.remove("hidden");
  document.querySelector(".pagination").classList.remove("hidden");
  document.querySelector(".loginPage").classList.add("hidden");
  document.querySelector(".top2").classList.remove("hidden");
}

document.querySelector("#wBtn").addEventListener("click", () => {
  location.href = "write.html";
})

document.querySelector("#joinBtn").addEventListener("click", () => {
  location.href = "join.html";

})

document.querySelector("#loginSubmitBtn").addEventListener("click", (e) => {
  e.preventDefault(); // 서버 전송 막고 콘솔에만 출력

  let email = document.querySelector("#email").value;
  console.log(email);

  let password = document.querySelector("#password").value;
  console.log(password);

});


document.querySelector("#searchBtn").addEventListener("click", (e) => {
  e.preventDefault(); // 서버 전송 막고 콘솔에만 출력

  let searchInput = document.querySelector("#searchInput").value;
  console.log(searchInput);


});