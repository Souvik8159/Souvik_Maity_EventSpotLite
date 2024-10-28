import React, { useState, useEffect } from "react";
import eventsData from "../data/events.json";
import EventCard from "../Components/EventCard.jsx";
import EventModal from "../Components/EventModal.jsx";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";

function EventList({ searchTerm }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [animatedLoading, setAnimatedLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredEvents = eventsData.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEventClick = (event) => {
    setLoading(true);
    setSelectedEvent(event);
    setTimeout(() => setLoading(false), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-pink-50 to-green-200">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-24 px-6 pb-12 max-w-8xl mx-auto">
        <div className="mb-8 text-center animate__animated animate__fadeIn">
          <h1
            className="text-3xl font-bold bg-gradient-to-b from-cyan-600 to-green-400 
            bg-clip-text text-transparent mb-3"
          >
            Upcoming Events
          </h1>
          {searchTerm && (
            <p className="text-slate-600">Showing results for "{searchTerm}"</p>
          )}
        </div>

        <div className="relative">
          {animatedLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {filteredEvents.length === 0 ? (
                <div className="text-center py-20 animate__animated animate__fadeIn">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 
                    rounded-full bg-slate-100 mb-4"
                  >
                    <svg
                      className="w-8 h-8 text-slate-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-700 mb-2">
                    No events found
                  </h3>
                  <p className="text-slate-500">
                    Try adjusting your search terms
                  </p>
                </div>
              ) : (
                <div
                  className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                  animate__animated animate__fadeIn"
                >
                  {filteredEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className="animate__animated animate__fadeIn"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <EventCard event={event} onClick={handleEventClick} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {loading && (
          <div
            className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 
            flex items-center justify-center"
          >
            <LoadingSpinner />
          </div>
        )}

        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}

        <div
          className="absolute bottom-0 left-0 right-0 h-32 
          bg-gradient-to-t from-white to-transparent pointer-events-none"
        ></div>
      </div>
    </div>
  );
}

export default EventList;
