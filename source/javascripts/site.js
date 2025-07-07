window.players = [];
window.playing = null;

const $formatFilterEl = $('.js-filter');
$formatFilterEl.on('change', (event) => {
  let $targetEl = $(event.target);
  $targetEl.siblings('select').val('');
  let value = event.target.value;
  let filterBy = $targetEl.data('filter');
  if(value == '') {
    $('#track-list article').removeClass('d-none');
    return;
  }

  $('#track-list article').addClass('d-none');
  $(`[data-${filterBy}="${event.target.value}"]`).removeClass('d-none');
});

$('.player-control').on('click', (event) => {
  event.preventDefault();
  player = eval($(event.target).closest('a').attr('data-control'));
  if(window.playing) {
    window.playing.pause();
    $(playing.options.container).siblings('.player-control').find('svg').replaceWith('<i class="fa-regular fa-circle-play" style="color: #FFD43B"></i>')
  }
  if(window.playing != player) {
    window.playing = player;
    player.play();
    $(event.target).closest('a').find('svg').replaceWith('<i class="fa-solid fa-pause" style="color: #FFD43B"></i>');
  }
});

$('[data-expand]').on('click', (event) => {
  event.preventDefault();
  let $trigger = $(event.target).closest('.info-link');
  let expanderClass = $trigger.attr('class');
  let $expanderTarget = $($trigger.attr('data-expand'));

  $(`[data-expanded-by='.${expanderClass}']`).hide();
  $expanderTarget.show();
});
