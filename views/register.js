<!DOCTYPE html>
<html>
<head>

    <title>Register</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }

        form {
            width: 400px;
        }

        label {
            display: block;
            margin-top: 10px;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        button {
            margin-top: 15px;
            padding: 10px 20px;
            background-color: green;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>

</head>

<body>

    <h1>Registration Form</h1>

    <% if (error) { %>

        <p class="error">
            <%= error %>
        </p>

    <% } %>

    <form action="/register" method="POST">

        <label>Name:</label>

        <input
            type="text"
            name="name"
            value="<%= data.name || '' %>"
        >

        <label>Email:</label>

        <input
            type="email"
            name="email"
            value="<%= data.email || '' %>"
        >

        <label>Age:</label>

        <input
            type="number"
            name="age"
            value="<%= data.age || '' %>"
        >

        <button type="submit">
            Register
        </button>

    </form>

    <br>

    <a href="/users">View Users</a>

</body>
</html>
