// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
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
        addText: function(){
            
        }
    }
});