/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "18b1d06b67e72adc35fd7499f67c8ea1"
  },
  {
    "url": "assets/css/0.styles.a5b5bc33.css",
    "revision": "3bd50f2889554b1f94d7b510cb280724"
  },
  {
    "url": "assets/img/agile-lean-sigma.117bf0a6.jpg",
    "revision": "117bf0a6a27c7fafc64aa9bccfb479a4"
  },
  {
    "url": "assets/img/lear_mvp1_all.6b1d66b3.png",
    "revision": "6b1d66b346c6338c6ad4f00164692b74"
  },
  {
    "url": "assets/img/registry-wardleymap.372883bb.png",
    "revision": "372883bb2af5523c1a40ee7edcc881ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.512c6809.js",
    "revision": "aa59ab78967b84bc01a6e3ab08520196"
  },
  {
    "url": "assets/js/11.0393bfb1.js",
    "revision": "ca80f9ce247a77e72724f47fc609a996"
  },
  {
    "url": "assets/js/12.22b15325.js",
    "revision": "bf0a1cfa1d2b71cf1aa557076e908bd6"
  },
  {
    "url": "assets/js/13.4aec6dec.js",
    "revision": "ab7db0f9545a4f6b27d2b99af05d035f"
  },
  {
    "url": "assets/js/14.f1bdce5c.js",
    "revision": "cb75dbb5b410aaabff2f3ecf602105df"
  },
  {
    "url": "assets/js/15.6039b911.js",
    "revision": "51dcbc78cb2a636ffa9c38822da3d26b"
  },
  {
    "url": "assets/js/16.07033a06.js",
    "revision": "cd50c94dfb2670a39d3c0703d03e890e"
  },
  {
    "url": "assets/js/17.c5a714bd.js",
    "revision": "91217f24cbdb25b0704b0aaf73495a92"
  },
  {
    "url": "assets/js/18.e2233f69.js",
    "revision": "c054e6a254ad043209cc85ca9ca94834"
  },
  {
    "url": "assets/js/19.34e9273b.js",
    "revision": "e864b65913ac365f24268629529006af"
  },
  {
    "url": "assets/js/20.26afe9f2.js",
    "revision": "4427054abc186e0f7cfb6f4b40da2608"
  },
  {
    "url": "assets/js/21.166e7cc0.js",
    "revision": "9ac0c97f9622772796a7b884899ea90a"
  },
  {
    "url": "assets/js/22.4ed9fd0c.js",
    "revision": "ba8d736e5abe527acccdcae4041027f0"
  },
  {
    "url": "assets/js/23.2b9cc122.js",
    "revision": "85e5e7866d9265aea2ebdc483bcf150c"
  },
  {
    "url": "assets/js/24.176d9adc.js",
    "revision": "84183ad5d887b988dbb5c60f01b84d1b"
  },
  {
    "url": "assets/js/25.017999a4.js",
    "revision": "91f576ce38abb50c4557f48741354d08"
  },
  {
    "url": "assets/js/26.7d393985.js",
    "revision": "69723880c72ea3e28f56b42ed42f7219"
  },
  {
    "url": "assets/js/27.ccdcbbb5.js",
    "revision": "2a14b19646b1ecf07e67134c2dcfa96b"
  },
  {
    "url": "assets/js/28.b5b2cad1.js",
    "revision": "97163ff8ccd4eb8537191139eb7339e6"
  },
  {
    "url": "assets/js/29.2eb69f50.js",
    "revision": "8a58242c1a859bbcf918c684349a8136"
  },
  {
    "url": "assets/js/3.eca59ce7.js",
    "revision": "5ea87f0aa413af3a88a79d1050967ea7"
  },
  {
    "url": "assets/js/30.677e074a.js",
    "revision": "0054da019b3fd2156e012ee5290aade5"
  },
  {
    "url": "assets/js/31.d7191b22.js",
    "revision": "2f800cc6bb94c16579af0c6ad337cf4b"
  },
  {
    "url": "assets/js/4.9f537b86.js",
    "revision": "df068e446b55ad3cba5fd99b3c70b476"
  },
  {
    "url": "assets/js/5.2429db8d.js",
    "revision": "c58f34cc826ad2b556a1599a18e539d0"
  },
  {
    "url": "assets/js/6.33ee7ed3.js",
    "revision": "aa979c00250a0d0ed99218a46812b06f"
  },
  {
    "url": "assets/js/7.545e230b.js",
    "revision": "561b20f1b19b17d53a7ec3c28b55652e"
  },
  {
    "url": "assets/js/8.e33d59b4.js",
    "revision": "2ea23c984cef4ef5cf065a3ba5b2c3e9"
  },
  {
    "url": "assets/js/9.6e40d688.js",
    "revision": "e1292fd741ab7d7e2e81beda3da6e342"
  },
  {
    "url": "assets/js/app.557a01f7.js",
    "revision": "633dd3b1667dc8e182e92f24702597ac"
  },
  {
    "url": "assets/js/vendors~notification.4e9794df.js",
    "revision": "f2813c6a11af5c396c4e1ec0f3197d44"
  },
  {
    "url": "design/index.html",
    "revision": "a0794339f79e7a8a76df313c91fd6111"
  },
  {
    "url": "design/methodology.html",
    "revision": "f383fccf9f54401f92f5263449635b19"
  },
  {
    "url": "design/mvp-ar/database.html",
    "revision": "5f6e29f10374457aacb602accca8f7d7"
  },
  {
    "url": "design/mvp-ar/index.html",
    "revision": "ac33341abd225640f229b5afc5d1547a"
  },
  {
    "url": "faq/index.html",
    "revision": "d85b0bb2b9b64c15bb2e11881f5d2de8"
  },
  {
    "url": "guide/api-services/deploy.html",
    "revision": "527fb89a50b202732000be34fadfd477"
  },
  {
    "url": "guide/api-services/directory-structure.html",
    "revision": "ed9b9dd9c6ae7f1b3bb59177e2f6b56a"
  },
  {
    "url": "guide/api-services/setup.html",
    "revision": "439d1467d342b119277cc25b5bdf52d8"
  },
  {
    "url": "guide/database/index.html",
    "revision": "1e594a26f503347f2acfe95733d625b4"
  },
  {
    "url": "guide/documentation.html",
    "revision": "34cca76603d7766ceec0b86056364437"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "21ffdacddbab5a45e2043368d40ae318"
  },
  {
    "url": "guide/index.html",
    "revision": "c3f77235aaaf1f9f2695d4c9e86cc936"
  },
  {
    "url": "guide/standards.html",
    "revision": "6c03791b9f43a193add44d3c21ff2d21"
  },
  {
    "url": "guide/tools.html",
    "revision": "354c52c30c86fd05f9fd55c91283e637"
  },
  {
    "url": "guide/web-app/deploy.html",
    "revision": "9f26736ee57aca6d1dac4b5c10a550b4"
  },
  {
    "url": "guide/web-app/directory-structure.html",
    "revision": "1a1b1775d91bceb9da7b63edfcafda89"
  },
  {
    "url": "guide/web-app/i18n.html",
    "revision": "1049949bf729dd4056450cd247fa87dc"
  },
  {
    "url": "guide/web-app/setup.html",
    "revision": "46d8ae025d899f9820fef08f60210a43"
  },
  {
    "url": "hero.png",
    "revision": "e23db9931fb14055b765092ce28a4b70"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/Asset 1.png",
    "revision": "bc4ceb61731ac94966fa60b3caf8ab1c"
  },
  {
    "url": "icons/favicon-16x16.1.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "bc4ceb61731ac94966fa60b3caf8ab1c"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "fa47652efa2b353bd870de90685f0c8c"
  },
  {
    "url": "lear_mvp1_all.png",
    "revision": "6b1d66b346c6338c6ad4f00164692b74"
  },
  {
    "url": "logo.png",
    "revision": "e23db9931fb14055b765092ce28a4b70"
  },
  {
    "url": "other/glossary.html",
    "revision": "74e2e522af45641b40fba5838e82f2d8"
  },
  {
    "url": "registry-wardleymap.png",
    "revision": "372883bb2af5523c1a40ee7edcc881ea"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
