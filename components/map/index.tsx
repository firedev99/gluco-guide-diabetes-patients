"use client"

import { useRef, useState } from "react"
import ReactMap, { Marker, Popup } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import Image from "next/image"
import Icon from "../icons"
import { HOSPITALS } from "@/lib/dummy/hospitals"

type MapFeatureType = {
  type: string
  properties: any
  geometry: {
    coordinates: number[]
    type: string
  }
  id: string
}

export default function Map() {
  const [viewState, setViewState] = useState({
    latitude: 23.752,
    longitude: 90.391,
    zoom: 12.5,
  })

  const [isLoaded, setIsLoaded] = useState(false)
  const mapRef = useRef<any>(null)

  const [selectedHospital, setSelectedHospital] =
    useState<MapFeatureType | null>(null)

  return (
    <div className="w-full h-80 sm:h-[400px] mt-1">
      <ReactMap
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ width: "100%", height: "100%" }}
        onMove={(e) => setViewState(e.viewState)}
        onLoad={() => setIsLoaded(true)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        ref={mapRef}
        {...viewState}
      >
        {HOSPITALS.map((hospital) => (
          <Marker
            key={hospital.id}
            latitude={hospital.geometry.coordinates[1]}
            longitude={hospital.geometry.coordinates[0]}
            onClick={() => {
              if (!mapRef.current) return
              setSelectedHospital(hospital)
              mapRef.current.flyTo({
                center: [
                  hospital.geometry.coordinates[0],
                  hospital.geometry.coordinates[1],
                ],
                zoom: viewState.zoom,
                speed: 1,
              })
            }}
          >
            <div
              key={hospital.id}
              className="center ring-4 ring-blue-500 marker-btn cursor-pointer size-10 bg-slate-100 rounded-full"
            >
              <div className="relative size-6">
                <Image
                  fill
                  src="https://res.cloudinary.com/dwhlynqj3/image/upload/v1720969669/glucoguide/gluco-guide-logo.png"
                  alt={`${hospital.properties.name}.jpg`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </Marker>
        ))}

        {selectedHospital && (
          <Popup
            key={selectedHospital.id}
            longitude={selectedHospital.geometry.coordinates[0]}
            latitude={selectedHospital.geometry.coordinates[1]}
            closeOnClick={false}
            className="min-w-[256px] relative"
            closeButton={false}
          >
            <div className="flex">
              <button
                onClick={() => {
                  setSelectedHospital(null)
                }}
              >
                <Icon
                  name="cross"
                  className="min-w-4 size-4 absolute right-1.5 top-1.5"
                />
              </button>
              <div className="relative min-w-24 w-24 min-h-20">
                <Image
                  fill
                  src={selectedHospital.properties.img_src}
                  alt="gluco-guide-logo.png"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col my-auto ml-2">
                <h3 className="text-sm leading-4 font-semibold opacity-80 text-[--primary-black]">
                  {selectedHospital.properties.name}
                </h3>
                <span className="text-xs opacity-80 leading-3 text-start">
                  {selectedHospital.properties.address}
                </span>
              </div>
            </div>
          </Popup>
        )}
      </ReactMap>
    </div>
  )
}
