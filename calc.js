/*function  rectangle(){
  return {
    'perimeter':function(width,height){
      return 2*(Number(width) + Number(heigth));
    },

    'area':function(width,height){
      return Number(width) *Number(height);
    }
  }
}*/
/* exported Rectangle */
function Rectangle(width, height) {
  var w = Number(width),
      h = Number(height);

  this.area = function() {
    return w * h;
            
  };

  this.perimeter = function() {
    return 2 * (w + h);
            
  };

}
