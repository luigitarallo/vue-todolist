# VUE TO DO LIST

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
