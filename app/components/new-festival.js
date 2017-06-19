import Ember from 'ember';

export default Ember.Component.extend({
  addNewFestival: false,
  actions: {
    festivalFormShow(){
      this.set('addNewFestival',true)
    },
    cancel(){
      this.set('name',''),
      this.set('category',''),
      this.set('shortDescription',''),
      this.set('content',''),
      this.set('openDate',''),
      this.set('artist',''),
      this.set('artistImage',''),
      this.set('location',''),
      this.set('venueImage',''),
      this.set('addNewFestival',false)
    },
    // reset(){
      //this.set('name',''),
    //  this.set('category',''),
    //  this.set('shortDescription',''),
    //  this.set('content',''),
      //this.set('openDate',''),
      //this.set('artist',''),
      //this.set('artistImage',''),
      //this.set('location',''),
      //this.set('venueImage',''),
    },
    saveNewFestival(){
      var params= {
        name:this.get('name',''),
        category:this.get('category',''),
        shortDescription:this.get('shortDescription',''),
        content:this.get('content',''),
        openDate:this.get('openDate',''),
        artist:this.get('artist',''),
        artistImage:this.get('artistImage',''),
        location:this.get('location',''),
        venueImage:this.get('venueImage',''),
      };
      this.set('name',''),
      this.set('category',''),
      this.set('shortDescription',''),
      this.set('description',''),
      this.set('dateOpened',''),
      this.set('website',''),
      this.set('phone',''),
      this.set('locationName',''),
      this.set('locationLongitude',''),
      this.set('locationLongitude',''),
      this.set('addNewRestaurant',false),
      this.set('image'),
this.sendAction('saveNewRestaurant',params)
    }
  }
});
