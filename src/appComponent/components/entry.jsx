import "./entry.css";
export function Entry(props) {
  return (
    <main className="entry-wrapper">
        <img className="entry__image" src={props.src} alt="mountain" />
        <div className="text-wrapper">
            <div className="text1">
                <div className="location">
                    <img src="/marker.png" alt="location-marker" />
                    <span>{props.country}</span>
                    <a href={props.href} className="span1">View on Google Maps</a>
                </div>
                <div className="title">{props.name}</div>
            </div>
            <div className="text2">
                <div className="date">{props.date}</div>
                <div className="desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </div>
            </div>
        </div>
    </main>
  );
}
