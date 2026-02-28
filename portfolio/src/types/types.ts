export type Category =
  | "All"
  | "Data Science"
  | "Web and Application"
  | "GIS and Remote Sensing"

export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: Category
}

export interface GalleryItem {
  id: number
  image: string
  title: string
  date: string
}