[![Build status](https://ci.appveyor.com/api/projects/status/kwpwvh0hgoie81mc/branch/main?svg=true)](https://ci.appveyor.com/project/Antis85/lad-project/branch/main)

# lad-project

## Интернет-магазин обуви "Bosa nova"

## Запуск приложения
Для запуска приложения нужно перейти по ссылке: https://antis85.github.io/lad-project

## Технологии
+ Html,CSS,JS/React+RTK
+ Backend Nodejs
+ CI/CD: Appveyor+GitHub Pages+Heroku

## Код
    1. Основной компонент приложения - [App](./src/App.js) - навигация по страницам и глобальное состояние корзины
    2. Компоненты страниц приложения - [Components](./src/components), [Pages](./src/pages)
    3. Кастомный хук для работы с глобальным состоянием корзины - [useStorage](./src/hooks/useStorage.js)
    4. Управление состоянием приложения (store, reducers, actions) - [Redux Toolkit](./src/store)
    5. Взаимодействие с сервером через Redux Thunk middleware  - [API](./src/api/index.js)

## Описание
Приложение содержит следующие страницы:
1. Главная страница
    + *Открывается при первом запуске приложения*
    + *Содержит блоки "Хиты продаж" и "Каталог"*    
2. Каталог товаров
    + *Доступен как с главной страницы, так и при переходе через отдельный пункт меню*
    + *Позволяет осуществлять поиск товаров по ключевым словам(название, тип обуви, цвет и т.д.), включать фильтр по категории товара, переходить на страницу товара при нажатии кнопки "Заказать", отображать следующие 6 элементов каталога при нажатии кнопки "Загрузить ещё"*
3. О магазине
4. Контакты
5. Страница товара
    + *Отображается при нажатии кнопки "Заказать" в карточке товара*
    + *Для добавления в корзину, нужно выбрать один размер(при наличии нескольких размеров) и количество товара, затем нажать кнопку "В корзину"*
6. Корзина
    + *Отображает товары, находящиеся в корзине, при нажатии кнопки "В корзину" на странице товара или при нажатии на иконку корзины в шапке страницы*
    + *Виджет корзины в шапке отображает количество позиций в корзине, одной позицией считается пара товар + размер*
    + *После успешного оформления заказа все данные корзины очищаются*
7. Страница 404
8. На всех страницах в шапке и футере присутствуют виджет поиска, виджет корзины, навигационное меню и баннер