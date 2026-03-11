const express = require("express");
const path = require("path");
const app = express(); // Express app instance
const PORT = 3000 || process.env.PORT;
// Core dependencies loaded
// Set EJS as the template engine
// Configure EJS View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Static Asset Delivery Middleware
app.use(express.static(path.join(__dirname, "public")));

// Application Routes Setup
app.get("/", function(req, res) {
    // Render the landing page
    return res.render("index");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop.');
});
