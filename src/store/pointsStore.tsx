import { atom } from 'nanostores'
import { type LatLng } from "leaflet"

export type Point = LatLng & {
  label: string
}

export const pointsStore = atom<Point[]>([])