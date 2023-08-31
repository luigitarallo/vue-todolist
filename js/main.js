const { createApp } = Vue;

createApp({
  data() {
    return {
      toDo: [
        { text: "Pagare le bollette", done: true },
        { text: "Dar da mangiare al pesce rosso", done: false },
        { text: "Fare la spesa", done: true },
      ],
      newToDo: { text: "", done: false },
    };
  },
  methods: {
    deleteToDo(index) {
      this.toDo.splice(index, 1);
    },
    addNewToDo() {
      const newToDoCopy = { ...this.newToDo };
      this.toDo.push(newToDoCopy);
      this.newToDo = {};
    },
  },
}).mount("#app");
