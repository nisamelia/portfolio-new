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
import hansenImg from "../assets/images/projects/hansen-forest.png"
import hotspotImg from "../assets/images/projects/mann-kendal.png"
import spalabImg from "../assets/images/projects/spatial-lab.png"
import landuseImg from "../assets/images/projects/land_use.png"
import banjirImg from "../assets/images/projects/sda-banjir.png"
import ppkImg from "../assets/images/projects/ppk.png"

// ======================
// IMPORT GALLERY IMAGES
// ======================
import sakalaImg from "../assets/images/gallery/sakala.png"
import sakala2Img from "../assets/images/gallery/sakala_2.png"
import kknImg from "../assets/images/gallery/kkn.png"
import bangkitGalleryImg from "../assets/images/gallery/bangkit.png"
import rdkImg from "../assets/images/gallery/rdk-publi.png"
import pklImg from "../assets/images/gallery/pkl-2.png"

export const projects: Project[] = [
  {
    id: 1,
    title: "Tentative Benthic Habitat Mapping – Sagori Island",
    description: `This project mapped benthic habitats around Sagori Island (Teluk Bone) 
using Sentinel-2 MSI imagery processed in Google Earth Engine 
and classified with the Random Forest algorithm.

Training variables were defined by sampling 80% ROI data 
for Random Forest, while 20% were used for testing. 
The model used 2,541 training samples and 953 testing samples, 
achieving an overall accuracy of 90.5%.

The final map classifies land, open water, coral reefs, macroalgae, 
sand, and seagrass, demonstrating the effectiveness of machine learning 
for coastal habitat mapping and marine monitoring.`,
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
    description: `This project analyzes groundwater flow direction using the Spherical Kriging interpolation method to model spatial variations in groundwater levels. Point-based groundwater measurements were interpolated to generate a continuous surface, from which hydraulic gradients and flow directions were derived.

The output map visualizes groundwater flow patterns across the study area, supporting hydrogeological analysis, water resource management, and environmental planning. The project demonstrates skills in geostatistical interpolation (Kriging), spatial analysis, and cartographic visualization using GIS tools.`,
    images: [groundwaterImg],
    category: "GIS and Remote Sensing",
    tools: ["ArcGIS", "Kriging", "Interpolation", "Hydrology"],
    links: []
  },
  {
    id: 3,
    title: "Slope Map – Tinalah Watershed",
    description: `This project presents a slope classification map of the Tinalah Watershed (DAS Tinalah) derived from Digital Elevation Model (DEM) data. Slope values were calculated to analyze terrain steepness and classify the area into multiple slope categories.

The analysis identifies variations in terrain from flat to steep areas, supporting applications such as watershed management, erosion risk assessment, land suitability analysis, and spatial planning.

This project demonstrates skills in terrain analysis (DEM processing), slope derivation, spatial classification, and cartographic visualization using GIS tools.`,
    images: [slopeImg],
    category: "GIS and Remote Sensing",
    tools: ["ArcGIS", "Slope", "DEM", "Hydrology"],
    links: []
  },
  {
    id: 4,
    title: "Mangrove Land Cover Classification – Segara Anakan, Cilacap",
    description: `This project maps mangrove ecosystem land cover in Segara Anakan, Cilacap using a Supervised Classification approach based on satellite imagery.

Training samples (ROI) were defined for each land cover class, including water bodies, agricultural land, built-up areas, high-, medium-, and low-density mangroves, and non-mangrove vegetation. The supervised classification algorithm was then applied to generate a detailed land cover map of the mangrove ecosystem.

The output supports coastal ecosystem monitoring, mangrove density assessment, and environmental management planning.

This project demonstrates skills in remote sensing analysis, supervised classification, ROI sampling, land cover mapping, and GIS-based cartographic visualization.`,
    images: [mangroveImg],
    category: "GIS and Remote Sensing",
    tools: ["ENVI", "Supervised Classification", "Land Cover", "Landsat 8", "Ecosystem"],
    links: []
  },
  {
    id: 5,
    title: "Mangrove Land Cover Classification – Segara Anakan, Cilacap",
    description: `This project presents a spatial analysis of water turbidity in Gajah Mungkur Reservoir using the Zhao algorithm applied to Sentinel-2A satellite imagery (2023).

The data were processed in Google Earth Engine, including cloud masking and compositing, to generate a turbidity distribution map.

The result visualizes spatial variations in water clarity to support reservoir water quality monitoring and environmental management.`,
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
    description: `Achaeosite is a React Native–based mobile application that visualizes archaeological sites in the Special Region of Yogyakarta through an interactive geospatial map interface. 

The app enables users to explore site locations, view spatial information, and generate routes for navigation purposes. 

It also supports user-contributed data input, allowing users to add new archaeological points with latitude and longitude coordinates directly within the application.`,
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
    description: `Gesturo is a sign language learning mobile application developed using Kotlin in Android Studio, with UI/UX designed in Figma.

Built as a collaborative capstone project, the app integrates machine learning models for real-time gesture recognition and utilizes cloud computing services for model deployment and data processing.

The development was carried out in cross-functional collaboration with Machine Learning and Cloud Computing cohorts to deliver an intelligent, scalable, and accessible learning platform.`,
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
    description: `SentiMapJogja is an undergraduate thesis project focused on mapping public sentiment toward tourism destinations in the Special Region of Yogyakarta (2023) using Twitter data.

The project was developed using Python and visualized through an interactive Streamlit dashboard. A lexicon-based sentiment analysis approach was applied to more than 25,000 collected tweets, resulting in 2,685 cleaned and processed data points for final analysis.

The platform presents sentiment distribution and spatial insights to support data-driven understanding of tourism perception in the region.`,
    images: [sentimapImg],
    category: "Data Science",
    tools: ["Python", "Streamlit", "Sentiment Analysis", "Lexicon-Based Method", "Data Mining"],
    links: [
      {
        label: "Streamlit",
        url: "https://sentimenspasialwisatadiy2023.streamlit.app/",
        type: "streamlit"
      },
      {
        label: "Hak Cipta",
        url: "https://pdki-indonesia.dgip.go.id:/link/45433030323032353136393930357c636f70797269676874",
        type: "others"
      }
    ]
  },
  {
    id: 9,
    title: "Retail Expansion Analysis – OKU vs South Tangerang",
    description: `This project analyzes retail expansion potential between Ogan Komering Ulu (OKU) Regency and South Tangerang City using a grid-based spatial approach as the core analytical framework.

Multiple geospatial datasets were integrated, including World Settlement Footprint (WSF), OpenStreetMap (OSM) building data, Google Earth Engine catalog imagery, official RTRW spatial plans (South Tangerang via geoportal and OKU digitized from published maps), Ina-Geoportal road data, and BPS population statistics. A dasymetric mapping technique was applied to redistribute population data using building footprints and NDBI to produce a more realistic population density surface.

The suitability model incorporates key parameters such as flood risk, road buffer accessibility, built-up intensity, and compliance with local spatial planning regulations, resulting in a spatially explicit retail potential map to support location-based decision-making.`,
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
    description: `This project is an interactive WebGIS application designed to visualize the spatial distribution of restaurants across East Java.

The system integrates geospatial mapping, tabular data management, and dashboard visualization, enabling users to explore restaurant locations, view attribute information, and manage data entries dynamically. The platform includes interactive maps, statistical charts, and a structured database table interface.

Built as a full-stack geospatial web application, it demonstrates spatial data visualization, CRUD functionality, and web-based GIS implementation for regional-level analysis.`,
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
    description: `This project presents a global visualization dashboard of confirmed COVID-19 cases in 2020 using multiple thematic and statistical mapping techniques.

The dashboard includes treemap charts, choropleth maps, proportional symbol maps, packed bubble charts, line graphs, and heat maps to analyze spatial and temporal distribution patterns of confirmed cases worldwide.

Developed as a data visualization project, it highlights multi-representation geospatial analysis to enhance insight extraction from large-scale global health data.`,
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
  },
  {
  id: 12,
  title: "Hotspot Trend Analysis – Kalimantan (Mann-Kendall)",
  description: `
This project analyzes long-term fire hotspot trends across Kalimantan using the non-parametric Mann–Kendall trend test to detect monotonic changes over time.

Hotspot data were pre-processed and managed in QGIS, including spatial filtering, grid-based aggregation, and training sample preparation. The statistical trend analysis and modeling were performed in R to identify significant increasing or decreasing fire activity patterns.

The output map visualizes statistically significant hotspot trends, supporting environmental monitoring, fire risk assessment, and regional land management strategies.

This project demonstrates integration between desktop GIS (QGIS) for spatial data engineering and R for statistical modeling and geospatial machine learning workflows.
`,
  images: [hotspotImg],
  category: "Data Science",
  tools: [
    "QGIS",
    "R",
    "Mann-Kendall Test",
    "Spatial Analysis",
    "Environmental Monitoring"
  ],
  links: []
},
{
  id: 13,
  title: "Hansen Global Forest Change Processing – Indonesia",
  description: `
This project processed Hansen Global Forest Change datasets by merging multiple global grid tiles into a seamless national-scale forest layer for Indonesia.

All raster grids were mosaicked and managed using QGIS, followed by visualization enhancement and reclassification for forest cover interpretation. The processed dataset was then converted into Cloud Optimized GeoTIFF (COG) format to enable efficient web-based visualization and scalable WebGIS deployment.

The workflow optimized raster storage, reduced file redundancy, and improved loading performance for web mapping applications.

This project demonstrates advanced raster processing, large-scale geospatial data management, and preparation of analysis-ready datasets for WebGIS environments.
`,
  images: [hansenImg],
  category: "GIS and Remote Sensing",
  tools: [
    "QGIS",
    "Raster Mosaicking",
    "COG Conversion",
    "GeoTIFF Optimization",
    "WebGIS"
  ],
  links: []
},
{
  id: 14,
  title: "Spatial Lab - Geospatial Automation Toolkit (In Development)",
  description: `
Spatial-Lab is an evolving geospatial automation toolkit currently under development. It is designed as a modular platform to streamline spatial data validation, cleaning, and analysis workflows.

The first core feature, GeoClean, focuses on automated spatial data quality control, including coordinate validation, null detection, duplicate removal, boundary verification, and export-ready outputs (CSV & GeoJSON) with interactive visualization support.

Spatial-Lab is being built as a customizable environment that will continuously expand with new geospatial tools tailored to real-world project needs and workflow efficiency.

This project reflects my long-term vision of building scalable, automation-driven solutions for geospatial data processing and analysis.
`,
  images: [spalabImg],
  category: "Web and Application",
  tools: [
    "Python",
    "Streamlit",
    "GeoPandas",
    "Pandas",
    "Folium",
    "Spatial Data Validation",
    "Geospatial Automation"
  ],
  links: []
},

{
  id: 15,
  title: "Special Region of Yogyakarta - Land Use Mapping (2022)",
  description: `
Conducted land use/land cover classification using satellite imagery to support spatial analysis within the “PETARUNG” project. Applied a supervised classification approach using ENVI to classify land cover types, achieving an overall accuracy of 86%.

The workflow included image preprocessing, training sample selection, and classification, followed by accuracy assessment. Field survey (ground truth) data were collected and used to validate the classification results, ensuring reliability and consistency.

This project demonstrates the application of remote sensing techniques and image processing tools in producing accurate and validated land cover information for real-world geospatial analysis.
`,
  images: [landuseImg],
  category: "GIS and Remote Sensing",
  tools: [
    "ENVI",
    "Land Use",
    "Supervised Classification",
  ],
  links: []
},

{
  id: 16,
  title: "North Jakarta - Flood Prone Map (2022)",
  description: `
Developed a flood vulnerability analysis for North Jakarta using Sentinel-1 SAR imagery within the Google Earth Engine platform. The analysis leveraged VH polarization to identify surface moisture patterns associated with flood-prone areas.

The workflow included data filtering, parameter selection, flood index calculation, and spatial visualization using cloud-based processing. The results highlighted high-risk zones, particularly in densely populated areas with inadequate drainage systems.

This project demonstrates the application of cloud computing and remote sensing techniques for disaster risk assessment, providing insights to support flood mitigation and urban planning.
`,
  images: [banjirImg],
  category: "GIS and Remote Sensing",
  tools: [
    "Google Earth Engine",
    "Flood Mapping",
    "Sentinel-1",
  ],
  links: []
},

{
  id: 17,
  title: "Oceanographic Characteristics Analysis – North Java Sea (2023)",
  description: `
Analyzed oceanographic characteristics in the North Java Sea using Copernicus Marine data to understand sea surface temperature and current patterns. The study explored how physical ocean parameters influence marine ecosystems and resource distribution.

The workflow involved processing marine datasets using Ocean Data View, including parameter selection (sea surface temperature and current velocity), data extraction, and visualization. Temporal analysis was also conducted to observe seasonal variations and current circulation patterns.

Results show dynamic current movements and temperature variations that support marine productivity, particularly for fisheries. This project highlights the application of marine geospatial analysis in understanding ocean dynamics and supporting sustainable coastal resource management.
  `,
  images: [ppkImg],
  category: "GIS and Remote Sensing",
  tools: [
    "Copernicus Marine Data",
    "Ocean Data View",
    "Oceanographic Analysis",
    "Data Visualization"
  ]
},

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
  }, 
  {
    id: 5,
    image: pklImg,
    title: "◝(ᵔᗜᵔ)◜ Field Work Practice 2 - Ngaliyan Gunung A",
    date: "July 2023"
  },
  {
    id: 6,
    image: rdkImg,
    title: "( ദ്ദി ˙ᗜ˙ ) Publication Team - RDK UGM 1444 H",
    date: "2023"
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
      "Git",
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