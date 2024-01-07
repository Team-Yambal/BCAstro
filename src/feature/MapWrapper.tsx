import { Map, type MapProps } from '../components/Map'
import { MapContents } from './MapContents'
import { pointsStore, type Point } from './pointsStore'

export type MapWrapperProps = MapProps & {
  points: Point[]
}

export const MapWrapper = ({
  points,
  ...props
}:MapWrapperProps) => {
  pointsStore.set(points)
  return (
    <Map {...props}>
      <MapContents />
    </Map>
  )
}