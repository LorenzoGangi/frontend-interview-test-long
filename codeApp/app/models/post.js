import DS from 'ember-data';

var Post = DS.Model.extend({
    userId: DS.belongsTo('user', { async: true }),
    date: DS.attr('date'),
    content: DS.attr('string'),
    comments: DS.hasMany('comment', { async: true })
});

Post.reopenClass({
    FIXTURES: [
    {
        "id": 1,
        "userId": 1,
        "date": "",
        "content": "Love wine? Love food? Love to win an iPad 2 with gift certificates to your favorite IA winery & Dine IA restaurant. http://bit.ly/xQ4Ls8",
        "comments": [13]
    
    },
    {
        "id": 2,
        "userId": 3,
        "date": "",
        "content":"Day 2 of house sitting...awww my firends really do Trust me!",
        "comments": []
    
    },
    {
        "id": 3,
        "userId": 4,
        "date": "",
        "content":"Just got doing some sword fighting with Connor! THERE CAN BE ONLY ONE!",
        "comments": [10,11]
    },
    {
        "id": 4,
        "userId": 2,
        "date": "",
        "content":"How do I even have friends?! Oh wait.... I don't. Glad I have internet firends! I'd be screwed without them... #LameTweetIsLame #hobit #somereallylonghashtag #longcomment #eggs #stuff",
        "comments": []
    
    },
    {
        "id": 5,
        "userId": 3,
        "date": "",
        "content":"I want to thank ALL MY FIRENDS BOTH OLD AND NEW FOR THE ENCOURAGING WORDS....LOVE YOU GUYS!!!!!",
        "comments": []
    
    },
    {
        "id": 6,
        "userId": 1,
        "date": "",
        "content":"Just got back from the moon, they have sharks with lazers on their heads",
        "comments": [12]
    
    }]
});

export default Post;