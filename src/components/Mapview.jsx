import React, { useState } from "react";
import "./Mapview.css";
import CameraComponent from "./CameraComponent";

const Mapview = () => {
  const [isMapFullScreen, setIsMapFullScreen] = useState(false);
  const [isCameraFullScreen, setIsCameraFullScreen] = useState(false);

  const toggleMapFullScreen = () => {
    setIsMapFullScreen(!isMapFullScreen);
    setIsCameraFullScreen(false); // Reset camera full screen
  };

  const toggleCameraFullScreen = () => {
    setIsCameraFullScreen(!isCameraFullScreen);
    setIsMapFullScreen(false); // Reset map full screen
  };

  return (
    <div className="container">
      {!isMapFullScreen && !isCameraFullScreen && (
        <>
          <div className="map-container" onClick={toggleMapFullScreen}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31083.672948505533!2d77.594624!3d13.1334144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720089065593!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="camera-container" onClick={toggleCameraFullScreen}>
            <CameraComponent />
          </div>
        </>
      )}
      {isMapFullScreen && (
        <div className="full-screen" onClick={toggleMapFullScreen}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31083.672948505533!2d77.594624!3d13.1334144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720089065593!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="camera-overlay" onClick={toggleCameraFullScreen}>
            <CameraComponent />
          </div>
        </div>
      )}
      {isCameraFullScreen && (
        <div className="full-screen" onClick={toggleCameraFullScreen}>
          <CameraComponent />
          <div className="map-overlay" onClick={toggleMapFullScreen}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31083.672948505533!2d77.594624!3d13.1334144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1720089065593!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mapview;
