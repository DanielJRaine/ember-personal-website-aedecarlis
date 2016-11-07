import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('visual', function() {
    this.route('graphic-design', function() {
      this.route('logos');
    });
    this.route('art-tutor');
    this.route('art-model');
    this.route('wedding-and-event-drawing');
    this.route('fine-arts', function() {
      this.route('portraits');
      this.route('musician-portraits');
      this.route('other');
    });
  });
  this.route('bio');
  this.route('contact');
  this.route('performing', function() {
    this.route('contra-dance', function() {
      this.route('choreography');
      this.route('caller');
    });
    this.route('jazz');
  });
});

export default Router;
