import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './base/vue'



$('body').on('click', '[data-link]', function () {
    const self = $(this)
    const link = self.attr('data-link')
    window.location.href = link
})


function auto_height() {

   let card_height = $('.zn-card.js-auto-height');

   if(card_height){
    $.each(card_height, function (key, value) {
        const self = $(value);
        const height = self.height()
        const body_height = self.find('.body').height();

        self.find('.img').height(height - body_height)
    })
   }

}

auto_height()
