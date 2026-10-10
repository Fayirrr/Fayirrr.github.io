
const profileAvatar = document.getElementById("profileAvatar");

if (profileAvatar) {
  const profileAvatarImage = profileAvatar.querySelector("img");
  let showingIllustration = true;

  profileAvatar.addEventListener("click", () => {
    showingIllustration = !showingIllustration;

    profileAvatarImage.src = showingIllustration
      ? "avatar-art.png"
      : "avatar-photo.jpeg";

    profileAvatarImage.alt = showingIllustration
      ? "Mohammad Fayeer illustrated avatar"
      : "Mohammad Fayeer profile photo";
  });
}
