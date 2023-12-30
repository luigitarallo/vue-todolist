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
      // Create a toDo copy
      const newToDoCopy = { ...this.newToDo };
      if (newToDoCopy.text.length < 5) {
        this.error.show = true;
        this.error.message = "Attenzione inserisci almeno 5 caratteri";
        return;
      }
      this.toDo.unshift(newToDoCopy);
      this.newToDo = {};
      this.error.show = false;
    },
    // * Function to change done status
    changeStatus(index) {
      this.toDo[index].done = !this.toDo[index].done;

      // Sort toDo list
      this.toDo.sort((a, b) => {
        // Check the current a element in the array with the next element
        // If a is true put the a element to the end
        if (a.done && !b.done) return 1;
        // If a is false, put the element to the start
        if (!a.done && b.done) return -1;
        // If a is the same as before don't do anything
        return 0;
      });
    },
    // * Function to delete toDo
    deleteToDo(index) {
      this.toDo.splice(index, 1);
    },
  },
}).mount("#app");
