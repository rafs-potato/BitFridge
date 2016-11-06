const tooltipConfig = {
  title: 'Hello!',
  container: 'body',
  trigger: 'manual',
  placement: 'left',
  offset: '3 0'
};

function showTooltip(target) {
  $(target).tooltip(tooltipConfig);
  $(target).tooltip('show');
  setTimeout(function () {
    $(target).tooltip('hide');
  }, 1000);
  $(target).on('hidden.bs.tooltip', function () {
    $(target).tooltip('dispose');
  });
}
