angular
  .module('app')
  .controller('RectangleController', [
    '$scope',
    'Helper',
    'Isotope',
    function($scope, Helper, Isotope) {
      var $container = $('#masonry');
      var veilVisible = true;
      $('#tag').hide();
      $scope.images = [];
      i = 0;
      $.ajax({
        type: "GET",
        url: "http://hos001.s3.amazonaws.com/",
        dataType: "xml",
        success: function(data, status, xhr) {
          $(data).find('Key').each(function() {
            var item = $(this).text();
            var end = item.substring(item.length - 4);
            if(end == ".png") {
              i++;
              $scope.images.push(item);
              if (i % 2 === 0) {
                $('#masonry').append('<div class="photo span2 rectangle" data-color="red" data-category="cat1" id="'+item+'"><img src="http://hos001.s3.amazonaws.com/'+item+'"/></div>');
              } else {
                $('#masonry').append('<div class="photo span2 rectangle" data-color="yellow" data-category="cat1" id="'+item+'"><img src="http://hos001.s3.amazonaws.com/'+item+'"/></div>');
              }
              $('#page_nav').append('<div class="photo span2 rectangle" data-category="cat1"><img src="http://hos001.s3.amazonaws.com/'+item+'"/></div>');
              refreshIsotope();
            }
          });
        }
      });

      $('.color-icon').on('click', function() {
        var c = $(this).attr('data-color');
        $container.isotope({
            filter: "[data-color="+c+"]"
        });
      });

      $('#tag').animate({'top':-$('#tag').height() - 10});

      function refreshIsotope() {
        $container.imagesLoaded( function(){
          $container.isotope({
            itemSelector : '.photo'
          });
        });
      }

      //binding to mousewheel for the scrolling functions
      $(window).bind('mousewheel', function (e) {
        var scrollTop = $(window).scrollTop();
          
        if(veilVisible){
          // variable to account for the user being already scrolled down - 
          // accounts for the 'fixed' positioning relationship.
          var realTop = $('#veil').position().top - scrollTop;
              
          // make sure that moving the veil doesn't put it in an inappropriate location
          if((-scrollTop * 5) <= 0 && $('#veil').position().top < $('#veil').height()) {
            // move the veil, in parallax to the window (less than is scrolled)
            $('#veil').css('top', (-scrollTop * 5) + 'px');
          }
          if($('#veil').position().top < -$('#veil').height()) {
            $('#tag').animate({'top':0});
            toggleVeilTag();
          }
        }
      });

      $(window).bind('touchmove', function (e) {
        var scrollTop = $(window).scrollTop();
          
        if(veilVisible){
          // variable to account for the user being already scrolled down - 
          // accounts for the 'fixed' positioning relationship.
          var realTop = $('#veil').position().top - scrollTop;
              
          // make sure that moving the veil doesn't put it in an inappropriate location
          if((-scrollTop * 5) <= 0 && $('#veil').position().top < $('#veil').height()) {
            // move the veil, in parallax to the window (less than is scrolled)
            $('#veil').css('top', (-scrollTop * 5) + 'px');
          }
          if($('#veil').position().top < -$('#veil').height()) {
            $('#tag').animate({'top':0});
            toggleVeilTag();
          }
        }
      });

      $(window).resize(function() {
        $container.isotope('reLayout');
      });

      $('#scroll-top').on('click', function(e) {
        e.preventDefault();
        $(window).scroll(0);
      });

      $('#dismiss-veil').on('click', function(e) {
        e.preventDefault();
        toggleVeilTag();
      });

      $('#tag').on('click', function(e) {
        // prevent the default # anchor behavior
        e.preventDefault();
        toggleVeilTag();
      });

      function toggleVeilTag(){
        var veil = $('#veil');
        var tag  = $('#tag');
        
        // Simple toggle switch 
        if(!veilVisible){
            //Show the veil
            veil.animate({'top': 0});
            tag.animate({'top':-$('#tag').height() - 10});
            veilVisible = true;
        } else {
            // Hide the veil
            veil.animate({'top': -$('#veil').height()});
            tag.show();
            tag.animate({'top': 0});
            veilVisible = false;
        }
      }

      function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        if($('.veil').position().top >= (0-(scrolled*15)) ){
          $('.veil').css('top',(0-(scrolled*15))+'px');
        }
      }
        
      $(function(){

        $('#two-col').on('click', function(){
          $('#masonry').addClass('fadeOutUp animated');
          setTimeout(function () {
            $('#masonry').addClass('two-col');
            $('#masonry').removeClass('four-col');
            refreshIsotope();
          }, 800);
          setTimeout(function () {
            $('#masonry').removeClass('fadeOutUp');
            $('#masonry').removeClass('animated');
            $('#masonry').addClass('fadeInDown animated');
          }, 1500);
        });

        $('#four-col').on('click', function(){
          $('#masonry').addClass('fadeOutUp animated');
          setTimeout(function () {
            $('#masonry').removeClass('two-col');
            $('#masonry').addClass('four-col');
            refreshIsotope();
          }, 800);
          setTimeout(function () {
            $('#masonry').removeClass('fadeOutUp');
            $('#masonry').removeClass('animated');
            $('#masonry').addClass('fadeInDown animated');
          }, 1500);
        });

        var removeItem = function(el, arr) {
          i = arr.indexOf(el);
          arr.forEach(function(e) {
            if (i != -1) {
                arr.splice(i, 1);
            }
          });
        };

        $('#sample').on('click', function() {
          var switcher = ['none', 'block'];
          var current = $('.color-icon').css('display');
          removeItem(current, switcher);
          $('.color-icon').css('display', switcher[0]);
        });
    
        $('#options .btn').on('click', function(){
          value = $(this).attr('data-type');
          $container.isotope( {sortBy: value} );
        });
    
        $container.infinitescroll({
          dataType: 'html',
          navSelector  : '#page_nav',    // selector for the paged navigation 
          nextSelector : '#page_nav a',  // selector for the NEXT link (to page 2)
          itemSelector : '.photo',     // selector for all items you'll retrieve
          loading: {
              finishedMsg: 'No more pages to load.',
              img: 'http://i.imgur.com/qkKy8.gif'
            }
          },
          // call Isotope as a callback
          function( newElements ) {
            $container.isotope( 'appended', $( newElements ) );
          }
        );
      
      });

    }]);
