<!DOCTYPE html>
<html>
<head>

    <title>Registration Successful</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }

        .success {
            background-color: #e8f8e8;
            padding: 20px;
            width: 400px;
            border-radius: 8px;
        }
    </style>

</head>

<body>

    <div class="success">

        <h1>Registration Successful!</h1>

        <p>
            <strong>Name:</strong>
            <%= name %>
        </p>

        <p>
            <strong>Email:</strong>
            <%= email %>
        </p>

        <p>
            <strong>Age:</strong>
            <%= age %>
        </p>

    </div>

    <br>

    <a href="/users">View User List</a>

</body>
</html>
