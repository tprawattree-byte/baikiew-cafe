/* =========================================================
   Baikiew Café — interactions
   ========================================================= */
(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- 1. Sticky header + mobile nav ---------- */
  var header = $('#siteHeader');
  var nav = $('#nav');
  var hamburger = $('#hamburger');

  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 8);
  }, { passive: true });

  hamburger.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- 2. Scroll-spy on nav links ---------- */
  var sections = ['about', 'menu', 'signature', 'space', 'visit']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        $$('.nav > a').forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 3. Reveal on scroll ---------- */
  var revealables = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        setTimeout(function () { entry.target.classList.add('visible'); }, i * 70);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealables.forEach(function (el) { revealer.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- 4. Menu rendering + filter + search ---------- */
  var MENU = window.MENU || [];
  var TAG_LABELS = window.TAG_LABELS || {};
  var filtersEl = $('#filters');
  var outputEl = $('#menuOutput');
  var emptyEl = $('#menuEmpty');
  var searchEl = $('#menuSearch');
  var activeCat = 'all';

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  function buildFilters() {
    var cats = [{ id: 'all', name: 'ทั้งหมด' }].concat(MENU.map(function (c) {
      return { id: c.id, name: c.name };
    }));
    filtersEl.innerHTML = cats.map(function (c) {
      return '<button class="chip" role="tab" data-cat="' + c.id + '" aria-selected="' +
        (c.id === activeCat) + '">' + esc(c.name) + '</button>';
    }).join('');
  }

  function tagsHTML(tags) {
    if (!tags || !tags.length) return '';
    return tags.map(function (t) {
      return '<span class="tag tag--' + t + '">' + esc(TAG_LABELS[t] || t) + '</span>';
    }).join('');
  }

  function priceHTML(item) {
    if (item.single != null) {
      return '<div class="item-single">' + item.single + '</div>';
    }
    var labels = ['ร้อน', 'เย็น', 'ปั่น'];
    var cells = (item.price || []).map(function (p, i) {
      return '<span data-label="' + labels[i] + '"' + (p == null ? ' class="na"' : '') + '>' +
        (p == null ? '—' : p) + '</span>';
    }).join('');
    return '<div class="item-prices">' + cells + '</div>';
  }

  function matches(item, q) {
    if (!q) return true;
    var hay = (item.th + ' ' + item.en + ' ' + (item.desc || '')).toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function render() {
    var q = (searchEl.value || '').trim().toLowerCase();
    var html = '';
    var total = 0;

    MENU.forEach(function (cat) {
      if (activeCat !== 'all' && activeCat !== cat.id) return;
      var items = cat.items.filter(function (it) { return matches(it, q); });
      if (!items.length) return;
      total += items.length;

      html += '<section class="menu-cat">' +
        '<div class="cat-head"><h3>' + esc(cat.name) + '</h3><span class="cat-en">' + esc(cat.en) + '</span></div>' +
        '<p class="cat-note">' + esc(cat.note) + '</p>';

      if (cat.columns) {
        html += '<div class="price-legend"><span></span><div class="cols">' +
          '<span>ร้อน</span><span>เย็น</span><span>ปั่น</span></div></div>';
      }

      html += '<div class="item-list">' + items.map(function (it) {
        return '<article class="menu-item">' +
          '<div><div class="item-name">' + esc(it.th) +
          '<span class="item-en">' + esc(it.en) + '</span>' + tagsHTML(it.tags) + '</div>' +
          (it.desc ? '<p class="item-desc">' + esc(it.desc) + '</p>' : '') + '</div>' +
          priceHTML(it) +
          '</article>';
      }).join('') + '</div></section>';
    });

    outputEl.innerHTML = html;
    emptyEl.hidden = total > 0;
  }

  if (filtersEl && outputEl) {
    buildFilters();
    render();

    filtersEl.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      activeCat = chip.dataset.cat;
      $$('.chip', filtersEl).forEach(function (c) {
        c.setAttribute('aria-selected', String(c === chip));
      });
      render();
    });

    var searchTimer;
    searchEl.addEventListener('input', function () {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(render, 140);
    });
  }

  /* ---------- 5. Open / closed indicator ---------- */
  (function openStatus() {
    var el = $('#openNow');
    var textEl = $('#openNowText');
    if (!el || !textEl) return;

    var now = new Date();
    var day = now.getDay();                 // 0 = อาทิตย์
    var mins = now.getHours() * 60 + now.getMinutes();
    var weekend = (day === 0 || day === 6);
    var open = weekend ? 8 * 60 : 7 * 60;
    var close = weekend ? 20 * 60 : 19 * 60;

    function fmt(m) {
      return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
    }

    if (mins >= open && mins < close) {
      textEl.textContent = 'ตอนนี้เปิดอยู่ · ปิด ' + fmt(close) + ' น.';
    } else {
      el.classList.add('closed');
      textEl.textContent = mins < open
        ? 'ตอนนี้ปิดอยู่ · เปิด ' + fmt(open) + ' น.'
        : 'ตอนนี้ปิดแล้ว · พรุ่งนี้เปิด ' + fmt(open) + ' น.';
    }
  })();

  /* ---------- 6. Reservation form ---------- */
  var form = $('#reserveForm');
  if (form) {
    var dateInput = $('#rDate');
    var today = new Date();
    var iso = function (d) {
      return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    };
    dateInput.min = iso(today);
    var maxDate = new Date(today.getTime());
    maxDate.setDate(maxDate.getDate() + 60);
    dateInput.max = iso(maxDate);

    var RULES = {
      rName: function (v) { return v.trim().length >= 2 ? '' : 'กรุณากรอกชื่อผู้จอง'; },
      rPhone: function (v) {
        var digits = v.replace(/\D/g, '');
        return digits.length >= 9 ? '' : 'กรุณากรอกเบอร์โทรให้ครบ';
      },
      rDate: function (v) { return v ? '' : 'กรุณาเลือกวันที่'; },
      rTime: function (v) { return v ? '' : 'กรุณาเลือกเวลา'; },
      rGuests: function (v) { return v ? '' : 'กรุณาเลือกจำนวนคน'; }
    };

    function validateField(id) {
      var input = document.getElementById(id);
      var msg = RULES[id](input.value);
      var errEl = form.querySelector('.err[data-for="' + id + '"]');
      errEl.textContent = msg;
      input.closest('.field').classList.toggle('invalid', !!msg);
      return !msg;
    }

    Object.keys(RULES).forEach(function (id) {
      var input = document.getElementById(id);
      input.addEventListener('blur', function () { validateField(id); });
      input.addEventListener('input', function () {
        if (input.closest('.field').classList.contains('invalid')) validateField(id);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = Object.keys(RULES).map(validateField).every(Boolean);
      var success = $('#formSuccess');

      if (!ok) {
        success.hidden = true;
        form.querySelector('.field.invalid input, .field.invalid select').focus();
        return;
      }

      var name = $('#rName').value.trim();
      var d = new Date($('#rDate').value + 'T00:00:00');
      var thaiDate = d.toLocaleDateString('th-TH', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

      success.innerHTML = '✓ ขอบคุณคุณ<b> ' + esc(name) + ' </b>เราได้รับคำขอจองแล้ว<br />' +
        esc(thaiDate) + ' เวลา ' + esc($('#rTime').value) + ' น. · ' + esc($('#rGuests').value) + '<br />' +
        '<span style="opacity:.75">ทีมงานจะโทรยืนยันภายใน 1 ชั่วโมงในเวลาทำการ</span>';
      success.hidden = false;
      form.reset();
      success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  /* ---------- 7. Newsletter ---------- */
  var newsForm = $('#newsForm');
  if (newsForm) {
    newsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = $('#newsEmail');
      var msg = $('#newsMsg');
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
      msg.textContent = valid
        ? '✓ สมัครเรียบร้อย แล้วเจอกันในจดหมายฉบับหน้า'
        : 'กรุณากรอกอีเมลให้ถูกต้อง';
      msg.style.color = valid ? '' : '#F0B7A8';
      if (valid) input.value = '';
    });
  }

  /* ---------- 8. Year ---------- */
  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
