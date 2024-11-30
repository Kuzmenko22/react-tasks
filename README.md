# Задачи по react

В проекте собраны задачи по реакту из учебника [LEARN REACT](https://react.dev/learn).
В отличие от оригинала задачи решаются в локальном проекте и на языке TypeScript.

### Инструкция

- Клонируйте проект.
- Установите пакеты ```pnpm install``` или ```npm install```.
- в файле main.tsx нужно изменить путь к файлам ``App.tsx`` и ``style.css``
- Например, для задания ``3_1_1`` путь будет таким: ``import App from './3/3_1_1/App.tsx'`` и ``import './3/3_1_1/style.css'``
- Запустите проект с помощью ```pnpm run dev``` или ```npm run dev``` и откройте появившуюся ссылку в браузере.
- Задание задачи написано в файле ```App.tsx```. 

- Для заданий `3_1_2 И 3_1_3` запускать проект нужно иначе, потому что для них используется другой `index.html` файл. В терминале напишите команду: `npm run dev`. В адресной строке браузера укажите путь к html файлам: 
`http://localhost:5173/index/3_1_2/index.html` для 3_1_2
`http://localhost:5173/index/3_1_3/index.html` для 3_1_3


### Список задач

#### Создание пользовательского интерфейса с react

- 86cbf23 1_1_1 Export the component
- 5487236 1_1_2 Fix the return statement
- b426158 1_1_3 Spot the mistake
- 57264cb 1_1_4 Your own component
- ac86491 1_2_1 Split the components further
- 880ee97 1_3_1 Convert some HTML to JSX
- d5c00ca 1_4_1 Fix the mistake
- 5354105 1_4_2 Extract information into an object
- b213d84 1_4_3 Write an expression inside JSX curly braces
- 912be2f 1_5_1 Extract a component
- fa74a99 1_5_2 Adjust the image size based on a prop
- b8a5668 1_5_3 Passing JSX in a children prop
- dd86926 1_6_1 Show an icon for incomplete items with ? :
- 12787dc 1_6_2 Show the item importance with &&
- eb0a62c 1_6_3 Refactor a series of ? : to if and variables
- a30c6f2 1_7_1 Splitting a list in two
- 1da860f 1_7_2 Nested lists in one component
- 6d2cef7 1_7_3 Extracting a list item component
- c31e5e7 1_7_4 List with a separator
- aa81cfb 1_8_1 Fix a broken clock
- d58363d 1_8_2 Fix a broken profile
- 7f62b92 1_8_3 Fix a broken story tray     

#### Добавление интерактивности в приложение

- a9894c7 2_1_1 Fix an event handler
- 382807e 2_1_2 Wire up the events
- 126f7df 2_2_1 Complete the gallery
- d59c7a0 2_2_2 Fix stuck form inputs
- e97cc54 2_2_3 Fix a crash
- aecc64f 2_2_4 Remove unnecessary state
- d5b74ce 2_4_1 Implement a traffic light
- 27ae8ed 2_5_2 Implement the state queue yourself
- 79190dd 2_5_1 Fix a request counter
- cdce474 2_6_1 Fix incorrect state updates
- 6d076f6 2_6_2 Find and fix the mutation
- 44ddf04 2_6_3 Update an object with Immer
- a2ad3a2 2_7_1 Update an item in the shopping cart
- 4767858 2_7_2 Remove an item from the shopping cart
- 97920ca 2_7_3 Fix the mutations using non-mutative methods
- 278cefd 2_7_4 Fix the mutations using Immer

#### Управление состоянием

- f3ee5a0 3_6_1 Replace prop drilling with context
- 63f7c27 3_5_4 Implement useReducer from scratch
- c51b7a3 3_5_3 Restore input values when switching
- 4f390b1 3_5_2 Clear the input on sending a message
- c7ae0d4 3_5_1 Dispatch actions from event handlers
- 1125cd7 3_4_5 Fix misplaced state in the list
- 66f9570 3_4_4 Clear an image while it’s loading
- 0f779fb 3_4_3 Reset a detail form
- d8441fc 3_4_2 Swap two form fields
- 9464c2c 3_4_1 Fix disappearing input text
- 2b58ba8 3_3_2 Filtering a list
- 8ffa7b9 3_3_1 Synced inputs
- c19fbe4 3_2_4 Implement multiple selection
- 2b7ef13 3_2_3 Fix the disappearing selection
- aa1dcac 3_2_2 Fix a broken packing list
- ecc3669 3_2_1 Fix a component that’s not updating
- 93cd9f3 3_1_3 Refactor the imperative solution without React
- 77fe8c2 3_1_2 Profile editor
- 71abf3e 3_1_1 Add and remove a CSS class

#### Механизмы внешнего доступа

- 56cfc49 4_1_1  Fix a broken chat input
- 4515388 4_1_2  Fix a component failing to re-render
- 904c3fd 4_1_3  Fix debouncing
- 1eb1698 4_1_4  Read the latest state
- d619eec 4_2_1 Play and pause the video
- 8285f41 4_2_2 Focus the search field
- 8c368c9 4_2_3 Scrolling an image carouse
- e7795e6 4_3_1 Focus a field on mount
- eacafb5 4_3_2 Focus a field conditionally
- 7bb7b52 4_3_3 Fix an interval that fires twice
- 96b750c 4_3_4 Fix fetching inside an Effect
- 6e891c0 4_4_1 Transform data without Effects
- 7f54552 4_4_2 Cache a calculation without Effects
- 8b9d2f4 4_4_3 Reset state without Effects
- 06c069c 4_4_4 Submit a form without Effects
- a5f94e9 4_5_1 Fix reconnecting on every keystroke
- ab5e53e 4_5_2 Switch synchronization on and off
- 253d208 4_5_3 Investigate a stale value bug
- ad61327 4_5_4 Fix a connection switch
- 702fd1c 4_5_5 Populate a chain of select boxes
- 13ce249 4_6_1 Fix a variable that doesn’t update
- f7efeb6 4_7_1 Fix a resetting interval
- 8a09f61 4_7_3 Fix a reconnecting chat
- 85853d9 4_8_1 Extract a useCounter Hook
- 48e8124 4_8_2 Make the counter delay configurable
- 527e12b 4_8_3 Extract useInterval out of useCounter
- efa974e 4_8_5  Implement a staggering movement
