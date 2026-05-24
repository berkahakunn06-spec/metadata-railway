const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* STATIC FILE */

app.use(express.static(__dirname));

/* HOME */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index_metadata_fix.html"));
});

/* UPLOAD API */

app.post("/upload", async (req, res) => {

  const dummyData = [
    {
      filename: "example-image.jpg",

      title:
        "Futuristic Technology Interface Background",

      description:
        "Professional futuristic digital technology interface with modern neon cyberpunk design.",

      keywords: [
        "technology",
        "digital",
        "innovation",
        "modern",
        "creative",
        "professional",
        "business",
        "future",
        "abstract",
        "background",
        "design",
        "visual",
        "interface",
        "automation",
        "artificial intelligence",
        "cyberpunk",
        "gradient",
        "neon",
        "software",
        "dashboard",
        "user interface",
        "desktop",
        "online",
        "network",
        "system",
        "virtual",
        "workspace",
        "application",
        "data",
        "computer",
        "coding",
        "developer",
        "web",
        "tech",
        "futuristic",
        "ui design",
        "productivity",
        "electronics",
        "smart technology",
        "digital workspace",
        "modern interface",
        "high tech",
        "glowing",
        "virtual system",
        "innovation concept",
        "future technology",
        "tech background",
        "cyber interface",
        "advanced system"
      ]
    }
  ];

  res.json({
    success: true,
    total: 1,
    failed: 0,
    data: dummyData
  });

});

/* PORT */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});