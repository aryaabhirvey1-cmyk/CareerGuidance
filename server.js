require("dotenv").config();

const express = require("express");
const path = require("path");

const chatRoutes = require("./routes/chat");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Frontend
app.use(express.static(path.join(__dirname, "public")));

// API Routes
app.use("/api/chat", chatRoutes);

// Home Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});