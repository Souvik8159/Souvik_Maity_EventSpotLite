import React, { useState } from "react";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

const EventCard = ({ event = {}, onClick }) => {
  const [ setIsHovered] = useState(false);

  const {
    name = "Event Name",
    date = "Upcoming",
    location = "Location TBA",
    category = "Event",
    description = "Join us for this exciting event!",
    attendees = "100+",
  } = event;

  return (
    <div
      onClick={() => onClick?.(event)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-[300px] p-6 rounded-xl cursor-pointer
        transform transition-all duration-700 ease-out
        hover:translate-y-[-8px]"
    >
      <div
        className="absolute inset-0 rounded-xl bg-white/40 
        backdrop-blur-lg border border-white/20
        shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
        transition-all duration-700"
      >
        <div
          className="absolute inset-[-2px] rounded-xl bg-gradient-to-r 
          from-purple-500/30 via-blue-500/30 to-teal-500/30 opacity-0 
          group-hover:opacity-100 transition-opacity duration-700 -z-10"
        />
      </div>

      <div
        className="absolute -top-4 -right-4 w-20 h-20 
        bg-blue-400/20 rounded-full blur-2xl 
        animate-pulse transition-all duration-700 
        opacity-0 group-hover:opacity-100"
      />

      <div
        className="absolute -bottom-4 -left-4 w-20 h-20 
        bg-violet-400/20 rounded-full blur-2xl 
        animate-pulse transition-all duration-700 
        opacity-0 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full 
          text-xs font-medium bg-gradient-to-r 
          from-blue-500/10 to-purple-500/10 
          text-blue-600 mb-4 
          transition-all duration-700
          group-hover:from-blue-500/20 group-hover:to-violet-500/20"
        >
          {category}
        </div>

        <h2
          className="text-xl font-semibold mb-3
          bg-gradient-to-r from-gray-900 to-gray-600
          group-hover:from-blue-600 group-hover:to-violet-600
          bg-clip-text text-transparent
          transition-all duration-700"
        >
          {name}
          <ArrowUpRight
            className="inline ml-2 w-5 h-5 
            opacity-0 group-hover:opacity-100 
            transform -translate-y-1 translate-x-1
            transition-all duration-700"
          />
        </h2>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div
            className="flex items-center space-x-1.5
            group-hover:text-blue-600 transition-colors duration-700"
          >
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>

          <div
            className="flex items-center space-x-1.5
            group-hover:text-violet-600 transition-colors duration-700"
          >
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>

        <p
          className="mt-4 text-sm text-gray-600/90 
          transition-all duration-700 leading-relaxed
          group-hover:text-gray-700"
        >
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white
                bg-gradient-to-r from-blue-500 to-violet-500 
                transform transition-transform duration-700
                group-hover:translate-x-1"
              />
            ))}
          </div>
          <span
            className="text-sm font-medium text-gray-600
            group-hover:text-blue-600 transition-colors duration-700"
          >
            {attendees} attending
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
