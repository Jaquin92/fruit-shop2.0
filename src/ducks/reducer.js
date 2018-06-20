import * as Data from '../store_items.json';

const initialState = {
    data: Data,
    cart: [{
        "itemName": "banana",
        "imgSrc": "https://tinyurl.com/zcdrymz",
        "price": 1.25,
        "quantityRemaining": 10,
        inCart: 2
    },
    {
        "itemName": "apple",
        "imgSrc": "https://tinyurl.com/lg5rj5z",
        "price": 2.50,
        "quantityRemaining": 5,
        inCart: 3
    }]

};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        default: return state;
    }

};