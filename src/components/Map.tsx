import { MapContainer, TileLayer, useMap, Marker, Popup, type MapContainerProps } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

/*
import { useStore } from '@nanostores/react';

import { pointsStore } from '../store/points'
*/
export type MapProps = MapContainerProps & {
  children: React.ReactNode
}


export const Map = ({
  children,
  ...props
}:MapProps) => {
  return (
    <MapContainer {...props}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  )
}