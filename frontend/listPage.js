console.log("✅ JS 연결됨");

let currentPage = 1;

function fetchPostList(page = 1) {
  return fetch(`/posts?page=${page}`)
    .then(res => res.json());
}

function renderPage(page) {
  currentPage = page;
  console.log("🔥 renderPage 호출: ", page);

  fetchPostList(page).then(data => {
    const posts = data.posts;
    const totalCount = data.totalCount;
    const perPage = 5;
    const totalPage = Math.ceil(totalCount / perPage);

    const tbody = document.querySelector("#tablebody");
    tbody.innerHTML = '';
    posts.forEach(post => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${post[0]}</td>
        <td>${post[1]}</td>
        <td>${post[3]}</td>
        <td>${new Date(post[4]).toLocaleDateString()}</td>
        <td>0</td>
      `;
      tbody.appendChild(tr);
    });

    const container = document.querySelector("#page-numbers");
    container.innerHTML = '';
    for (let i = 1; i <= totalPage; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;

      if (i === currentPage) {
        btn.disabled = true;
        btn.style.fontWeight = 'bold';
      }

      btn.addEventListener("click", () => {
        renderPage(i);
      });

      container.appendChild(btn);
    }
  });
}

renderPage(1);

// ✅ 로그인 관련 함수들
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

// ✅ 이벤트 바인딩

document.querySelector("#wBtn").addEventListener("click", () => {
  location.href = "write.html";
});

document.querySelector("#joinBtn").addEventListener("click", () => {
  location.href = "join.html";
});

document.querySelector("#loginSubmitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  console.log("로그인 이메일:", email);
  console.log("비밀번호:", password);
});

document.querySelector("#searchBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let searchInput = document.querySelector("#searchInput").value;
  console.log("검색어:", searchInput);
});
