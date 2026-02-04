import React, { useEffect, useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { io } from "socket.io-client";

// Container for Google Map
const containerStyle = {
  width: "100%",
  height: "750px",
};

// Default Position of the Marker
const center = {
  lat: 25.3176, // Example: Varanasi latitude
  lng: 82.9739, // Example: Varanasi longitude
};

// Socket Connection Line
const socket = io("https://spotbusbackend.onrender.com", {   // connect to backend
  transports: ["websocket", "polling"],
});

// Live Tracking Function
function LiveTracking({ userId }) {
  const [currentPosition, setCurrentPosition] = useState(center);
  const [nearbyUsers, setNearbyUsers] = useState([]);
  

  useEffect(() => {
    // Watch my own location
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const newPos = { lat: latitude, lng: longitude };
        setCurrentPosition(newPos);

        // Send my location to server
        socket.emit("updateLocation", {
          userId,
          latitude,
          longitude,
        });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true }
    );

    // Listen for nearby users from server
    socket.on("nearbyUsers", (users) => {
      setNearbyUsers(users);
    });

    return () => {
      navigator.geolocation.clearWatch(watchId);
      // socket.disconnect();
    };
  }, [userId]);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={15}
      >
        {/* My marker */}
        <Marker position={currentPosition} />

        {/* Nearby users markers */}
        {nearbyUsers.map((user) => (
          <Marker
            key={user._id}
            position={{
              lat: user.location.coordinates[1], // latitude
              lng: user.location.coordinates[0], // longitude
            }}
            label={user.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default LiveTracking;