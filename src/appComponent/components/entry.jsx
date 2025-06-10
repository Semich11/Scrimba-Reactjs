import "./entry.css";
export function Entry({ entry }) {
  console.log(entry);
  return (
    <main className="entry-wrapper">
      <img className="entry__image" src={entry.img.src} alt={entry.img.alt} />
      <div className="text-wrapper">
        <div className="text1">
          <div className="location">
            <img src="/marker.png" alt="location-marker" />
            <span>{entry.country}</span>
            <a href={entry.googleMapsLink} className="span1">
              View on Google Maps
            </a>
          </div>
          <div className="title">{entry.title}</div>
        </div>
        <div className="text2">
          <div className="date">{entry.dates}</div>
          <div className="desc">{entry.text}</div>
        </div>
      </div>
    </main>
  );
}
