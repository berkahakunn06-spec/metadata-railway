const express = require("express");
const cors = require("cors");
const multer = require("multer");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const upload = multer({
    dest: "uploads/"
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", upload.array("files"), async (req, res) => {

    try {

        const provider = req.body.provider;
        const apiKey = req.body.apiKey;

        const results = [];

        for (const file of req.files) {

            results.push({

                filename: file.originalname,

                title: "AI Generated Metadata",

                description:
                    "Professional Adobe Stock image.",

                keywords: [
                    "ai",
                    "adobe stock",
                    "design",
                    "technology"
                ]

            });

        }

        res.json({

            success: true,
            total: results.length,
            data: results

        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            error: err.message
        });

    }

});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {

    console.log(
        "Server running on port " + PORT
    );

});