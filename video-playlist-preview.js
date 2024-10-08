const css = `
  <style>
    .yt-playlist-container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      .video {
        flex: 1 1 calc(33.333% - 10px);
        margin-bottom: 20px;
      }
      .video iframe {
        width: 100%;
        height: 300px;
      }
      @media (max-width: 600px) {
        .video {
          flex: 1 1 100%;
        }
      }
      @media (min-width: 601px) and (max-width: 1080px) {
        .video {
          flex: 1 1 calc(50% - 10px);
        }
      }
    }
  </style>
`;

function getPlaylistVideos() {
  const containers = document.getElementsByClassName("yt-playlist-container");

  Array.from(containers).forEach((container) => {
    const maxResults = container.dataset.maxResults || 6;
    const playlistId = container.dataset.playlistId;
    const apiToken = container.dataset.token; // base64 encoded token
    const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${atob(
      apiToken
    )}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        data.items.forEach((item) => {
          const videoId = item.snippet.resourceId.videoId;
          const videoElement = document.createElement("div");
          videoElement.className = "video";
          videoElement.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId}" frameborder="0" controls="2" modestbranding="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          container.appendChild(videoElement);
        });
      })
      .catch((error) => {
        console.error("Error querying playlist data:", error);
      });
  });
}

// Call the function to get the playlist videos
getPlaylistVideos();

// Add the CSS to the head of the document
document.head.insertAdjacentHTML("beforeend", css);
