import axios from "axios";

// Your Strapi Cloud URL
const BASE_URL = "https://inspired-agreement-cc4e2e91be.strapiapp.com";

export const api = axios.create({
  baseURL: BASE_URL,
});

// Helper to fix image URLs
export const getImageUrl = (imageData) => {
  if (!imageData) return "https://placehold.co/600x400?text=No+Image";
  const url = imageData.url || imageData?.formats?.medium?.url || imageData?.formats?.small?.url;
  if (!url) return "https://placehold.co/600x400?text=No+Image";
  return url.startsWith("http") ? url : `${BASE_URL}${url}`;
};