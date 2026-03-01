import type { Project, GalleryItem } from "../types/types.ts"

export const projects: Project[] = [
  {
    id: 1,
    title: "Tentative Benthic Habitat Mapping – Sagori Island",
    description: `
This project mapped benthic habitats around Sagori Island (Teluk Bone) 
using Sentinel-2 MSI imagery processed in Google Earth Engine 
and classified with the Random Forest algorithm.

Training variables were defined by sampling 80% ROI data 
for Random Forest, while 20% were used for testing. 
The model used 2,541 training samples and 953 testing samples, 
achieving an overall accuracy of 90.5%.

The final map classifies land, open water, coral reefs, macroalgae, 
sand, and seagrass, demonstrating the effectiveness of machine learning 
for coastal habitat mapping and marine monitoring.
`,
    images: [
      "/images/projects/gee-benthic.png",
    ],
    category: "GIS and Remote Sensing",
    tools: ["GEE", "Random Forest", "Sentinel-2", "Environment"],
    links: [
      {
        label: "Google Earth Engine",
        url: "https://www.google.com/url?sa=D&q=https://code.earthengine.google.com/15ed40afd349e0c05778f6fd914e58f7&ust=1772344518450691&usg=AOvVaw0jk9x-OnUkkQ3eKXCVlXHh",
        type: "gee"
      },
    ]
  },
  {
    id: 2,
    title: "Goundwater Level Map – Yogyakarta City",
    description: `
This project analyzes groundwater flow direction using the Spherical Kriging interpolation method to model spatial variations in groundwater levels. Point-based groundwater measurements were interpolated to generate a continuous surface, from which hydraulic gradients and flow directions were derived.

The output map visualizes groundwater flow patterns across the study area, supporting hydrogeological analysis, water resource management, and environmental planning. The project demonstrates skills in geostatistical interpolation (Kriging), spatial analysis, and cartographic visualization using GIS tools.
`,
    images: [
      "/images/projects/arcgis-airtanah.png",
    ],
    category: "GIS and Remote Sensing",
    tools: ["ArcGIS", "Kriging", "Interpolation", "Hydrology"],
    links: []
  },
  {
    id: 3,
    title: "Slope Map – Tinalah Watershed",
    description: `
This project presents a slope classification map of the Tinalah Watershed (DAS Tinalah) derived from Digital Elevation Model (DEM) data. Slope values were calculated to analyze terrain steepness and classify the area into multiple slope categories.

The analysis identifies variations in terrain from flat to steep areas, supporting applications such as watershed management, erosion risk assessment, land suitability analysis, and spatial planning.

This project demonstrates skills in terrain analysis (DEM processing), slope derivation, spatial classification, and cartographic visualization using GIS tools.
`,
    images: [
      "/images/projects/arcgis-slope.png",
    ],
    category: "GIS and Remote Sensing",
    tools: ["ArcGIS", "Slope", "DEM", "Hydrology"],
    links: []
  },

  {
    id: 4,
    title: "Mangrove Land Cover Classification – Segara Anakan, Cilacap",
    description: `
This project maps mangrove ecosystem land cover in Segara Anakan, Cilacap using a Supervised Classification approach based on satellite imagery.

Training samples (ROI) were defined for each land cover class, including water bodies, agricultural land, built-up areas, high-, medium-, and low-density mangroves, and non-mangrove vegetation. The supervised classification algorithm was then applied to generate a detailed land cover map of the mangrove ecosystem.

The output supports coastal ecosystem monitoring, mangrove density assessment, and environmental management planning.

This project demonstrates skills in remote sensing analysis, supervised classification, ROI sampling, land cover mapping, and GIS-based cartographic visualization.
`,
    images: [
      "/images/projects/envi-mangrove.png",
    ],
    category: "GIS and Remote Sensing",
    tools: ["ENVI", "Supervised Classification", "Land Cover", "Landsat 8", "Ecosystem"],
    links: []
  },

  {
    id: 5,
    title: "Mangrove Land Cover Classification – Segara Anakan, Cilacap",
    description: `
This project presents a spatial analysis of water turbidity in Gajah Mungkur Reservoir using the Zhao algorithm applied to Sentinel-2A satellite imagery (2023).

The data were processed in Google Earth Engine, including cloud masking and compositing, to generate a turbidity distribution map.

The result visualizes spatial variations in water clarity to support reservoir water quality monitoring and environmental management.
`,
    images: [
      "/images/projects/gee-tss.png",
    ],
    category: "GIS and Remote Sensing",
    tools: ["GEE", "Total Solid Suspense", "Environment", "Sentinel-2"],
    links: [{
        label: "Google Earth Engine",
        url: "https://code.earthengine.google.com/39bbf4bf7a93c69d97c3f80c50986d56",
        type: "gee"
      },]
  },

    {
    id: 6,
    title: "Archaeosite Mobile App - Yogyakarta Special Region",
    description: `
Achaeosite is a React Native–based mobile application that visualizes archaeological sites in the Special Region of Yogyakarta through an interactive geospatial map interface. 

The app enables users to explore site locations, view spatial information, and generate routes for navigation purposes. 

It also supports user-contributed data input, allowing users to add new archaeological points with latitude and longitude coordinates directly within the application.
`,
    images: [
      "/images/projects/archaeosite.png",
    ],
    category: "Web and Application",
    tools: ["React Native", "Javascript", "Mobile App", "Leaflet JS", "Bootstrap"],
    links: [{
        label: "GitHub",
        url: "https://github.com/nisamelia/archaeo-sites-3",
        type: "github"
      },]
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