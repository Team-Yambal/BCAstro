import { Marker, Popup, useMap, useMapEvents } from "react-leaflet"
import { type LatLng } from "leaflet"
import { useStore } from '@nanostores/react'
import { pointsStore } from '../store/pointsStore'
import React, { useCallback } from 'react'


export const MapContents = () => {
  const points = useStore(pointsStore)
  const map = useMapEvents({
    move() {
      console.log(map.getCenter())
    },
  })

  const clickHandler = useCallback((latlng:LatLng) => {
    console.log('click', latlng)
    map.panTo(latlng)
  },[])

  return (
    <>
      {points.map((point, index) => {
          return (
            <Marker
              position={point} key={`point-${index}`}
              eventHandlers={{
                click: (e) => {
                  clickHandler(e.latlng)
                },
              }}
            >
              <Popup>
                {point.label}
              </Popup>
            </Marker>
          )
        })
      }
    </> 
  )
}