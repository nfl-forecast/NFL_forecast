angular.module('nflforecast').component('weekButtons', {
  controller: WBController,
  bindings: {
    data: "<"
  },
  templateUrl: "htmlTemplates/weekButtons.html"


});

function WBController()
{
  this.selected = 0;

  this.firstLine;
  this.secondLine;

  this.$onInit = function(){
    this.firstLine = data.season.weeks.slice(0, 9);
    this.secondLine = data.season.weeks.slice(9);
}
}