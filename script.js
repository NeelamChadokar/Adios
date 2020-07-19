console.log("working well!");

function enterSite() {
  console.log("enter site");
  $("#landing").css("transform", "translate(-200vw)");
  $("#dim-bg").css("visibility", "visible");
  $("#dim-bg").css("transform", "translate(0)");
  $("#above_fol").css("opacity", "1");
  $("#full-site").css("visibility", "visible");
  $("#full-site").css("overflow", "visible");
  $("#full-site").css("max-height", "auto");
  $("#register").css("transform","translate(0)");
}

$("#visible-section").mouseenter(function(){openForm();});
$("#empty-section").mouseenter(function(){closeForm();});
$("#form-section").mouseleave(function(){closeForm();});

function openForm(){

  $("#register").css("transform","translate(-350px)");
  $("#register").css("transition-delay","0s");
  $("#register").css("z-index","100");

  $("#call-num").css("opacity","0");
  $("#reg").css("opacity","0");
}
function closeForm(){
  $("#register").css("transform","translate(0)");
  $("#register").css("z-index","0");
  $("#call-num").css("opacity","1");
  $("#reg").css("opacity","1");
}

(function manageTotalPlans() {

  let totalplans = String(getRandom(100000, 200000));
  totalplans = addComma(totalplans);

  addToTotalPlans(totalplans);

  function addToTotalPlans(currentValue){
    let num = Number(currentValue.replace(",", ""));
    num++;
    num = String(num);
    num = addComma(num);
    $("#total-plans").html(num);
    setTimeout(function() {
      addToTotalPlans(num);
    }, getRandom(100, 2000));
  }
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

  }
  function addComma(num){
    return num.slice(0, 3) + ","+ num.slice(3, 6);
  }

})();
