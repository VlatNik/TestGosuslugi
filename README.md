<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Госуслуги</title>
</head>
<body>
    <div class="login-container">
        <h2>Вход</h2>
        <form id="loginForm">
            <label for="username">Логин:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Пароль:</label>
            <input type="password" id="password" name="password" required><br><br>
            <button type="submit">Войти</button>
        </form>
        <p id="loginMessage"></p>
        <button id="showFirstListButton" class="hidden">Услуги для Граждан РФ</button>
        <button id="showSecondListButton" class="hidden">Услуги для Предпринимателей</button>
        <div id="linksContainer" class="links-container"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
