(function(window, undefined) {
  'use strict';

  function inspector() {

    var parentClass = 'js-html-inspector';
    var buttonClass = 'js-btn-inspector';
    var $dialog     = $('#dialog-html-inspector');
    var $button     = $('<button class="btn btn-default btn-xs ' + buttonClass + '">' +
      '<span class="glyphicon glyphicon-search"></span>' +
    '</button>');

    $button.click(function() {

      var $parent = $(this).closest('.' + parentClass).clone();

      // Replace elements
      var replaceTarget = $parent.data('replace-target');
      if (replaceTarget) {
        $parent.find(replaceTarget).each(function() {
          $(this).replaceWith($(this).html());
        });
      }

      // Remove elements
      var removeTargets = $parent.data('remove-target') || [];
      if (!(removeTargets instanceof Array)) {
        removeTargets = [removeTargets];
      }
      removeTargets.push('.' + buttonClass);
      $.each(removeTargets, function(index, target) {
        $parent.find(target).remove();
      });

      // Remove classes from elements
      var removeClassesTargets = $parent.data('remove-class-target') || [];
      if (!(removeClassesTargets instanceof Array)) {
        removeClassesTargets = [removeClassesTargets];
      }
      $.each(removeClassesTargets, function(index, target) {
        $parent.find(target).removeClass(target.split('.')[1]);
      });

      // Trim whitespaces
      var lines = $parent.html().split('\n');
      if (lines.length > 0) {
        // Remove all empty lines on the top
        while(lines[0].trim().length === 0) {
          lines.shift();
        }

        // Change indentation based on the first line
        var indent  = lines[0].length - lines[0].trim().length;
        var regex   = new RegExp(' {' + indent + '}');
        var html    = [];
        $.each(lines, function(index, line) {
          if (line.trim().length > 0 && line.match(regex)) {
            html.push(line.substring(indent));
          } else if (line.length === 0) {
            // Intended empty line
            html.push('');
          }
        });

        // Copy html to dialog and launch
        $dialog
          .find('.modal-body code').text(html.join('\n')).end()
          .modal();
      }
    });

    // Add inspector button
    $('.' + parentClass).hover(function() {
      $(this).append($button);
    });
  }

  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    // Prevent demo links from navigating
    $('a[href="#"]:not([data-toggle], [rel="async"])').click(function() {
      return false;
    });
    // Prevent demo forms from submitting
    $('form:not([action])').submit(function() {
      return false;
    });

    // Show inspector button on hover
    inspector();
  });
})(window);


    if (window.addEventListener) {
      window.addEventListener('scroll', checkScrolled);
    }
    else {
      window.attachEvent('scroll', checkScrolled);
    }
    
    function checkScrolled() {

            var ypos = window.pageYOffset;
            var totalScroll = $('#main-banner').height()   + $('#bot-summary').height()  + $('#bot-summary').height();
            // if (ypos > 10) {  
            //     $('#careers-navigation').fadeIn(100);
            //     $('.navbar').addClass('change-nav');
            //     $('#apply-today').slideDown(200);
            //     $('#sign-in').slideDown(200);

            // }else {
            //     $('.navbar').removeClass('change-nav');
            //     $('#careers-navigation').fadeOut(100);
            //     $('#apply-today').fadeOut(400);
            //     $('#sign-in').fadeOut(400);
            // }
            if (ypos > totalScroll) {
              $('#bot-summary').addClass('how-to-fix');
            }
            else {
              $('#bot-summary').removeClass('how-to-fix');
            }
    }



// Cache selectors
var lastId,
    topMenu = $("#how-to-list"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=\\#" + id + "]").parent().addClass("active");
   }                   
});

$(function() {
  $('a[href*=\\#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});