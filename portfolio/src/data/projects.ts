import type { Project } from "../types/projects.ts"

export const projects: Project[] = [
  {
    id: 1,
    title: "Land Use Change Detection",
    description:
      "Spectral Mixture Analysis (SMA) using Landsat 2014 & 2022 in Google Earth Engine with cloud masking and median composite.",
    tech: ["Google Earth Engine", "Landsat", "Remote Sensing"]
  },
  {
    id: 2,
    title: "POI QC Automation Tool",
    description:
      "Python-based automation tool to clean null values, validate coordinates, and classify POI categories using FastAPI.",
    tech: ["Python", "FastAPI", "GeoJSON"]
  },
  {
    id: 3,
    title: "WebGIS Dashboard",
    description:
      "Interactive WebGIS platform for visualizing spatial analysis results with filtering and real-time data.",
    tech: ["React", "Leaflet", "Tailwind"]
  }
]