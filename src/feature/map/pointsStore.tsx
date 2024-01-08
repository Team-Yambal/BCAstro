import { atom } from 'nanostores'
import { type LatLng } from "leaflet"

export type Point = {
  lat: number
  lng: number
  label: string
  slug: string
}

export const pointsStore = atom<Point[]>([])

export const currentPointStore = atom<Point | undefined>(undefined)