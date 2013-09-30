angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("app/templates/home.html",
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"span2\">\n" +
    "            <a href=\"#\" id=\"tag\" class=\"rectangle\"><img src=\"app/images/tag.png\"></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\" style=\"display:none;\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"span12\">\n" +
    "      <div class=\"btn-toolbar\">\n" +
    "    <ul id=\"options\" class=\"option-set btn-group\">\n" +
    "      <li class=\"btn\" data-type=\"original\">Original Order</li>\n" +
    "      <li class=\"btn\" data-type=\"name\">Name</li>\n" +
    "      <li class=\"btn\" data-type=\"category\">Category</li>\n" +
    "      <li class=\"btn\" data-type=\"random\">Random</li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<!-- Veil Code -->\n" +
    "<div class=\"fixed veil\" id=\"veil\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"row-fluid\">\n" +
    "      <div class=\"span12 text-center\">\n" +
    "        <div class=\"inner-wrapper\">\n" +
    "          <div  class=\"logo-big\">\n" +
    "              <img src=\"app/images/10yr.png\">\n" +
    "          </div>\n" +
    "          <h1>Ten Years of Rectangles</h1>\n" +
    "          <p>\n" +
    "              Aerobic brewpub fermentation, ibu wit. Hops priming noble hops aroma hops lauter tun barrel? Trappist; hydrometer brewhouse scotch ale copper autolysis infusion krug? Black malt carboy conditioning wort chiller. Gravity malt brewing mead finishing hops mash. Pint glass degrees plato brewhouse, units of bitterness.\n" +
    "          </p>\n" +
    "          <div class=\"logo-small\">\n" +
    "              <img src=\"app/images/keystone.png\">\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"credits-wrapper\">\n" +
    "            <h3>Another fine project from</h3>\n" +
    "            <span class=\"logo\">The Heads <em>of</em> State</span>\n" +
    "        </div>\n" +
    "        <div class=\"bottom-dismiss-wrapper\">\n" +
    "            <a href=\"#\" id=\"dismiss-veil\"><i class=\"icon-chevron-down\"></i></a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container-fluid\" style=\"height: 100%; margin-top: 50px; position: relative;\">\n" +
    "  <div class=\"row-fluid\">\n" +
    "    <div class=\"span2 left-nav\" id=\"left-nav\">\n" +
    "      <div class=\"inner-nav-wrapper-left\">\n" +
    "        <a id=\"scroll-top\" class=\"ss-navigateup ss-icon\"></a>\n" +
    "        <a id=\"four-col\" class=\"ss-microsoft ss-icon ss-social-regular\"></a>\n" +
    "        <a id=\"two-col\" class=\"ss-pause ss-icon\"></a>\n" +
    "        <a id=\"sample\" class=\"ss-sample ss-icon\"></a>\n" +
    "        <a id=\"red\" class=\"color-icon color-icon-red\" data-color=\"red\"></a>\n" +
    "        <a id=\"black\" class=\"color-icon color-icon-black\" data-color=\"black\"></a>\n" +
    "        <a id=\"yellow\" class=\"color-icon color-icon-yellow\" data-color=\"yellow\"></a>\n" +
    "        <a id=\"green\" class=\"color-icon color-icon-green\" data-color=\"green\"></a>\n" +
    "        <a id=\"blue\" class=\"color-icon color-icon-blue\" data-color=\"blue\"></a>\n" +
    "        <a id=\"orange\" class=\"color-icon color-icon-orange\" data-color=\"orange\"></a>\n" +
    "        <a id=\"white\" class=\"color-icon color-icon-white\" data-color=\"white\"></a>\n" +
    "        <a id=\"purple\" class=\"color-icon color-icon-purple\" data-color=\"purple\"></a>\n" +
    "        <a id=\"pink\" class=\"color-icon color-icon-pink\" data-color=\"pink\"></a>\n" +
    "        <a id=\"brown\" class=\"color-icon color-icon-brown\" data-color=\"brown\"></a>\n" +
    "        <a id=\"grey\" class=\"color-icon color-icon-grey\" data-color=\"grey\"></a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"span8\" ng-controller=\"RectangleController\">\n" +
    "      <div id=\"masonry\" class=\"row masonry two-col\">\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"span2 right-nav\" id=\"right-nav\">\n" +
    "      <div class=\"inner-nav-wrapper-right\">\n" +
    "        <a class=\"ss-facebook ss-icon ss-social-regular\" href=\"http://www.facebook.com/share.php?u=http://tenyearsofrectangles.com\" target=\"_blank\"></a>\n" +
    "        <a class=\"ss-twitter ss-icon ss-social-regular\" href=\"https://twitter.com/intent/tweet?original_referer=http://tenyearsofrectangles.com&amp;url=http://tenyearsofrectangles.com&amp;source=tweetbutton\"></a>\n" +
    "        <a class=\"ss-instagram ss-icon ss-social-regular\"></a>\n" +
    "        <a class=\"hos-menu-icon\" href=\"http://theheadsofstate.com/\" target=\"_blank\"></a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<nav id=\"page_nav\" style=\"display:none;\">\n" +
    "  <a href=\"../pages/2.html\"></a>\n" +
    "</nav>\n"
  );

  $templateCache.put("app/test/e2e/runner.html",
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "  <head>\n" +
    "    <title>End2end Test Runner</title>\n" +
    "    <script src=\"../../../../bower_components/angular-scenario/angular-scenario.js\" ng-autotest></script>\n" +
    "    <script src=\"scenarios.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "  </body>\n" +
    "</html>\n"
  );

}]);
