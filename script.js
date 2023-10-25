document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Проверка простого логина и пароля (пример)
    if (username === 'user' && password === 'password') {
        document.getElementById('loginMessage').textContent = 'Вход успешен! Выберте услугу';
        document.getElementById('loginForm').style.display = 'none'; // Скрываем форму логина
        document.getElementById('showFirstListButton').classList.remove('hidden');
        document.getElementById('showSecondListButton').classList.remove('hidden');
        displayLinks();
    } else {
        document.getElementById('loginMessage').textContent = 'Неправильное имя пользователя или пароль.';
    }
});

function displayLinks() {
    var linksContainer = document.getElementById('linksContainer');

    var firstLinksData = [
        { link: 'https://www.gosuslugi.ru/10700', description: 'Услуга поможет записать к врачу', text: 'Запись на приём к врачу' },
        { link: 'https://www.gosuslugi.ru/600804', description: 'Зарегистрировать автомобиль или другое транспортное средство', text: 'Регистрация транспортных средств' },
        { link: 'https://www.gosuslugi.ru/600102', description: 'Подайте заявление на оформление паспорта', text: 'Получение паспорта' }
    ];

    var secondLinksData = [
        { link: 'https://www.gosuslugi.ru/600300', description: 'Выберите подходящее подразделение, дату и время приёма', text: 'Запись на приём в МВД' },
        { link: 'https://www.gosuslugi.ru/600309', description: 'Предоставление сведений из реестра лицензий', text: 'Выписка из реестра лицензий' },
        { link: 'https://www.gosuslugi.ru/600162', description: 'Предоставление разрешения на осуществление земляных работ', text: 'Разрешение на земляные работы' }
    ];

    function createLinkElement(linkItem) {
        var linkElement = document.createElement('a');
        linkElement.href = linkItem.link;
        linkElement.textContent = linkItem.description;
        linkElement.target = '_blank';

        var descriptionElement = document.createElement('div');
        descriptionElement.classList.add('link-description');
        descriptionElement.textContent = linkItem.text;

        var linkContainer = document.createElement('div');
        linkContainer.appendChild(linkElement);
        linkContainer.appendChild(descriptionElement);

        return linkContainer;
    }

    document.getElementById('showFirstListButton').addEventListener('click', function() {
        linksContainer.innerHTML = '';
        firstLinksData.forEach(function(linkItem) {
            var linkElement = createLinkElement(linkItem);
            linksContainer.appendChild(linkElement);
        });
    });

    document.getElementById('showSecondListButton').addEventListener('click', function() {
        linksContainer.innerHTML = '';
        secondLinksData.forEach(function(linkItem) {
            var linkElement = createLinkElement(linkItem);
            linksContainer.appendChild(linkElement);
        });
    });
}
