   //======== Lightbox Init=========
  // Lightbox Init
  $(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // ---------Glide js ----------
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    focusAt: 'center'
  }).mount();