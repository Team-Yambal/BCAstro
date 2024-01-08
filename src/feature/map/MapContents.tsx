import { Marker, Popup, useMap, useMapEvents } from "react-leaflet"
import L, { type LatLng, type LeafletMouseEvent } from "leaflet"
import { useStore } from '@nanostores/react'
import { currentPointStore, pointsStore } from './pointsStore'
import React, { useCallback, useEffect } from 'react'


export const MapContents = () => {
  const points = useStore(pointsStore)
  const currentPoint = useStore(currentPointStore)

  const map = useMapEvents({
    move() {
      // console.log(map.getCenter())
    },
  })

  const clickMakerHandler = useCallback((e: LeafletMouseEvent) => {
    const latlng = e.latlng
    const hit = points.find((point) => {
      return point.lat === latlng.lat && point.lng === latlng.lng
    })
    currentPointStore.set(hit)
  },[currentPoint])

  /**
   * マーカーすべてが収まるようにする
   */
  useEffect(() => {
    map.fitBounds(points.map((point) => {
      return [point.lat, point.lng]
    }))
  }, [points])

  useEffect(() => {
    if(currentPoint) {
      map.panTo([currentPoint?.lat, currentPoint?.lng])
    }
  }, [currentPoint])

  return (
    <>
      {points.map((point, index) => {
          return (
            <Marker
              position={point}
              key={`point-${index}`}
              eventHandlers={{
                click: (e) =>  clickMakerHandler(e),
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