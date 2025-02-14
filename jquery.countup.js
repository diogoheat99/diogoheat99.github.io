(function($) {
    // Time units in seconds
    var years   = 365.25 * 24 * 60 * 60,
        months  = 30.44  * 24 * 60 * 60,
        days    = 24 * 60 * 60,
        hours   = 60 * 60,
        minutes = 60;
  
    $.fn.countup = function(prop) {
      var options = $.extend({
        callback: function() {},
        timestamp: 0
      }, prop);
  
      var elapsed, y, mo, d, h, m, s, positions;
  
      // Initialize the markup
      init(this, options);
      positions = this.find('.position');
  
      (function tick() {
        // Calculate total elapsed seconds
        elapsed = Math.floor((new Date() - options.timestamp) / 1000);
  
        // Years
        y = Math.floor(elapsed / years);
        elapsed -= y * years;
  
        // Months
        mo = Math.floor(elapsed / months);
        elapsed -= mo * months;
  
        // Days
        d = Math.floor(elapsed / days);
        elapsed -= d * days;
  
        // Hours
        h = Math.floor(elapsed / hours);
        elapsed -= h * hours;
  
        // Minutes
        m = Math.floor(elapsed / minutes);
        elapsed -= m * minutes;
  
        // Seconds
        s = Math.floor(elapsed);
  
        // Update each pair of digits
        updateDuo(0, 1, y);   // Years
        updateDuo(2, 3, mo);  // Months
        updateDuo(4, 5, d);   // Days
        updateDuo(6, 7, h);   // Hours
        updateDuo(8, 9, m);   // Minutes
        updateDuo(10, 11, s); // Seconds
  
        setTimeout(tick, 1000);
      })();
  
      function updateDuo(minor, major, value) {
        switchDigit(positions.eq(minor), Math.floor(value / 10) % 10);
        switchDigit(positions.eq(major), value % 10);
      }
  
      function init(elem, options) {
        elem.addClass('countdownHolder');
  
        // Create 6 pairs of digits for Y, M, D, H, M, S
        for (let i = 0; i < 6; i++) {
          $('<span class="countPair">').html(
            '<span class="position"><span class="digit static">0</span></span>' +
            '<span class="position"><span class="digit static">0</span></span>'
          ).appendTo(elem);
  
          // Add colons between pairs except after the last
          if (i < 5) {
            elem.append('<span class="countDiv countDiv' + i + '"></span>');
          }
        }
      }
  
      function switchDigit(position, number) {
        // Update the digit text
        position.find('.digit').text(number);
      }
    };
  })(jQuery);
  