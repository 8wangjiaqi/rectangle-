$(function(){
  var $width=$('#width');
  var $height=$('#height');
  var $btnCal=$('#culate');
  var $perimeter=$('#perimeter');
  var $area=$('#area');


  $btnCal.click(function(){
    var w=$width.val(),
        h=$height.val();

    var rect=rectangle();

    //var p=2*(w+h),
    //    a=w*h;
        
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
                                
  });

});

