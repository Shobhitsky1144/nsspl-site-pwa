let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
        "/static/css/main.chunk.css",
        "/css/bootstrap.min.css",
        "/css/animate.min.css",
        "/fonts/flaticon.css",
        "/css/boxicons.min.css",
        "/css/owl.carousel.min.css",
        "/css/owl.theme.default.min.css",
        "/css/magnific-popup.css",
        "/css/nice-select.min.css",
        "/css/meanmenu.css",
        "/css/style.css",
        "/css/responsive.css",
        "/css/theme-dark.css",
        "/images/nsspl%20images/NSS%20logo%201.png",
        "/images/home-three.png",
        "/images/brand-img/brand-logo1.png",
        "/images/brand-img/brand-style1.png",
        "/images/brand-img/brand-style2.png",
        "/images/brand-img/brand-style3.png",
        "/images/brand-img/brand-style4.png",
        "/images/brand-img/brand-style5.png",
        "/images/brand-img/brand-logo1.png",
        "/images/brand-img/brand-logo2.png",
        "/images/brand-img/brand-logo3.png",
        "/images/brand-img/brand-logo4.png",
        "/images/brand-img/brand-logo5.png",
        "/images/about/about-img4.png",
        "/images/nsspl%20images/OUR%20SERVICES%20ICON/Mobile%20App%20Development.png",
        "/images/nsspl%20images/OUR%20SERVICES%20ICON/UI%20&%20UX%20DESIGN.png",
        "/images/nsspl%20images/OUR%20SERVICES%20ICON/Web%20App%20Development.png",
        "/images/nsspl%20images/OUR%20SERVICES%20ICON/Cross%20platform%20mobile%20app.png",
        "/images/nsspl%20images/OUR%20SERVICES%20ICON/E%20commerce%20platform.png",
        "/images/nsspl%20images/OUR%20SERVICES%20ICON/Digital%20transformation.png",
        "/images/nsspl%20images/OUR%20SERVICES%20ICON/AI-ML%20Solution.png",
        "/images/nsspl%20images/OUR%20SERVICES%20ICON/AR-VR%20Solution.png",
        "/images/choose-img.jpg",
        "/images/shape/line-shapensspl1.png",
        "/images/shape/line-shapensspl2.png",
        "/images/blog/blog-img1.jpg",
        "/images/blog/blog-img2.jpg",
        "/images/blog/blog-img3.jpg",
        "/images/testimonial/testimonial-img4.jpg",
        "/images/testimonial/testimonial-img2.jpg",
        "/images/testimonial/testimonial-img3.jpg",
        "/images/testimonial/testimonial-slider-img.jpg",
        "/js/jquery-min.js",
        "/js/bootstrap.bundle.min.js",
        "/js/owl.carousel.min.js",
        "/js/carousel-thumbs.js",
        "/js/carousel-thumbs.js",
        "/js/jquery.nice-select.min.js",
        "/js/wow.min.js",
        "/js/meanmenu.js",
        "/js/jquery-ui.min.js",
        "/js/jquery.magnific-popup.min.js",

        "/js/mixitup.min.js",
        "/js/jquery.ajaxchimp.min.js",
        "/js/form-validator.min.js",
        "/js/contact-form-script.js",
        "/js/contact-form-script.js",
        "/NSS%20logo.png",
        "/index.html",
        "/",
        // "https://pedantic-benz-6847bb.netlify.app/op",
        // "/users",
      ]);
    })
  );
});

// this.addEventListener(
//   "fetch",
//   (event) => {
//     // console.warn("url",event.request.url)

//     //   if (!navigator.onLine) {
//     //     if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
//     //       event.waitUntil(
//     //         this.registration.showNotification("Internet", {
//     //           body: "internet not working",
//     //         })
//     //       );
//     //     }
//     event.respondWith(
//       caches.match(event.request).then((resp) => {
//         if (resp) {
//           return resp;
//         }
//         // let requestUrl = event.request.clone();
//         // fetch(requestUrl);
//       })
//     );
//   }
//   // }
// );
this.addEventListener(
  "fetch",
  (event) => {
    // Prevent the default, and handle the request ourselves.
    //   if (!navigator.onLine) {

    // Try to get the response from a cache.
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
      })()
    );
  }
  // }
);
