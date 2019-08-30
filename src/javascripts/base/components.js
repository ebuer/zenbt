let section_title = {
    props: ['icon', 'title'],
    data: () => {
        return {}
    },
    created: () => {
        const self = this;
    },
    template: '            <div class="zn-section-title">\n' +
        '                <div class="inner">\n' +
        '                    <i :class="icon" aria-hidden="true"></i>\n' +
        '                    <span class="title">{{title}}</span>\n' +
        '                </div>\n' +
        '            </div>\n'

}


let card_product = {
    props: ['title', 'price'],
    data: () => {
        return {}
    },
    template: '                                    <div class="zn-card list-item" data-link="#">\n' +
        '                                        <div class="left">\n' +
        '                                            <div class="img">\n' +
        '                                                <img src="../uploads/game1.jpg" alt="game">\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="middle">\n' +
        '                                            <div class="info">\n' +
        '                                                <h3 class="title">{{title}}</h3>\n' +
        '                                                <ul class="platform-list">\n' +
        '                                                    <li><i aria-hidden="true" class="fa fa-windows icon"></i></li>\n' +
        '                                                </ul>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                        <div class="right">\n' +
        '                                            <div class="price">\n' +
        '                                                <div class="discount">-40%</div>\n' +
        '                                                <div class="current-price">\n' +
        '                                                    $ {{price}}\n' +
        '                                                </div>\n' +
        '                                                <div class="add-to-cart">\n' +
        '                                                    <button class="add-btn">\n' +
        '                                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>\n' +
        '                                                    </button>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                    </div>\n',
}

export {section_title, card_product}
