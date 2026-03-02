export type Category =
  | "All"
  | "Data Science"
  | "Web and Application"
  | "GIS and Remote Sensing"

  export interface ProjectLink {
  label: string
  url: string
  type: "github" | "streamlit" | "arcgis" | "gee" | "demo"
}

export interface Project {
  id: number
  title: string
  description: string
  images: string[]
  category: string
  tools: string[]
  links?: ProjectLink[]
}

export interface GalleryItem {
  id: number
  image: string
  title: string
  date: string
}