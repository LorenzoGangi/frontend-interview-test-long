export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
}

export default {
    name: 'application',
    after: ['store'],

    initialize: function(container, application) {
        var store = container.lookup('store:main');
        store.push('user', {
            "id": 1,
            "username": "James Bond",
            "pic": "images/profile/Sean-Connery-as-James-Bond.jpg",
            "about": "Secret Agent, for MI6 code name 007, need I say more?"
        });
    }
};
