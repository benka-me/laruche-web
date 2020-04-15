webpackHotUpdate("styles",{

/***/ "./components/bee/install/install.scss":
/*!*********************************************!*\
  !*** ./components/bee/install/install.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main","title":"title","project-board":"project-board","footer":"footer","install":"install","installButton":"installButton","installDone":"installDone","copied":"copied","copy":"copy"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1586954895514");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.8c8f651d0f35856e87a1.hot-update.js.map