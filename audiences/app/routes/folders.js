import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').query('audience-folder', { folder_id: null });
    }
});
