import shortid from 'shortid';

export default {
    products: () => {
        let titles = [
            'Chris Fritz. Carefully explains the foundational concepts for understanding what Vue is doingand why.',
            'Doug Warren. Practical examples make learning easy and offer a solid foundation for your ownprojects.',
            'Philippe Charrière. Provides a strong understanding of the intrinsic mechanisms of Vues.js. Priceless.',
            'Alex Miller. An excellent hands-on introduction to Vue.js and its ecosystem.'
        ];
        return titles.map((title) => ({
            id: shortid.generate(),
            title,
            price: parseFloat((Math.random() * 50 + 50).toFixed(2))
        }));
    }
};
