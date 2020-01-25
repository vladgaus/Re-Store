export default class BookStore {

    data = [
        {
            id: 1,
            title: 'Использование Docker',
            author: 'Эдриен Моуэт',
            price: 30,
            image: 'https://m.media-amazon.com/images/I/71V84tq+jEL._AC_UL320_ML3_.jpg'
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 38,
            image: 'https://m.media-amazon.com/images/I/711kreNLLNL._AC_UY218_ML3_.jpg'
        },
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.6) {
                    reject(new Error('Something was wrong'));
                } else {
                    resolve(this.data);
                }
            }, 700);
        });
    }
};
