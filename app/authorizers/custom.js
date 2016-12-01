import Ember from 'ember';
import Base from 'simple-auth/authorizers/base';
export default Base.extend({
    authorize: function(jqXHR, requestOptions) {
        var accessToken = this.get('session.content.secure.token');
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
            jqXHR.setRequestHeader('Authorization', 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE0ODAzMjc3MTgsImV4cCI6MTQ4MDMzNDkxOCwiaXNzIjoiV1BBRyIsInN1YiI6eyJDSSI6ImpyRmN4ZzhqQ0QxbXh0IiwiUlQiOiJVIiwiUkkiOiJBRE1JTiIsIkFSIjpudWxsLCJSUiI6bnVsbCwiUk8iOltdfX0.ZXxJ_JM8i7TVgie39f5CYwv3ToYVYXNnx0hepmFNjuw');
            // jqXHR.setRequestHeader('Authorization', 'bearer ' + accessToken);
        }
    }
});