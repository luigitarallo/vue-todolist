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
      error: {
        show: false,
        message: "",
      },
    };
  },
  methods: {
    // function to add new toDo
    addNewToDo() {
      const newToDoCopy = { ...this.newToDo };
      if (newToDoCopy.text.length < 5) {
        this.error.show = true;
        this.error.message = "Attenzione inserisci almeno 5 caratteri";
        return;
      }
      this.toDo.push(newToDoCopy);
      this.newToDo = {};
      this.error.show = false;
    },
    // function to change done status
    changeStatus(index) {
      if (this.toDo[index].done) {
        this.toDo[index].done = false;
      } else {
        this.toDo[index].done = true;
      }
    },
    // function to delete toDo
    deleteToDo(index) {
      this.toDo.splice(index, 1);
    },
  },
}).mount("#app");
