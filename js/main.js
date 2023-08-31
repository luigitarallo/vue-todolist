const { createApp } = Vue;

createApp({
  data() {
    return {
      toDo: [
        { text: "Pagare le bollette", done: true },
        { text: "Dar da mangiare al pesce rosso", done: false },
        { text: "Fare la spesa", done: true },
      ],
    };
  },
}).mount("#app");
