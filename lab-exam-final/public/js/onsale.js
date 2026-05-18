$(document).ready(function () {
  var ITEMS_PER_PAGE = 10;
  var $cards = $('#product-list .sale-card');
  var totalItems = $cards.length;
  var totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  var currentPage = 1;

  function showPage(page) {
    $cards.hide();
    var start = (page - 1) * ITEMS_PER_PAGE;
    var end = start + ITEMS_PER_PAGE;
    $cards.slice(start, end).show();
    $('#page-indicator').text('Page ' + page + ' of ' + totalPages);
    $('#prev-btn').prop('disabled', page === 1);
    $('#next-btn').prop('disabled', page === totalPages);
  }

  showPage(currentPage);

  if (totalPages <= 1) {
    $('#onsale-pagination').hide();
  }

  $('#next-btn').on('click', function () {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
      $('html, body').animate({ scrollTop: $('#product-list').offset().top - 80 }, 300);
    }
  });

  $('#prev-btn').on('click', function () {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
      $('html, body').animate({ scrollTop: $('#product-list').offset().top - 80 }, 300);
    }
  });
});
