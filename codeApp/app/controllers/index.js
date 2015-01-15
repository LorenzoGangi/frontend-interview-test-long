/* global $ */
import Ember from 'ember';

export default Ember.ArrayController.extend({
    needs: ['application'],
    loggedInUser: Ember.computed.alias("controllers.application.model"),
    postInput: '',
    actions: {
        enterPost: function() {
            var content = this.postInput.trim();
            var store = this.store;
            var user = this.get('loggedInUser');

            store.createRecord('post', { content: content, userId: user });
            $('#myModal').modal('hide');
            this.set('postInput', '');
        }
    }
});
