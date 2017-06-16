import DS from 'ember-data';

export default DS.Model.extend({
  author:DS.atrr('string'),
  content:DS.atrr('string'),
  position:DS.atrr('string'),
  upvote:DS.atrr(),
  downvote:DS.atrr()

});
