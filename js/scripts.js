$('#Williamsburg').hover(function() {
  $(this).attr('src', 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19542137/4_191218_15_27_09__7R46580.jpg');
}, function() {
  $(this).attr('src', 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19542136/3_111006_16_19_03_DSC_0238.jpg');
})

$('#Long-Island-City').hover(function() {
  $(this).attr('src', 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19542125/2_191218_15_40_00__7R46616.jpg');
}, function() {
  $(this).attr('src', 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19542124/1_120227_12_39_17_DSC_0493.jpg');
})

$('#Midtown-Manhattan').hover(function() {
  $(this).attr('src', 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19542151/10_191218_14_59_28__7R46527_Edit.jpg');
}, function() {
  $(this).attr('src', "https://cdn.vox-cdn.com/uploads/chorus_asset/file/19542150/9_120207_17_02_00_DSC_0645__1_.jpg");
})

$('#Hudson-Yards').hover(function() {
  $(this).attr('src', 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/19542177/14_181229_10_20_18_5DSR1771.jpg');
}, function() {
  $(this).attr('src', "https://cdn.vox-cdn.com/uploads/chorus_asset/file/19542173/13_111028_16_02_47_DSC_0262.jpg");
})

$('#Williamsburg').hover(function() {
  $('#time-w').text("Now");
}, function() {
  $('#time-w').text("Then");
})
$('#Long-Island-City').hover(function() {
  $('#time-LIC').text("Now");
}, function() {
  $('#time-LIC').text("Then");
})

$('#Midtown-Manhattan').hover(function() {
  $('#time-mm').text("Now");
}, function() {
  $('#time-mm').text("Then");
})

$('#Hudson-Yards').hover(function() {
  $('#time-hy').text("Now");
}, function() {
  $('#time-hy').text("Then");
})
