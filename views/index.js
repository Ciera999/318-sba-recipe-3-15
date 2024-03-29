<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Sharing App</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <h1>Recipe Sharing App</h1>
    <form action="/recipes" method="post">
        <label for="recipeName">Recipe Name:</label>
        <input type="text" id="recipeName" name="recipeName" required>
        <label for="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" required></textarea>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
