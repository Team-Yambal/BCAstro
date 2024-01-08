import { useCallback } from 'react'
import { Map, type MapProps } from '../../components/Map'
import { MapContents } from './MapContents'
import { pointsStore, type Point, currentPointStore } from './pointsStore'
import { useStore } from '@nanostores/react'

export type MapWrapperProps = Omit<MapProps, 'children'> & {
  points: Point[]
}

export const MapWrapper = ({
  points,
  ...props
}:MapWrapperProps) => {
  pointsStore.set(points)
  const currentPoint = useStore(currentPointStore)

  const listClickHandler = useCallback((e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const slug = e.currentTarget.dataset.slug
    const hit = points.find((point) => {
      return point.slug === slug
    })
    currentPointStore.set(hit)
  }, [currentPoint])

  return (
    <>
      <Map {...props}>
        <MapContents />
      </Map>
      <ul>
        {points.map((point) => {
          const isCurrent = currentPoint?.slug === point.slug
          return (
            <li onClick={listClickHandler} data-slug={point.slug} >{isCurrent && '> '}{point.label}</li>
          )
        })}
      </ul>
    </>
  )
}