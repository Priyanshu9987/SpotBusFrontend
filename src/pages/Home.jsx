import React, { useState, useRef } from "react";
import LocationPanel from "../components/LocationPanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const [panelOpen, setPanelOpen] = useState(false);

  // Separate states for each bus
  const [bus1Open, setBus1Open] = useState(false);
  const [bus2Open, setBus2Open] = useState(false);
  const [bus3Open, setBus3Open] = useState(false);

  // Separate refs
  const panelRef = useRef(null);
  const bus1Ref = useRef(null);
  const bus2Ref = useRef(null);
  const bus3Ref = useRef(null);

  // Animation for panel
  useGSAP(
    () => {
      gsap.to(panelRef.current, {
        translateY: panelOpen ? "-600px" : "0px",
        duration: 0.5,
        ease: "power2.out",
      });
    },
    [panelOpen]
  );

  return (
    <>
      {/* Main background section */}
      <div
        className="w-full h-2/3 bg-green-300"
        onClick={() => setPanelOpen(false)}
      >
        <LocationPanel />
      </div>

      {/* Sliding Panel */}
      <div
        ref={panelRef}
        className="w-full h-1/3 m-2 p-2 mt-4"
        onClick={() => setPanelOpen(true)}
      >
        <h2 className="bg-white w-full m-2 p-2 mb-0 font-semibold text-2xl">
          Bus Details
        </h2>

        {/* Bus 1 */}
        <div
          ref={bus1Ref}
          className="bg-white m-2 overflow-hidden rounded shadow border p-2"
          style={{ height: bus1Open ? "auto" : "80px" }}
        >
          <div className="flex items-center justify-between p-3">
            <div className="flex gap-3">
              <div className="border p-2 rounded">
                <h4>RJ</h4>
                <h4>XL AF</h4>
                <h4>1234</h4>
              </div>
              <p>Jaipur(9:00) 🡢 Bhopal (11:00) 🡢 Chennai(2:00)</p>
            </div>
            <button
              onClick={() => setBus1Open(!bus1Open)}
              className="bg-yellow-300 px-4 py-2 rounded font-semibold"
            >
              {bus1Open ? "Less Details" : "View Details"}
            </button>
          </div>
          {bus1Open && (
            <div className="p-4 border-t space-y-2 text-sm">
              <p><b>Name:</b> Rahul Sharma</p>
              <p><b>Phone:</b> 9876543210</p>
              <p><b>Email:</b> rahul@gmail.com</p>
              <p><b>Plate No:</b> RJ14 AB 4321</p>
              <p><b>License:</b> DL-142023456</p>
              <p><b>RC:</b> Available</p>
              <p><b>PUC:</b> Valid till 2026</p>
              <div className="flex gap-2">
                <img src="/driver1.jpg" className="w-20 h-20 rounded" />
                <img src="/license1.jpg" className="w-20 h-20 rounded" />
                <img src="/rc1.jpg" className="w-20 h-20 rounded" />
              </div>
            </div>
          )}
        </div>

        {/* Bus 2 */}
        <div
          ref={bus2Ref}
          className="bg-white m-2 overflow-hidden rounded shadow"
          style={{ height: bus2Open ? "auto" : "80px" }}
        >
          <div className="flex items-center justify-between p-3">
            <div className="flex gap-3">
              <div className="border p-2 rounded">
                <h4>MH</h4>
                <h4>ZX RT</h4>
                <h4>5678</h4>
              </div>
              <p>Mumbai(8:30) 🡢 Pune (10:00) 🡢 Goa(1:30)</p>
            </div>
            <button
              onClick={() => setBus2Open(!bus2Open)}
              className="bg-yellow-300 px-4 py-2 rounded font-semibold"
            >
              {bus2Open ? "Less Details" : "View Details"}
            </button>
          </div>
          {bus2Open && (
            <div className="p-4 border-t space-y-2 text-sm">
              <p><b>Name:</b> Sneha Verma</p>
              <p><b>Phone:</b> 9123456789</p>
              <p><b>Email:</b> sneha@gmail.com</p>
              <p><b>Plate No:</b> MH12 XY 7890</p>
              <p><b>License:</b> DL-152024789</p>
              <p><b>RC:</b> Available</p>
              <p><b>PUC:</b> Valid till 2025</p>
              <div className="flex gap-2">
                <img src="/driver2.jpg" className="w-20 h-20 rounded" />
                <img src="/license2.jpg" className="w-20 h-20 rounded" />
                <img src="/rc2.jpg" className="w-20 h-20 rounded" />
              </div>
            </div>
          )}
        </div>

        {/* Bus 3 */}
        <div
          ref={bus3Ref}
          className="bg-white m-2 overflow-hidden rounded shadow"
          style={{ height: bus3Open ? "auto" : "80px" }}
        >
          <div className="flex items-center justify-between p-3">
            <div className="flex gap-3">
              <div className="border p-2 rounded">
                <h4>DL</h4>
                <h4>QW ER</h4>
                <h4>9012</h4>
              </div>
              <p>Delhi(7:00) 🡢 Agra (9:00) 🡢 Lucknow(12:00)</p>
            </div>
            <button
              onClick={() => setBus3Open(!bus3Open)}
              className="bg-yellow-300 px-4 py-2 rounded font-semibold"
            >
              {bus3Open ? "Less Details" : "View Details"}
            </button>
          </div>
          {bus3Open && (
            <div className="p-4 border-t space-y-2 text-sm">
              <p><b>Name:</b> Arjun Mehta</p>
              <p><b>Phone:</b> 9988776655</p>
              <p><b>Email:</b> arjun@gmail.com</p>
              <p><b>Plate No:</b> DL8C AB 3456</p>
              <p><b>License:</b> DL-162025321</p>
              <p><b>RC:</b> Available</p>
              <p><b>PUC:</b> Valid till 2027</p>
              <div className="flex gap-2">
                <img src="/driver3.jpg" className="w-20 h-20 rounded" />
                <img src="/license3.jpg" className="w-20 h-20 rounded" />
                <img src="/rc3.jpg" className="w-20 h-20 rounded" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
