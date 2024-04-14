## 1. Установка Node.js
### Для Windows:
* Перейдите на официальный сайт [Node.js](https://nodejs.org/en).
* Скачайте установщик Node.js для Windows. Рекомендуется выбрать версию LTS (Long Term Support).
* Запустите установщик и следуйте инструкциям на экране.

### Для Linux:
* Вы можете установить Node.js с помощью менеджера пакетов вашего дистрибутива. Например, для Ubuntu вы можете использовать apt:
```
sudo apt update
sudo apt install nodejs npm
```

## 2. Создание нового проекта
* Откройте терминал и создайте новую папку для вашего проекта, затем перейдите в нее:
```
mkdir avito-qa-tests
cd avito-qa-tests
```

## 3. Инициализация проекта и установка Playwright
* Начните установку Playwright с помощью npm:
```
npm init playwright@latest
```
* Выберите JavaScript
* Назовите папку, в которой будут храниться Ваши тесты (по умолчанию "tests" или "e2e", если уже существует папка "tests")
* Добавьте GitHub Actions workflow, если есть необходимость
* Выберите, необходимо ли установить браузеры для Playwright (необходимо)

## 4. Копирование тестов
* В папку с тестами скопируйте файл [example.spec.js](https://github.com/st-isk/avitoQA-trainee-test/blob/master/example.spec.js)

## 5. Запуск тестов
* Запустите тесты командой:
```
npx playwright test --headed
```
