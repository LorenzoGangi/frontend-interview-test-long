import DS from 'ember-data';

var Comment = DS.Model.extend({
    postId: DS.belongsTo('post'),
    userId: DS.belongsTo('user'),
    date: DS.attr('date'),
    content: DS.attr('string')
});


Comment.reopenClass({
    FIXTURES: [
    {
        "id": 13,
        "postId": 1,
        "userId": 3,
        "date": "",
        "content": "Would you happen to know were Capone is? Since you are a secret agent and all"
    },
    {
        "id": 10,
        "postId": 3,
        "userId": 1,
        "date": "",
        "content": "Let me know when you're going to be going at it again, I would love to join"
    },
    {
        "id": 11,
        "postId": 3,
        "userId": 4,
        "date": "",
        "content": "sure thing"
    },
    {
        "id": 12,
        "postId": 6,
        "userId": 2,
        "date": "",
        "content": "Hey, what else was there? I want to write a book on it"
    }]
});

export default Comment;