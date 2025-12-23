const likeButton = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let count = 0;

likeButton.addEventListener("click", function () {
  count++;
  likeCount.textContent = "Likes: " + count;
});
