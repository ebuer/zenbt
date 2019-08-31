import {section_title, card_product} from "./components";

console.group('Vue');


let app = new Vue({
    el: '#app',
    data: {
        gameList: ''
    },
    components: {
        'section-title': section_title,
        'card-product': card_product
    },
    beforeCreate: function () {
        const self = this;
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                self.gameList = res.data
            })
    }
});


console.groupEnd();