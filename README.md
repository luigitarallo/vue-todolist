# VUE TO DO LIST

## Overview

- This project is a To-Do List web application built using Vue.js. It incorporates dynamic state management, user-friendly interfaces, and responsive design elements. The application allows users to add, toggle the completion status, and delete tasks seamlessly.

## Key Features

1. Vue.js Integration:

- Utilizes the Vue.js framework for efficient state management and dynamic DOM manipulation.

2. State Management:

- Implements the use of Vue's data objects and methods to manage the application state, including data for tasks to be done and completed.

3. User Interface:

- Designs a clean and responsive user interface using Bootstrap for the basic structure and custom CSS styles.

4. Task Addition:

- Implements the functionality to add new tasks to the list, featuring a simple input validation.

5. Dynamic State Change and Sorting:

- Enables users to change the state of tasks (from to-do to completed and vice versa), with a smooth transition effect as tasks dynamically reorder in the list.

6. Task Deletion:

- Provides functionality to remove tasks from the list.

7. Visual Feedback:

- Integrates FontAwesome icons to provide visual feedback on the status of tasks.

8. Styling:

- Applies custom CSS styles to enhance the appearance of the application, including visual effects on list item hover.

9. Project Structure:

- Organizes code into separate files, including HTML, CSS, and JavaScript, following development best practices.

10. Readability and Best Practices:

- Maintains well-commented and formatted code for improved readability, adhering to coding best practices.

## Technologies and Libraries

- HTML
- CSS
- Google Fonts
- Fontawesome
- Bootstrap
- JavaScript
- Vue.js

## ScreenShot

![Alt text](/img/todo-list-screenshot.png)

## Traccia

Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

### MILESTONE 1

- Stampare all'interno di una lista HTML un item per ogni todo.
- Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

### MILESTONE 2

- Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

### MILESTONE 3

- Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

**Bonus:**

1. oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2. cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

## Svolgimento

- Creo un elenco di oggetti, ognuno sarà formato da due proprietà:
  1. una stringa che indica il testo
  2. un valore vero o falso che indica se il todo è stato fatto si o no

### Milestone 1

- Creo un tag lista e:
  - **PER OGNI** oggetto della lista lo inserisco in un tag
  - **SE** l'oggetto (to-do) è stato completato, aggiungo una classe specifica per farla apparire barrata

### Milestone 2

- **PER OGNI** oggetto creato aggiungo anche una "X" con un contrassegno(indice)
- **AL CLICK** della "X" contrassegnata elimino l'oggetto dalla lista degli oggetti

### Milestone 3

- Inserisco un campo per poter inserire il testo e aggiungo un pulsante
- Al click del pulsante invio i dati all'elenco
- La nuova attività viene aggiunta all'elenco principale

**Bonus**

1. Aggiungo un evento al click del tasto enter quando inserisco l'input
2. Aggiungo un evento al click del toDo per cambiare lo stato done da false a true e viceversa
