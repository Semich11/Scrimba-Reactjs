import "./entry.css";
export function Entry() {
  return (
    <main className="entry-wrapper">
        <img className="entry__image" src="/Rectangle 77.png" alt="mountain" />
        <div className="text-wrapper">
            <div className="text1">
                <div className="location">
                    <img src="/marker.png" alt="location-marker" />
                    <span>japan</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="span1">View on Google Maps</a>
                </div>
                <div className="title">Mount Fuji</div>
            </div>
            <div className="text2">
                <div className="date">12 Jan, 2023 - 24 Jan, 2023</div>
                <div className="desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </div>
            </div>
        </div>
    </main>
  );
}
