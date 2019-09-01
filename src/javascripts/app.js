import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../../node_modules/owl.carousel/dist/owl.carousel'
import './base/vue'


$('body').on('click', '[data-link]', function () {
    const self = $(this)
    const link = self.attr('data-link')
    window.location.href = link
})


window.auto_height = () => {

    let card_height = $('.zn-card.js-auto-height');

    if (card_height) {
        $.each(card_height, function (key, value) {
            const self = $(value);
            const height = self.height()
            const body_height = self.find('.body').height();

            self.find('.img').height(height - body_height)
        })
    }

}


window.example_images = () => {
    let images = $('.js-img-ex')
    let example_images = [
        'https://images-3.gog.com/8ace748c976e8cb92b3b854480d560b413ca6cad76f8ee0d0bdc5cac7b77d0fb_product_tile_536.jpg',
        'https://images-3.gog.com/23d9101f2016cf0eaa254f21ab70e53de4325767afab192d25566e3e30fbb619_product_tile_hover_398_2x.jpg',
        'https://images-1.gog.com/ea23652394a528744f23be88b9db1bbcf9ed9ea4214adff662fbaafca9b76114_product_tile_hover_398.jpg',
        'https://images-4.gog.com/39842879071e613268b3cd2ce6ebcf9296b5e175e6ba548fd6a04bdd82152e86_product_tile_hover_398_2x.jpg',
        'https://images-4.gog.com/5301f0691a8d54feb261a2d5161e4e4202774dabbad8d0147f2e59e98826731e_product_tile_256_2x.jpg',
        'https://images-2.gog.com/48c47fb9548ad3895717f00c2d9d851f21f95b1348bc5886826adae6bf202740_curated_collection_small_tile_2x.jpg',
        'https://images-4.gog.com/2314ba515527342e71045ee79f0c54ee57fea1971978930563026bd25d1a9114_curated_collection_small_tile_2x.jpg',
        'https://images-3.gog.com/dda744fe5709db9c6a5de973474c5e4d5f8dd1dd857031d94a9e936e445b5599_product_tile_536.jpg',
        'https://images-2.gog.com/4f3d463d9a9e1d3416ed8313e7aded4325d0d0c26b1cbad037276248ffc7bcfa_product_tile_536.jpg'
    ]

    $.each(images, (key, val) => {
        const self = $(val)
        let rondomImg = example_images[Math.floor(Math.random() * 9)]
        self.hasClass('js-bg') ? self.css('background-image', 'url(' + rondomImg + ')') : self.attr('src', rondomImg)

    })

}
auto_height()
example_images();


setTimeout(function () {
    $(document).ready(function(){
        $('.js-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                }
            }
        })
    });

})