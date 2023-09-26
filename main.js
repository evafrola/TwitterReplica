document.addEventListener("DOMContentLoaded", function () {
    const tweetsContainer = document.querySelector(".feed");
    // Realiza la solicitud Fetch a la URL de los datos
    fetch("https://my-json-server.typicode.com/evafrola/TwitterReplicaJSON/posts")
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                tweetsContainer.innerHTML += `
                <div class="tweets">
                    <div class="profile-pic"><img src="https://xsgames.co/randomusers/assets/avatars/pixel/${index + 1}.jpg" width="40" /></div>
                    <div class="content">
                        <div class="names">
                            <p class="full-name">${item.name}</p>
                            <p class="user-name">@${item.name.replace(" ", "_")}</p>
                            <p class="time"> 27mins</p>
                        </div>
                    </div>
                    <div class="tweet-content">
                        <p>${item.text}</p>
                    </div>
                    <div class="tweet-icons">
                        <i class="fa fa-comment" aria-hidden="true"></i>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <i class="fa fa-retweet" aria-hidden="true"></i>
                    </div>
                </div>
                `;
            });
        });
 })