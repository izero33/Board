document.querySelector("#submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.querySelector("#titleIn").value;
  let name = document.querySelector("#nameIn").value;
  let content = document.querySelector("#contentIn").value;
  console.log(title);
  console.log(name);
  console.log(content);

  alert("제출되었습니다.")
})

document.querySelector("#backBtn").addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "list.html";
})

document.querySelector("#top3").addEventListener("click", () => {
  location.href = "list.html";
})


document.querySelector("#submitBtn").addEventListener("click", () => {
  const title = document.querySelector("#titleIn").value;
  const content = document.querySelector("#contentIn").value;
  const writer = document.querySelector("#nameIn").value;

  savePost(title, content, writer)
    .then(msg => {
      alert(msg);
      location.href = 'list.html';
    });
});