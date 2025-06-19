
    document.querySelector("#backBtn").addEventListener("click", () => {
      location.href = "list.html";
    })

    document.querySelector("#joinBtn").addEventListener("click", (e) => {
      e.preventDefault(); // 서버 전송 막고 콘솔에만 출력

      let joinIdInput = document.querySelector("#joinIdInpute").value;
      console.log(joinIdInput);

      let joinPwInput = document.querySelector("#joinPwInput").value;
      console.log(joinPwInput);

      let joinNameInput = document.querySelector("#joinNameInput").value;
      console.log(joinNameInput);

      let joinEmailInput = document.querySelector("#joinEmailInput").value;
      console.log(joinEmailInput);
    });
