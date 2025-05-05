import { Feature, Polygon } from "geojson";
import { centroid } from "@turf/turf";

// … votre import JSON …

// Typage explicite
const taiwanFeature: Feature<Polygon> = {
  type: "Feature",                // ici TS sait que c'est le littéral "Feature"
  properties: {
    admin: "Taiwan",
    name: "Taiwan",
    continent: "Asia",
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [121.777817824389899, 24.394273586519393],
        /* … */
        [121.777817824389899, 24.394273586519393],
      ],
    ],
  },
};

const centerPoint = centroid(taiwanFeature);