import type { Project, GalleryItem } from "../types/types.ts"

// ======================
// IMPORT PROJECT IMAGES
// ======================
import benthicImg from "../assets/images/projects/gee-benthic.png"
import groundwaterImg from "../assets/images/projects/arcgis-airtanah.png"
import slopeImg from "../assets/images/projects/arcgis-slope.png"
import mangroveImg from "../assets/images/projects/envi-mangrove.png"
import turbidityImg from "../assets/images/projects/gee-tss.png"
import archaeositeImg from "../assets/images/projects/archaeosite.png"
import gesturoImg from "../assets/images/projects/gesturo.png"
import sentimapImg from "../assets/images/projects/python-sentimap.png"
import retailImg from "../assets/images/projects/python-retailexp.png"
import webgisImg from "../assets/images/projects/webgis-makmur.png"
import covidImg from "../assets/images/projects/tableau-covid.png"

// ======================
// IMPORT GALLERY IMAGES
// ======================
import sakalaImg from "../assets/images/gallery/sakala.png"
import sakala2Img from "../assets/images/gallery/sakala_2.jpg"
import kknImg from "../assets/images/gallery/kkn.png"
import bangkitGalleryImg from "../assets/images/gallery/bangkit.png"

export const projects: Project[] = [
  {
    id: 1,
    title: "Tentative Benthic Habitat Mapping – Sagori Island",
    description: `...`,
    images: [benthicImg],
    category: "GIS and Remote Sensing",
    tools: ["GEE", "Random Forest", "Sentinel-2", "Environment"],
    links: [
      {
        label: "Google Earth Engine",
        url: "https://code.earthengine.google.com/15ed40afd349e0c05778f6fd914e58f7",
        type: "gee"
      }
    ]
  },
  {
    id: 2,
    title: "Goundwater Level Map – Yogyakarta City",
    description: `...`,
    images: [groundwaterImg],
    category: "GIS and Remote Sensing",
    tools: ["ArcGIS", "Kriging", "Interpolation", "Hydrology"],
    links: []
  },
  {
    id: 3,
    title: "Slope Map – Tinalah Watershed",
    description: `...`,
    images: [slopeImg],
    category: "GIS and Remote Sensing",
    tools: ["ArcGIS", "Slope", "DEM", "Hydrology"],
    links: []
  },
  {
    id: 4,
    title: "Mangrove Land Cover Classification – Segara Anakan, Cilacap",
    description: `...`,
    images: [mangroveImg],
    category: "GIS and Remote Sensing",
    tools: ["ENVI", "Supervised Classification", "Land Cover", "Landsat 8", "Ecosystem"],
    links: []
  },
  {
    id: 5,
    title: "Mangrove Land Cover Classification – Segara Anakan, Cilacap",
    description: `...`,
    images: [turbidityImg],
    category: "GIS and Remote Sensing",
    tools: ["GEE", "Total Solid Suspense", "Environment", "Sentinel-2"],
    links: [
      {
        label: "Google Earth Engine",
        url: "https://code.earthengine.google.com/39bbf4bf7a93c69d97c3f80c50986d56",
        type: "gee"
      }
    ]
  },
  {
    id: 6,
    title: "Archaeosite Mobile App - Yogyakarta Special Region",
    description: `...`,
    images: [archaeositeImg],
    category: "Web and Application",
    tools: ["React Native", "Javascript", "Mobile App", "Leaflet JS", "Bootstrap"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nisamelia/archaeo-sites-3",
        type: "github"
      }
    ]
  },
  {
    id: 7,
    title: "Gesturo – Bangkit Capstone Project",
    description: `...`,
    images: [gesturoImg],
    category: "Web and Application",
    tools: ["Kotlin", "Android Studio", "Figma", "Machine Learning"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/gesturo-team/Mobile-Development",
        type: "github"
      }
    ]
  },
  {
    id: 8,
    title: "SentiMapJogja – Tourism Sentiment Analysis Dashboard",
    description: `...`,
    images: [sentimapImg],
    category: "Data Science",
    tools: ["Python", "Streamlit", "Sentiment Analysis", "Lexicon-Based Method", "Data Mining"],
    links: [
      {
        label: "Streamlit",
        url: "https://sentimenspasialwisatadiy2023.streamlit.app/",
        type: "streamlit"
      }
    ]
  },
  {
    id: 9,
    title: "Retail Expansion Analysis – OKU vs South Tangerang",
    description: `...`,
    images: [retailImg],
    category: "Data Science",
    tools: [
      "Data Science",
      "Python",
      "Streamlit",
      "Spatial Analysis",
      "Dasymetric Mapping",
      "NDBI",
      "Multi-Criteria Analysis"
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nisamelia/retail-expansion",
        type: "github"
      },
      {
        label: "Streamlit",
        url: "https://nisa-retail-analysis.streamlit.app/",
        type: "streamlit"
      }
    ]
  },
  {
    id: 10,
    title: "WebGIS – Restaurant Distribution Map of East Java",
    description: `...`,
    images: [webgisImg],
    category: "Web and Application",
    tools: ["Leaflet", "PHP", "Bootstrap", "PostGIS", "CodeIgniter", "WebGIS Development"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nisamelia/RM-Jawa-Timur",
        type: "github"
      }
    ]
  },
  {
    id: 11,
    title: "Global COVID-19 Confirmed Cases Dashboard (2020)",
    description: `...`,
    images: [covidImg],
    category: "Data Visualization",
    tools: [
      "Tableau",
      "Choropleth Mapping",
      "Spatial Analysis",
      "Data Visualization",
      "Thematic Mapping"
    ],
    links: [
      {
        label: "Tableau",
        url: "https://public.tableau.com/app/profile/nisa.amelia/viz/PraktikumVDS-NisaAmelia-21483034SV20055-B-PetaCovid-19Terkonfirmasi/Dashboard1",
        type: "demo"
      }
    ]
  }
]

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    image: sakalaImg,
    title: "(ง •̀_•́)ง Dassa Internship",
    date: "December 2025"
  },
  {
    id: 2,
    image: sakala2Img,
    title: "(ﾉ◕ヮ◕)ﾉ MRV Platform Launch",
    date: "December 2025"
  },
  {
    id: 3,
    image: kknImg,
    title: "(づ｡◕‿‿◕｡)づ Community Service – Demak",
    date: "July 2024"
  },
  {
    id: 4,
    image: bangkitGalleryImg,
    title: "(•̀ᴗ•́)و Bangkit Capstone Project",
    date: "April 2024"
  }
]

export interface Experience {
  id: number
  role: string
  company: string
  period: string
  tools: string[]
  description: string[]
  location: string
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Dassa Corp",
    period: "Sep - Dec 2025",
    location: "Central Jakarta, Indonesia",
    tools: [
      "React",
      "TypeScript",
      "MapLibre",
      "GeoJson",
      "KML",
      "Teamwork",
      "Creativity and Inovation",
      "UAT",
      "Manual Testing"
    ],
    description: [
      "Bridged carbon project documentation and MRV system for carbon project implementation by translating project design and monitoring requirements into GIS-based MRV features.",
      "Designed and executed basic QA test cases for MRV features, including functional testing of map layers, spatial data validation, and end-to-end user workflows",
    ]
  },
  {
    id: 4,
    role: "Teaching Assistant – Geospatial Data Science Practicum",
    company: "Universitas Gadjah Mada (Department of Earth Science – Vocational School)",
    location: "Yogyakarta, Indonesia",
    period: "Feb - Jun 2025",
    tools: [
      "GDAL/OGR (CLI & Python)",
      "Python",
      "Google Earth Engine",
      "Geemap",
      "Remote Sensing",
      "Spatial Analysis"
    ],
    description: [
      "Provided technical and academic assistance to 74 students across 12 laboratory sessions throughout the semester.",
      "Facilitated hands-on exercises in geospatial data processing using GDAL/OGR (CLI & Python) and geospatial data science workflows in Python.",
      "Guided practical sessions on image transformation, supervised and unsupervised classification, OBIA, SMA, change detection analysis, and regression modeling in Google Earth Engine."
    ]
  },
  {
    id: 2,
    role: "Geographic Information System Intern",
    company: "Regional Development Planning Agency (Bappeda) – Special Region of Yogyakarta",
    period: "Sep - Dec 2024",
    location: "Yogyakarta, Indonesia",
    tools: [
      "ArcGIS Pro",
      "ArcGIS Enterprise",
      "Geocoding",
      "Spatial Data Management"
    ],
    description: [
      "Collected and validated 2,000+ coordinate points of public facilities, performed geocoding, and transformed 100+ tabular datasets into structured spatial data to enhance regional geospatial databases.",
      "Digitized 14 official geoheritage sites across the Special Region of Yogyakarta and developed interactive dashboards using ArcGIS Enterprise for dynamic spatial data visualization.",
      "Built and optimized WebGIS applications by integrating multi-source spatial datasets and improving map performance and usability.",
      "Participated in the preparation of spatial data presentations and materials for the Bhumandala Award representation of the Special Region of Yogyakarta."
    ]
  },
  {
    id: 3,
    role: "Geographic Information System Operator",
    company: "Inderaja Teknik Indonesia",
    location: "Yogyakarta, Indonesia",
    period: "Jan - Feb 2024",
    tools: [
      "Agisoft Metashape",
      "Photogrammetry",
      "Aerial Survey Processing",
      "GIS Mapping",
      "Mobile App Development"
    ],
    description: [
      "Processed aerial photographs using Agisoft Metashape to generate orthomosaics and spatial outputs from aerial survey data.",
      "Designed and produced comprehensive map layouts to effectively visualize geospatial information derived from processed imagery.",
      "Developed a mobile application (Logbook Surveyor) to streamline and digitize field survey logbook documentation, improving reporting efficiency."
    ]
  }
]