import React, { useState, useEffect } from "react";
import { X, Calendar, MapPin } from "lucide-react";

const EventModal = ({ event = {}, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  const {
    name = "Event Name",
    description = "Event description",
    date = "Upcoming",
    location = "Location TBA",
    image = "/api/placeholder/600/300",
  } = event;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center 
      transition-all duration-500 ease-out ${isVisible ? "bg-black/60 backdrop-blur-md" : "bg-black/0"}`}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-72 h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            opacity-20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
      </div>

      <div
        className={`relative w-full max-w-lg mx-4 transition-all duration-500 
        ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
        ${isClosing ? "translate-y-4 opacity-0" : ""}`}
      >
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br 
          from-indigo-500 via-purple-500 to-pink-500 
          shadow-2xl shadow-purple-700/50 p-1
          border border-transparent border-opacity-20 transition-all"
        >
          <div className="bg-white rounded-2xl p-5">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 
              transition-transform transform hover:scale-110 shadow-md"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>


            <div className="relative overflow-hidden rounded-xl">
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-xl transform transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>


            <div className="py-4">
              <h2
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                from-blue-600 to-purple-600"
              >
                {name}
              </h2>
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                {description}
              </p>

              <div className="flex items-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="text-sm text-gray-600">{date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600">{location}</span>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-1
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
