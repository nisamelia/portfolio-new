import type { Project, GalleryItem } from "../types/types.ts"

export const projects: Project[] = [
  {
    id: 1,
    title: "Land Cover Change Detection",
    description: "Spectral Mixture Analysis using Landsat imagery.",
    image: "/images/project1.jpg",
    category: "GIS and Remote Sensing",
  },
  {
    id: 2,
    title: "MRV System Dashboard",
    description: "Carbon monitoring and reporting web platform.",
    image: "/images/project2.jpg",
    category: "Web and Application",
  },
  {
    id: 3,
    title: "Sentiment Mapping Analysis",
    description: "Tourism sentiment analysis using spatial clustering.",
    image: "/images/project3.jpg",
    category: "Data Science",
  },
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

export interface Experience {
  id: number
  role: string
  company: string
  period: string
  tools: string[]
  description: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Developer Intern (MRV)",
    company: "Carbon Project Organization",
    period: "2024",
    tools: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST API"
    ],
    description: [
      "Developed features for Monitoring, Reporting, and Verification (MRV) system.",
      "Implemented validation workflows and reporting modules.",
      "Collaborated with cross-functional teams for carbon project tracking."
    ]
  },
  {
    id: 2,
    role: "WebGIS Developer Intern",
    company: "Geospatial Lab",
    period: "2023",
    tools: [
      "React",
      "Leaflet",
      "GeoJSON",
      "PostGIS",
      "Google Earth Engine"
    ],
    description: [
      "Built interactive WebGIS applications.",
      "Integrated spatial datasets and optimized map performance.",
      "Automated spatial data validation workflows."
    ]
  }
]