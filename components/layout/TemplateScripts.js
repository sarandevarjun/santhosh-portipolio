"use client";

import { useEffect } from "react";

const SCRIPTS = [
  "/assets/js/jquery.min.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/js/jquery.meanmenu.js",
  "/assets/js/jquery.easing.min.js",
  "/assets/js/owl.carousel.min.js",
  "/assets/js/jquery.magnific-popup.min.js",
  "/assets/js/jquery.nice-select.min.js",
  "/assets/js/jquery.appear.js",
  "/assets/js/odometer.min.js",
  "/assets/js/imagelightbox.min.js",
  "/assets/js/jquery.ajaxchimp.min.js",
  "/assets/js/form-validator.min.js",
  "/assets/js/contact-form-script.js",
  "/assets/js/main.js",
  "/assets/revolution/js/jquery.themepunch.tools.min.js",
  "/assets/revolution/js/jquery.themepunch.revolution.min.js",
  "/assets/revolution/js/extensions/revolution.extension.actions.min.js",
  "/assets/revolution/js/extensions/revolution.extension.carousel.min.js",
  "/assets/revolution/js/extensions/revolution.extension.kenburn.min.js",
  "/assets/revolution/js/extensions/revolution.extension.layeranimation.min.js",
  "/assets/revolution/js/extensions/revolution.extension.migration.min.js",
  "/assets/revolution/js/extensions/revolution.extension.navigation.min.js",
  "/assets/revolution/js/extensions/revolution.extension.parallax.min.js",
  "/assets/revolution/js/extensions/revolution.extension.slideanims.min.js",
  "/assets/revolution/js/extensions/revolution.extension.video.min.js",
  "/assets/js/rev-slider-custom.js",
];

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

export default function TemplateScripts() {
  useEffect(() => {
    let cancelled = false;

    (async () => {
      for (const src of SCRIPTS) {
        if (cancelled) return;
        await loadScript(src);
      }
    })().catch(console.error);

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
