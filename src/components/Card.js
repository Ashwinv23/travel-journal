import React from "react";

function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  image,
}) {
  return (
    <div className="flex">
      <img src={image} alt={title} className="h-[400px] w-1/3" />
      <div className="p-16">
        <h5 className="uppercase text-sm pr-16 pb-2">
          {`${location} `}
          <span>
            <a
              href={googleMapsUrl}
              className="underline text-gray-400 text-xs ml-2"
            >
              View on Google Maps
            </a>
          </span>
        </h5>
        <h1 className="text-4xl font-bold pb-8">{title}</h1>
        <p className="text-xs font-bold pb-4">
          {startDate} - {endDate}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
