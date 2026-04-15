document.documentElement.classList.add("js-enabled");

const navToggle = document.querySelector("[data-nav-toggle]");
const siteHeader = document.querySelector(".site-header");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteHeader && siteNav) {
  const closeMenu = () => {
    siteHeader.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  };

  const openMenu = () => {
    siteHeader.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const listingImages = [
  "642223322_1352874073547247_2697011021254156173.jpg",
  "642257677_1352873936880594_7783753703602586021.jpg",
  "644238941_1352874143547240_837388843688490936.jpg",
  "646708302_1357027613131893_2311104768800403662.jpg",
  "647104327_1357009536467034_6471569560121077481.jpg",
  "647120767_1357009469800374_144249342327766624.jpg",
  "650097730_1364258382408816_5166512576170051420.jpg",
  "651170365_1364258352408819_7925602335470568398.jpg",
  "651178472_1362599169241404_1425027507083807644.jpg",
  "653903442_1370081638493157_53977709429838487.jpg",
  "654114073_1368363745331613_2513388910688058272.jpg",
  "655064872_1368363621998292_8899152583267830672.jpg",
  "655662871_1376503877850933_5621963278723833109.jpg",
  "655897634_1374672681367386_1966081671956467445.jpg",
  "656949592_1374685761366078_7705420180730453550.jpg",
  "657359855_1376516741182980_6233216682074217232.jpg",
  "657582726_1376517034516284_4151816571308863945.jpg",
  "657861381_1380617320772922_2049057865700004098.jpg",
  "658361874_1380608857440435_5502470875413644370.jpg",
  "658971568_1380617280772926_8932720158490339008.jpg",
  "659076432_1380609167440404_5642647667969955479.jpg",
  "660079744_1376516774516310_1322557752646996543.jpg",
  "660220710_1382322197269101_1896283255246614320.jpg",
  "660450984_1380617564106231_8227957349582779950.jpg",
  "660475201_1382322260602428_186251289302298343.jpg",
  "660483544_1382322330602421_7889949196000984553.jpg",
  "662082007_1382321313935856_8808357208933575901.jpg",
  "666217346_1386430260191628_425921382869249889.jpg",
  "667700367_1386430526858268_1462555211711492037.jpg",
  "667797949_1386414450193209_177225021546151048.jpg",
  "668439161_1386414236859897_2492729165407498838.jpg",
  "668479243_1386414480193206_2470404179037850379.jpg",
  "668497111_1386430596858261_4744783360021720797.jpg",
  "668654917_1386414510193203_2380786212286847498.jpg",
  "668720566_1387983556702965_7326850886880415421.jpg",
  "669357934_1387977180036936_4134286519425030573.jpg"
];

const featuredImages = [
  "408e2c23a9479f7f918e7ad990d035bbl-m4198606193rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m103297931rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m1270116121rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m1437443142rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m1905080515rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m1966947589rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m2011075878rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m2482492327rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m2893672828rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m3188578046rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m3344053632rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m3475538058rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m3516882112rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m3793677054rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m3987064099rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m414497191rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m4196054454rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m711388459rd-w1280_h960.jpeg",
  "408e2c23a9479f7f918e7ad990d035bbl-m714177048rd-w1280_h960.jpeg"
];

const initSlider = (slider, images, basePath, altPrefix) => {
  const track = slider.querySelector("[data-slider-track]");
  const status = slider.querySelector("[data-slider-status]");
  const prevButton = slider.querySelector("[data-slider-prev]");
  const nextButton = slider.querySelector("[data-slider-next]");
  const viewport = slider.querySelector(".listing-slider-viewport");
  const totalSlides = images.length;
  let currentIndex = 0;

  const slidesMarkup = images
    .map(
      (filename, index) => `
        <figure class="listing-slide">
          <img
            src="${basePath}/${filename}"
            alt="${altPrefix} ${index + 1} of ${totalSlides}"
            ${index === 0 ? 'loading="eager"' : 'loading="lazy"'}
            decoding="async"
          >
        </figure>
      `
    )
    .join("");

  track.innerHTML = slidesMarkup;

  const updateSlider = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    status.textContent = `${currentIndex + 1} / ${totalSlides}`;
  };

  prevButton.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    updateSlider();
  });

  viewport.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prevButton.click();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      nextButton.click();
    }
  });

  updateSlider();
};

const listingSlider = document.querySelector("[data-listing-slider]");
if (listingSlider) {
  initSlider(
    listingSlider,
    listingImages,
    "assets/images/parade-of-homes",
    "Previous listing photo"
  );
}

const featuredSlider = document.querySelector("[data-featured-slider]");
if (featuredSlider) {
  initSlider(
    featuredSlider,
    featuredImages,
    "assets/images/3143-club-drive",
    "Featured listing photo"
  );
}
