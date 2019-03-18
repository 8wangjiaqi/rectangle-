var expect=chai.expect;
describe("面积计算功能测试",function(){
  it('宽是10，高是20 的矩形，面积是200',function(){
    var  rect=rectangle();
    expect(rect.area(10,20)).to.be.equal(200);
  });

  it('宽是 "10",高是 "20"的矩形，面积是200',function(){
    var rect=rectangle();
    expect(rect.area('10','20')).to.be.equal(200);
  });
});
