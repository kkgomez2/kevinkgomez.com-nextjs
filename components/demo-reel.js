export default function DemoReel({ title }) {
  let reelSrc = `demos/KevinKGomez_${title}Demo.mp3`;
  return (
    <div className="my-3 pb-3">
      <div className="body-title">{title} reel</div>
      <audio
        controls
        src={reelSrc} className="w-full">
        <p>
          Your browser doesn't support HTML5 audio.
          Here is a <a href={reelSrc}>link to download the audio</a> instead.
        </p>
      </audio>
    </div>
  );
}
