// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
// il testo digitato viene letto e utilizzato per creare un nuovo todo,
// che quindi viene aggiunto alla lista dei todo esistenti.

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        valoreInput: '',
        listToDo: [
            {
                testo: 'Lava la macchina',
                done: false
            },
            {
                testo: 'Fare la spesa',
                done: true
            },
            {
                testo: 'Comprare il pane',
                done: true
            },
            {
                testo: 'Andare in palestra',
                done: true
            },
            {
                testo: 'Ripassare',
                done: true
            }
        ]
    },
    methods: {
        remove: function(index){
            this.listToDo.splice(index, 1);
        }, 
        finish: function(element){
            element.done = !element.done;
        },
        aggiungiTesto: function(){
            let element = {
                testo: this.valoreInput,
                done: false
            }
            this.listToDo.push(element)
            this.valoreInput = ''
        },
    }
});