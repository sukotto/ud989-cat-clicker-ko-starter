var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');;

  this.incrementCounter = function() {
     this.clickCount(this.clickCount() + 1);
  };

  this.level = ko.computed(function(){
    if(this.clickCount() < 10){
      return "Newborn";
    }
    else if(this.clickCount() >= 10 && 
     this.clickCount() < 100) {
    }
    else if(this.clickCount() >= 100){
      return "Teen";
    }
  },this);
}

