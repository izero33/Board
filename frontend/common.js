// 게시글 저장 (POST /posts)
async function savePost(title, content, writer) {
  const res = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, writer })
  });

  return res.text();  // "저장 성공" 같은 응답 메시지
}

// 게시글 목록 가져오기 (GET /posts)
async function fetchPostList() {
  const res = await fetch('http://localhost:3000/posts');
  return await res.json();  // 게시글 배열 반환
}