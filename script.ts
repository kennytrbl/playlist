let songs: string[] = [
  "eelfrHtmk68",
  "D2sMg8mCHds",
  "4iFP_wd6QU8",
  "Vyo2m2CbdUs",
  "Y93Jjvhz1jg",
  "-7Uo2oKHGyU",
  "QU9c0053UAU",
  "wKyMIrBClYw",
  "Z3W0jKcv1SU",
  "29ycT6fA-Rs",
  "UNo0TG9LwwI",
  "SctIHP5dPyM",
  "rCeM57e2BfU",
  "8wpX6164uk4",
  "3ze6drtwiE4",
  "jOTfBlKSQYY",
  "D8VEhcPeSlc",
  "IRNBtocmQ58",
  "kcelgrGY1h8",
  "dZs_cLHfnNA",
  "sk6WiGOmlso",
  "hiUPJaHjuUk",
  "v7bnOxV4jAc",
  "Os_heh8vPfs",
  "5_n6t9G2TUQ",
  "mHNCM-YALSA",
  "bNKXxwOQYB8",
  "zZwFi86zIZM",
  "HKBPmZbrsm0",
  "w0sOLQXCGjE",
  "V4tmJoX4NsI",
  "Z4qVfCi_lUI",
  "jRRCWFLAO6k",
  "PS0qkO5qty0",
  "zgxSYEFcePY",
  "Vk5-c_v4gMU",
  "iy9qZR_OGa0",
  "lz46lUhrW5w",
  "xfqBQ2XhBCg",
  "6Q5xqNkCk7w",
  "phuiiNCxRMg",
  "Q3K0TOvTOno",
  "nFYwcndNuOY",
  "w2DOQLVpvLg",
];

const container = document.querySelector(".container");

if (container) {
  songs.forEach(function (link) {
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${link}`;
    iframe.height = "270";
    iframe.width = "480";
    iframe.allow =
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
  });
} else {
  console.error("Container element not found.");
}
