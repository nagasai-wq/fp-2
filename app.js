const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as templating engine
app.set("view engine", "ejs");

// Set views folder
app.set("views", path.join(__dirname, "views"));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Static user data
const users = [
    {
        name: "John Doe",
        email: "john@example.com",
        age: 25
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        age: 30
    }
];

// ======================================
// PART (A)
// Display Users
// ======================================

app.get("/users", (req, res) => {

    res.render("users", {
        title: "User List",
        users: users
    });

});

// ======================================
// PART (B)
// Registration Form
// ======================================

app.get("/register", (req, res) => {

    res.render("register", {
        error: null,
        data: {}
    });

});

// Handle registration form
app.post("/register", (req, res) => {

    const { name, email, age } = req.body;

    // Basic validation
    if (!name || !email || !age) {

        return res.render("register", {
            error: "All fields are required!",
            data: {
                name: name || "",
                email: email || "",
                age: age || ""
            }
        });

    }

    // Display submitted data
    res.render("success", {
        name: name,
        email: email,
        age: age
    });

});

// ======================================
// Start Server
// ======================================

app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});
