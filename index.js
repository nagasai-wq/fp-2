const express = require("express");

const app = express();
const PORT = 3001;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Route to display users
app.get("/users", (req, res) => {

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
        },
        {
            name: "Alice Johnson",
            email: "alice@example.com",
            age: 28
        }
    ];

    res.render("users", {
        title: "User List",
        users: users
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
