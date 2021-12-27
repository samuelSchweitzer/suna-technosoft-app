import React from "react";

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.0314285384869!2d77.69498485525784!3d12.939642230063367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13b23fe83815%3A0xb1348e8fe7746816!2sV%20R%20Chambers%20Kadabisnahalli!5e0!3m2!1sen!2sin!4v1638730813453!5m2!1sen!2sin"
        className="map-iframe"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
