const URLrequest = "https://api.github.com/users/prabhatyadav4";

const xhr = new XMLHttpRequest();
xhr.open("GET", URLrequest);

xhr.onreadystatechange = function () {
  console.log("readyState:", xhr.readyState);

  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);

    console.log(data.name);
    console.log(data.bio);
    console.log(data.followers);
    console.log(data.following);

    // Plug API data into HTML Elements

    document.querySelector(".photo").src = data.avatar_url;
    document.querySelector(".name").textContent = data.name;
    document.querySelector(".bio").textContent = data.bio;
    document.querySelector(".followers").textContent = data.followers;
    document.querySelector(".following").textContent = data.following;
  }
};

xhr.send();