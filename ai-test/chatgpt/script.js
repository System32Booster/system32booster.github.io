const followButton = document.getElementById("followButton");
const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

let following = false;


// フォローボタン
followButton.addEventListener("click", () => {

    following = !following;

    if (following) {

        followButton.textContent = "フォロー中";

        followButton.style.background =
            "linear-gradient(135deg, #42a5f5, #1e88e5)";

        showMessage("フォローしました！");

    } else {

        followButton.textContent = "フォローする";

        followButton.style.background =
            "linear-gradient(135deg, #2196f3, #1976d2)";

        showMessage("フォローを解除しました");

    }
});


// メッセージボタン
messageButton.addEventListener("click", () => {

    showMessage("メッセージ機能を開きました！");

});


// メッセージ表示
function showMessage(text) {

    message.textContent = text;

    message.classList.add("show");

    // 2秒後に消す
    setTimeout(() => {
        message.classList.remove("show");
    }, 2000);
}
