# Render YouTube Playlists in the Browser

Easily bring YouTube playlists to life on your website with this lightweight JavaScript solution! Whether you’re using Wordpress or any other platform, you can integrate this script by simply including the JavaScript file directly in your site or loading it from an S3 bucket (or another source).

Check out the [index.html](index.html) file for a quick example of how to get started using the script.

![Image of a webpage with embedded videos](images/demo.webp)

## Usage

```html
<script src="video-playlist-preview.js" defer></script>
<div
  class="yt-playlist-container"
  data-playlist-id="youtube-playlist-id"
  data-token="your-token"
  data-max-results="optional: select how many videos are being queried"
></div>
```

## Features

- Embed YouTube playlists quickly and easily on any website.
- Customize the number of videos shown by setting the data-max-results attribute.
- Lightweight and efficient script, designed for easy integration.
- Supports restricting the API key to specific domains for added security.

## Setup

### 1. Get a Google APIs Token

To fetch YouTube playlist data, you need an API key from Google Cloud. Here’s how to set it up:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/apis/dashboard).
2. Select a project or create a new one.
3. Navigate to "Credentials" from the side menu.
4. Click on "Create Credentials" and select "API Key".
5. Set application restrictions for your API key (e.g., limit it to specific domains for security).
6. Copy the generated API key (we'll call it `your-token` for now).
7. To slightly obfuscate your token, open the Developer Console in your browser and run `btoa('your-token')`. Copy the resulting output.
8. Use the obfuscated token in the data-token attribute within the div tag.

> [!NOTE]
> Note: While this obfuscation method is basic and not fully secure, it helps prevent bots from stealing your token. Make sure to restrict usage to your specific domains.

#### Enable the YouTube Data API

1. Go to the "Enabled APIs & services" section.
2. Enable the "YouTube Data API v3" for your project.

### Get the Playlist ID

1. Go to your YouTube channel.
2. Go to "Playlists" in the menu.
3. Select the playlist you want to embed.
4. Copy the URL, e.g. `https://www.youtube.com/playlist?list=your-playlist-id`.
5. Copy the `your-playlist-id` part and use it in the div-tag.

### Troubleshooting

If you encounter HTTP 403 Forbidden errors, you might have to enable the YouTube Data API v3 for your project. Go to https://console.cloud.google.com/apis/library/youtube.googleapis.com and enable the API.
