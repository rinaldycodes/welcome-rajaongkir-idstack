<script>
$(document).ready(function() {

    $('select[name="province_origin"]').on('change', function() {
      let provinceId = $(this).val();
      if (provinceId) {
        jQuery.ajax({
          url: 'rajaongkir/province/'+provinceId+'/cities',
          type: "GET",
          dataType:"json",
          success:function(data) {
            $('select[name="city_origin"]').empty();
            $.each(data, function(key, value) {
              $('select[name="city_origin"]').append('<option value="'+key+'">'+value+'</option>');
            });
          },
        });
      } else {
        $('select[name="city_origin"]').empty();
      }
    });
    
    $('select[name="pronvice_destination"]').on('change', function() {
      let provinceId = $(this).val();
      if (provinceId) {
        jQuery.ajax({
          url:'rajaongkir/province/'+provinceId+'/cities',
          type:"GET",
          dataType:"json",
          success:function(data) {
            $('select[name="city_destination"]').empty();
            $.each(data, function (key, value) {
              $('select[name="city_destination"]').append('<option value="'+key+'">'+value+'</option>');
            });
          },
        });
      } else {
        $('select[name="city_destination"]').empty();
      }
    });

    
  });
</script>
