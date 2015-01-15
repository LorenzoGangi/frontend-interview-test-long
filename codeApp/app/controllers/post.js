import Ember from 'ember';

export default Ember.ObjectController.extend({
    needs: ['application'],
    loggedInUser: Ember.computed.alias("controllers.application.model"),
    newComment: '',
    text: function() {
        return this.get('model.content');
    }.property('model.content'),
    actions: {
        inputComment: function() {
            if (this.get('newComment').trim() !== '') {
                var store = this.store;
                var text = this.get('newComment');
                store.createRecord('comment', { content: text, postId: this.model, userId: this.get('loggedInUser') });
                console.log('comment inputed');
                this.set('newComment', '');    
            }
            
        }
    }
});
