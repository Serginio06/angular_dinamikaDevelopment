import {createStore} from 'redux';

// let initilaUsers =
// [{"id":1,"first_name":"Carlos","last_name":"Hughes","email":"chughes0@stumbleupon.com","gender":"Male"},
// {"id":2,"first_name":"Ruby","last_name":"Carpenter","email":"rcarpenter1@marketwatch.com","gender":"Female"},
// {"id":3,"first_name":"Bruce","last_name":"Smith","email":"bsmith2@hp.com","gender":"Male"},
// {"id":4,"first_name":"David","last_name":"Howell","email":"dhowell3@webnode.com","gender":"Male"},
// {"id":5,"first_name":"Kathryn","last_name":"Reynolds","email":"kreynolds4@digg.com","gender":"Female"},
// {"id":6,"first_name":"Ralph","last_name":"Dunn","email":"rdunn5@oakley.com","gender":"Male"},
// {"id":7,"first_name":"John","last_name":"Hughes","email":"jhughes6@miitbeian.gov.cn","gender":"Male"},
// {"id":8,"first_name":"Mary","last_name":"Tucker","email":"mtucker7@cloudflare.com","gender":"Female"},
// {"id":9,"first_name":"Kenneth","last_name":"Dunn","email":"kdunn8@globo.com","gender":"Male"},
// {"id":10,"first_name":"Juan","last_name":"Stanley","email":"jstanley9@engadget.com","gender":"Male"}]


function inputData(text = '', action) {

    if (action.type === 'ADD-KEY') {

        // [...text, action.newCharacter]
        return text + action.newCharacter;
    }
    return text;
}


const textStore = createStore (inputData);

// console.log ('initial usersStore.getState= ', usersStore.getState ());

// usersStore.subscribe (()=> {
//     console.log ('after subscribe usersStore.getState=', usersStore.getState ());
// });
//
// usersStore.dispatch ({
//     type: 'ADD-USER',
//     user: initilaUsers[1]
// });
//
// usersStore.dispatch ({
//     type: 'ADD-USER',
//     user: initilaUsers[2]
// });

export default textStore;


