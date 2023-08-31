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
    // function to add new toDo
    addNewToDo() {
      const newToDoCopy = { ...this.newToDo };
      this.toDo.push(newToDoCopy);
      this.newToDo = {};
    },
    // function to change done status
    changeStatus(index) {
      if (this.toDo[index].done) {
        this.toDo[index].done = false;
      } else {
        this.toDo[index].done = true;
      }
    },
  },
}).mount("#app");
