import ReactPlayer from "react-player/youtube";

// Render a YouTube video player
export default function App(): JSX.Element {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
      width={800}
      height={600}
      muted
      playing
    />
  );
}
