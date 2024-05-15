// Function to get the URL of an image asset
export const getImageURL = (path) => {
    // Construct the URL of the image asset using the path and the current script URL
    // This ensures that the path is relative to the location of the script
    return new URL(`/assets/${path}`, import.meta.url).href;
};
