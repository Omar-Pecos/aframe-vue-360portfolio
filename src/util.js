// get config and export it

export const environment = {
  myAccountPass: process.env.VUE_APP_ACCOUNT_PASS,
  apiUrl: process.env.VUE_APP_API_URL,
};

export const types = [
  "all",
  "backend",
  "frontend",
  "fullstack",
  "design",
  "game",
  "hybrid",
];

export const setColorByType = (type) => {
  let color = "black";

  switch (type) {
    case "backend":
      color = "#C64E4E";
      break;
    case "frontend":
      color = "#47C163";
      break;
    case "fullstack":
      color = "purple";
      break;
    case "design":
      color = "#808080";
      break;
    case "game":
      color = "orange";
      break;
    case "native":
      color = "plum";
      break;
    case "hybrid":
      color = "#3F3FB6";
      break;
  }

  return color;
};
