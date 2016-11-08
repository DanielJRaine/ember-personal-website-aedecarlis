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
  this.route('visual');
  this.route('fine-arts');
  this.route('portraits');
  this.route('musician-portraits');
  this.route('other');
  this.route('graphic-design');
  this.route('wedding-and-event-drawing');
  this.route('art-tudor');
  this.route('art-model');
  this.route('performing');
  this.route('contra-dance');
  this.route('caller');
  this.route('choreography');
  this.route('jazz');
  this.route('new-item');
});

export default Router;
