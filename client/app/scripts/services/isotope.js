angular
  .module("app")
  .factory("Isotope", [
    function() {
      return {
        container: $('#masonry'),
        images: [],
        loadImages: function() {
          $.ajax({
            type: "GET",
            url: "http://hos001.s3.amazonaws.com/",
            dataType: "xml",
            success: function(data, status, xhr) {
              $(data).find('Key').each(function() {
                var item = $(this).text();
                var end = item.substring(item.length - 4);
                if(end == ".png") {
                  this.images.push(item);
                  $('#masonry').append('<div class="photo span2 rectangle" data-category="cat1" id="'+item+'"><img src="http://hos001.s3.amazonaws.com/'+item+'"/></div>');
                  $('#page_nav').append('<div class="photo span2 rectangle" data-category="cat1"><img src="http://hos001.s3.amazonaws.com/'+item+'"/></div>');
                  this.refresh();
                }
              });
            }
          });
        },
        refresh: function() {
          this.container.imagesLoaded( function(){
            this.container.isotope({
              itemSelector : '.photo'
            });
          });
        }

      };
    }]);
