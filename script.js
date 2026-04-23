// =====================
// СЛАЙДЕР АВТОПАРКА
// =====================
var fleetTrack = document.getElementById('fleetTrack');
var fleetPrev = document.getElementById('fleetPrev');
var fleetNext = document.getElementById('fleetNext');

if (fleetTrack && fleetPrev && fleetNext) {
  var visible = window.innerWidth <= 768 ? 1 : 3;
  var cards = Array.from(fleetTrack.querySelectorAll('.card'));
  var total = cards.length;
  var fleetCurrent = 0;
  var cardWidth = 0;

  for (var i = 0; i < visible; i++) {
    fleetTrack.appendChild(cards[i].cloneNode(true));
    fleetTrack.insertBefore(cards[total - visible + i].cloneNode(true), fleetTrack.firstChild);
  }

  function applyCardWidths() {
    var allCards = fleetTrack.querySelectorAll('.card');
    var sliderWidth = fleetTrack.parentElement.offsetWidth;
    var itemW = visible === 1 ? sliderWidth : (sliderWidth - 48) / 3;
    Array.from(allCards).forEach(function(card) {
      card.style.flex = '0 0 ' + itemW + 'px';
      card.style.width = itemW + 'px';
    });
    return itemW + 24;
  }

  fleetCurrent = visible;
  cardWidth = applyCardWidths();
  fleetTrack.style.transition = 'none';
  fleetTrack.style.transform = 'translateX(-' + (fleetCurrent * cardWidth) + 'px)';

  function fleetGoTo(index) {
    cardWidth = applyCardWidths();
    fleetCurrent = index;
    fleetTrack.style.transition = 'transform 0.4s ease';
    fleetTrack.style.transform = 'translateX(-' + (fleetCurrent * cardWidth) + 'px)';
  }

  fleetTrack.addEventListener('transitionend', function () {
    var allCards = fleetTrack.querySelectorAll('.card');
    var newTotal = allCards.length;
    if (fleetCurrent <= visible - 1) {
      fleetTrack.style.transition = 'none';
      fleetCurrent = newTotal - visible * 2 + fleetCurrent;
      fleetTrack.style.transform = 'translateX(-' + (fleetCurrent * cardWidth) + 'px)';
    }
    if (fleetCurrent >= newTotal - visible) {
      fleetTrack.style.transition = 'none';
      fleetCurrent = fleetCurrent - (newTotal - visible * 2);
      fleetTrack.style.transform = 'translateX(-' + (fleetCurrent * cardWidth) + 'px)';
    }
  });

  fleetPrev.addEventListener('click', function () { fleetGoTo(fleetCurrent - 1); });
  fleetNext.addEventListener('click', function () { fleetGoTo(fleetCurrent + 1); });
}

// =====================
// СЛАЙДЕР ОТЗЫВОВ
// =====================
var reviewsTrack = document.getElementById('reviewsTrack');
var reviewsPrev = document.getElementById('reviewsPrev');
var reviewsNext = document.getElementById('reviewsNext');

if (reviewsTrack && reviewsPrev && reviewsNext) {
  var rVisible = window.innerWidth <= 768 ? 1 : 3;
  var rItems = Array.from(reviewsTrack.querySelectorAll('.reviews__item'));
  var rTotal = rItems.length;
  var rCurrent = 0;
  var rItemWidth = 0;

  for (var j = 0; j < rVisible; j++) {
    reviewsTrack.appendChild(rItems[j].cloneNode(true));
    reviewsTrack.insertBefore(rItems[rTotal - rVisible + j].cloneNode(true), reviewsTrack.firstChild);
  }

  function applyItemWidths() {
    var allItems = reviewsTrack.querySelectorAll('.reviews__item');
    var sliderWidth = reviewsTrack.parentElement.offsetWidth;
    var itemW = rVisible === 1 ? sliderWidth : (sliderWidth - 48) / 3;
    Array.from(allItems).forEach(function(item) {
      item.style.flex = '0 0 ' + itemW + 'px';
      item.style.width = itemW + 'px';
    });
    return itemW + 24;
  }

  rCurrent = rVisible;
  rItemWidth = applyItemWidths();
  reviewsTrack.style.transition = 'none';
  reviewsTrack.style.transform = 'translateX(-' + (rCurrent * rItemWidth) + 'px)';

  function reviewsGoTo(index) {
    rItemWidth = applyItemWidths();
    rCurrent = index;
    reviewsTrack.style.transition = 'transform 0.4s ease';
    reviewsTrack.style.transform = 'translateX(-' + (rCurrent * rItemWidth) + 'px)';
  }

  reviewsTrack.addEventListener('transitionend', function () {
    var allItems = reviewsTrack.querySelectorAll('.reviews__item');
    var newTotal = allItems.length;
    if (rCurrent <= rVisible - 1) {
      reviewsTrack.style.transition = 'none';
      rCurrent = newTotal - rVisible * 2 + rCurrent;
      reviewsTrack.style.transform = 'translateX(-' + (rCurrent * rItemWidth) + 'px)';
    }
    if (rCurrent >= newTotal - rVisible) {
      reviewsTrack.style.transition = 'none';
      rCurrent = rCurrent - (newTotal - rVisible * 2);
      reviewsTrack.style.transform = 'translateX(-' + (rCurrent * rItemWidth) + 'px)';
    }
  });

  reviewsPrev.addEventListener('click', function () { reviewsGoTo(rCurrent - 1); });
  reviewsNext.addEventListener('click', function () { reviewsGoTo(rCurrent + 1); });
}

// =====================
// МАСКА ДАТЫ дд.мм.гггг
// =====================
function maskDate(el) {
  el.addEventListener('input', function () {
    var v = this.value.replace(/\D/g, '').slice(0, 8);
    if (v.length > 4) v = v.slice(0, 2) + '.' + v.slice(2, 4) + '.' + v.slice(4);
    else if (v.length > 2) v = v.slice(0, 2) + '.' + v.slice(2);
    this.value = v;
  });
}

// =====================
// МАСКА ВРЕМЕНИ чч:мм
// =====================
function maskTime(el) {
  el.addEventListener('input', function () {
    var v = this.value.replace(/\D/g, '').slice(0, 4);
    if (v.length > 2) v = v.slice(0, 2) + ':' + v.slice(2);
    this.value = v;
  });
}

var dateFrom = document.getElementById('dateFrom');
var dateTo = document.getElementById('dateTo');
var timeFrom = document.getElementById('timeFrom');
var timeTo = document.getElementById('timeTo');

if (dateFrom) maskDate(dateFrom);
if (dateTo) maskDate(dateTo);
if (timeFrom) maskTime(timeFrom);
if (timeTo) maskTime(timeTo);
