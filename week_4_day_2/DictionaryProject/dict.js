$(document).ready(function () {
  $('#loader').hide();
  $(document).ajaxStart(function () { $('#loader').show(); })
    .ajaxStop(function () { $('#loader').hide(); });
  $('#btnsearch').on('click', search);
  $('#keyword').on('input', search);

  function search() {
    let term = $('#keyword').val().trim();
    $.ajax({
      'url': `http://localhost:8080/?keyword=${term}`, 'type': 'GET',
      'success': successFunction, 'error': failureFunction
    }).always(function () {
      $('#loader').hide();
    });

    function successFunction(data) {
      $('.search-result').empty();
      if (data.length > 0) {
        let wordtype = '';
        for (let i = 0; i < data.length; i++) {
          wordtype = data[i].wordtype;
          if (wordtype.trim() !== '') {
            wordtype = '(' + wordtype + ')';
          }
          $('.search-result').append(`<p>
              <span class='number'>${i + 1}</span>
              <span class='wordtype'>${wordtype}</span>
                  ${data[i].definition}
              </p>
              `)

        }
      } else {
        $('.search-result').html('<p>Result not found</p>');
      }
    }
    function failureFunction(xhr, status, exception) {
      $('.search-result').html('<p>Result not found</p>');
    }
  }

});
