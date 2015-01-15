/* global $ */
import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        postUpdate: function() {
            $('#myModal').modal('show');
        }
    }
});
