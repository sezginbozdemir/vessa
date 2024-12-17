"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function GoogleMaps() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "quartely",
      });

      const { Map } = await loader.importLibrary("maps");

      const locationInMap = {
        lat: 45.75637453135406,
        lng: 21.212570016642886,
      };

      // MARKER
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const options: google.maps.MapOptions = {
        center: locationInMap,
        zoom: 18,
        mapId: "NEXT_MAPS_TUTS",
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);

      // add the marker in the map
      new Marker({
        map: map,
        position: locationInMap,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    };

    initializeMap();
  }, []);

  return (
    <div
      className="h-[600px]"
      ref={mapRef}
    />
  );
}
