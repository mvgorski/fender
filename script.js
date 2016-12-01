
// add products thru json
$.ajax({
   dataType: "json",
   url: 'products.json',
   success: function(products) {

      // loop thru each and append to page with class names
      $.each(products.documents, function(index,value){

      var productType = this.productType;
      var series = this.series;
      var name = this.productDisplayName_en;
      var nameSku = this.skuDisplayName_en;

      // if product name is defined
      // sort by Product Type
      if (name !== undefined && productType == "Guitars") {

         $('#product-grid-display').append('<div class="product-outer col-xs-12 col-sm-6 col-md-3"><div class="product guitars '+series+'"><div class="product-title">'+name+'</div><div class="product-sku hidden">'+nameSku+'</div></div></div>').fadeIn('slow');

      } else if (name !== undefined && productType == "Guitar and Bass Parts") {

         $('#product-grid-display').append('<div class="product-outer col-xs-12 col-sm-6 col-md-3"><div class="product parts '+series+'"><div class="product-title">'+name+'</div><div class="product-sku hidden">'+nameSku+'</div></div></div>').fadeIn('slow');
      }

      });// each

   } // success function
}); // ajax

    // checkbox filters
   $("#filters :checkbox").click(function() {

      $('#product-grid-display>div').hide();

      $("#filters :checkbox:checked").each(function() {
           $("." + $(this).val()).parent().show();
       });

       if ($('#filters :checkbox:checked').length == 0) { 
         $('.product').parent().fadeIn();  
      }

   });        

   // add modal to product div click
   // using .on method to event delegation
   $('.col-xs-12').on('click', '.product', function() {

      $('#product-modal .modal-title').empty();

      var title = $(this).children('.product-title').text();
      var desc = $(this).children('.product-sku').text();

      $('#product-modal .modal-title').text(title);    
      $('#product-modal ul>li:first-child').text(desc);
      $('#product-modal').modal('show');

   });

   // single item view
   $('#view-single').click(function() {
      $('.product-outer').removeClass('col-sm-6 col-md-3');
   });

   // grid view
   $('#view-grid').click(function() {
      $('.product-outer').addClass('col-sm-6 col-md-3');
   });

   // icon toggle for filters
   $('#filters a').click(function() {
      $(this).find('i').toggleClass('fa-minus fa-plus')
   });
