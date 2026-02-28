import type { Project, GalleryItem } from "../types/types.ts"

export const projects: Project[] = [
  {
    id: 1,
    title: "Land Use Change Detection",
    description:
      "Spectral Mixture Analysis using Landsat 2014 & 2022 in Google Earth Engine.",
    tech: ["Google Earth Engine", "Landsat", "Remote Sensing"],
    image:  "/images/projects/arcgis-airtanah.png"
  },
  {
    id: 2,
    title: "POI QC Automation Tool",
    description:
      "Python automation tool for cleaning and validating POI data.",
    tech: ["Python", "FastAPI", "GeoJSON"],
    image: "/images/projects/arcgis-rain.png"
  }
]

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: "/images/projects/arcgis-airtanah.png",
    title: "Land Cover Change Analysis",
    date: "January 2024"
  },
  {
    id: 2,
    image: "/images/projects/arcgis-airtanah.png",
    title: "WebGIS Dashboard Development",
    date: "March 2024"
  },
  {
    id: 3,
    image: "/images/projects/arcgis-airtanah.png",
    title: "POI Data Cleaning Automation",
    date: "June 2024"
  },
    {
    id: 4,
    image: "/images/projects/arcgis-airtanah.png",
    title: "POI Data Cleaning Automation",
    date: "June 2024"
  },
    {
    id: 5,
    image: "/images/projects/arcgis-airtanah.png",
    title: "POI Data Cleaning Automation",
    date: "June 2024"
  }
]