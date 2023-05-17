function set_all()
{
    hr=parseInt($("#hr_in").val());
    if(hr <10)
    {$("#w_hours").html("0" + hr);}
    else
    {$("#w_hours").html(hr);}

    min=parseInt($("#min_in").val());
    if(min <10)
    {$("#w_minutes").html("0" + min);}
    else
    {$("#w_minutes").html(min);}

    sec=parseInt($("#sec_in").val());
    if(sec <10)
    {$("#wseconds").html("0" + sec);}
    else
    {$("#wseconds").html(sec);}

  
    
}


function dec_hr() {
  hr = parseInt($("#w_hours").html());

  if (hr !== 0) {
    if (hr - 1 < 10) {
      $("#w_hours").html("0" + (hr - 1));
    } else {
      $("#w_hours").html(hr - 1);
    }
    $("#w_minutes").html(59); //when the sec is smaller than 0 the min decreases 1 and the sec becomes 59
    $("#wseconds").html(59);
  } else {
    pass; //if hr becomes 0 than we dont have to do anything
  }
}

function dec_min() {
  min = parseInt($("#w_minutes").html());
  if (min !== 0) {
    if (min - 1 < 10) {
      $("#w_minutes").html("0" + (min - 1));
    } else {
      $("#w_minutes").html(min - 1);
    }

    $("#wseconds").html(59); //when the sec is smaller than 0 the min decreases 1 and the sec becomes 59
  } else {
    dec_hr();
  }
}

$(document).ready(function () {
  //all of my jQuery codes

  var startTimer;

  var update = function () {
    $("#wseconds").each(function () {

        if( parseInt($(this).html())<1 && parseInt($("#w_minutes").html()) <1 && parseInt($("#w_hours").html()) <1){
            clearInterval(startTimer);
            $('audio#timer')[0].play()
            startTimer=undefined;
            $("#w_hours").html("00")
            $("#w_minutes").html("25")
            $("#wseconds").html("00")
            return;
        }

      var count = parseInt($(this).html());
      if (count !== 0) {
        if (count - 1 < 10) {
          $(this).html("0" + (count - 1));
        } else {
          $(this).html(count - 1);
        }
      } else {
        dec_min();
      }
    });
  };

 
  $("#start").click(function () {
    if (startTimer === undefined) {
      startTimer = setInterval(update, 1000);
    } else {
      alert("Timer is already running");
    }
  });
  

  $("#stop").click(function () {
    clearInterval(startTimer);
    startTimer=undefined;
    
    
    
  });

  $("#reset").click(function () {
    clearInterval(startTimer);
    startTimer=undefined;
    
    $("#w_hours").html("00")
    $("#w_minutes").html("25")
    $("#wseconds").html("00")

    
  });





});


