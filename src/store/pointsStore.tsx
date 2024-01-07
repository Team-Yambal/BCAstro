import { atom } from 'nanostores'
import { type LatLng } from "leaflet"

export type Point = {
  lat: number
  lng: number
  label: string
}

export const pointsStore = atom<Point[]>([])