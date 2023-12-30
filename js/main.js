const { createApp } = Vue;

createApp({
  data() {
    return {
      toDo: [],
      newToDo: { text: "", done: false },
      error: {
        show: false,
        message: "",
      },
    };
  },
  methods: {
    // * Function to add new toDo
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
    // * Function to change done status
    changeStatus(index) {
      this.toDo[index].done = !this.toDo[index].done;
      this.toDo.sort((a, b) => {
        // Se done è true, metti l'elemento alla fine
        if (a.done && !b.done) return 1;
        // Se done è false, metti l'elemento all'inizio
        if (!a.done && b.done) return -1;
        // Se done è uguale, lascia invariato l'ordine
        return 0;
      });
    },
    // * Function to delete toDo
    deleteToDo(index) {
      this.toDo.splice(index, 1);
    },
  },
}).mount("#app");
