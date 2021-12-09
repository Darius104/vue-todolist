// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.


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
        remove: function(index){
            this.listToDo.splice(index, 1);
        } 
    }
});