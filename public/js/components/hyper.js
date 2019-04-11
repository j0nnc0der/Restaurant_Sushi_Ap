webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reviewLeftClicked = function reviewLeftClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
};

var reviewRightClicked = function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
};

var actions = exports.actions = {
  reviewLeftClicked: reviewLeftClicked,
  reviewRightClicked: reviewRightClicked
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUS = __webpack_require__(4);

var _ContactUS2 = _interopRequireDefault(_ContactUS);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUS2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'VISTA SUSHI RESTUARANT',
  phone: '(718) - 219 - 8652',
  location: 'Vista Sushi Restuarant'
};

var specialMenuData = [{
  title: 'Dragon Rolls Sushi',
  description: 'Shrimp with avocado, shichimi powder and spring onion.',
  price: 16.99
}, {
  title: 'Vegan Ramen Noodles',
  description: 'Mixed vedgtables, broth, top amazing tofu with carrots and spinach',
  price: 13.99
}, {
  title: 'Tempura Ultimate Rolls',
  description: 'Shrimp with vedg friend rolls',
  price: 6.99
}];

var reviewsData = [{
  company: 'Top Oriental Cuisines',
  author: 'Merrylyn Benz',
  authorInfo: 'Winner Of Chef Masters',
  highlight: 'Best Restuarant in Central London!!!',
  review: 'Vista Sushi Restuarant got to love it!'
}, {
  company: 'FS and rice',
  author: 'Paula',
  authorInfo: 'Sushi Circles',
  highlight: 'Best Restuarant in Central London!!!',
  review: 'SUSHI TASTE AMAZING'
}, {
  company: 'BM COOKING',
  author: 'Alexander',
  authorInfo: 'First Class Chef',
  highlight: 'Best Restuarant in Central London!!!',
  review: 'Mouthwatering flavours'
}, {
  company: 'Love to cook forever',
  author: 'Cindy',
  authorInfo: 'Quick Cooking Made Daily',
  highlight: 'Best Restuarant in Central London!!!',
  review: 'DEFFINITELY MY FAVOURITE PLACE'
}, {
  company: 'London Mayfair',
  author: 'Italian cooking special',
  authorInfo: 'Winner Of Chef Masters',
  highlight: 'Best Restuarant in Central London!!!',
  review: 'Loved everything about it'
}];

var randomQuoteData = [{
  author: 'Chinese Proverb',
  quote: 'Give A Man A Fish And You Feed Him For A Day; Teach A Man How To Fish And You Feed Him For A Lifetime.'
}, {
  author: 'Benz',
  quote: 'Love Oriental Meals in the City'
}, {
  author: 'Jeff',
  quote: 'Give me the best food now!'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        " Delicious Sushi Meals Of All Time"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "11111 Main Street Road, London"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                " Email: "
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "MailTo:Info@SushiMayfair.com" },
                "Info@ExampleSushiMayfair.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "0208 000 0000"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:",
              ' '
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday, Sunday ",
              (0, _hyperapp.h)("br", null),
              "from 12pm - 1.30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily ",
              (0, _hyperapp.h)("br", null),
              "from 6pm - 9:30pm"
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "socia-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "www.youtube.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-youtube-play", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "www.twitter.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "www.tripadvisor.co.uk" },
            (0, _hyperapp.h)("i", { "class": "fab fa-tripadvisor", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "www.youtube.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-youtube", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "www.facebook.com" },
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook-f", "aria-hidden": "true" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 Copyright 2018 by Jonnnnn"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'header',
    null,
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'logo' },
        'Logo'
      ),
      (0, _hyperapp.h)(
        'nav',
        null,
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Our Story'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Reviews'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Special Menu'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Reservations'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Contact Us'
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the Art of Adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
          ),
          (0, _hyperapp.h)("div", { "class": "quote" }),
          " \"The Greatest Sushi and Grill in the City of London\" ",
          (0, _hyperapp.h)(
            "strong",
            null,
            " -John"
          )
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#", "class": "reserve-btn" },
          "Reserve"
        ),
        (0, _hyperapp.h)("div", { "class": "col-md-6" }),
        (0, _hyperapp.h)("div", { "class": "photo-img" })
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuote' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"Give a man a fish and you feed him for a day; teach a man how to fish and you feed him for a lifetime."'
      ),
      (0, _hyperapp.h)(
        'span',
        { 'class': 'author' },
        ' -Chinese Proverb-'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  //  console.log ();
  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      'div',
      null,
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'Reviews'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        'h4',
        null,
        state.reviewsData[state.reviewStatus.currentReview].highlight,
        ' '
      ),
      (0, _hyperapp.h)(
        'p',
        null,
        ' ',
        state.reviewsData[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'author' },
        (0, _hyperapp.h)(
          'strong',
          null,
          ' ',
          state.reviewsData[state.reviewStatus.currentReview].author
        ),
        ' ',
        '-',
        ' ',
        (0, _hyperapp.h)(
          'em',
          null,
          ' ',
          state.reviewsData[state.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClicked();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    'section',
    { id: 'Reviews' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-8' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'side-img' },
            (0, _hyperapp.h)('img', { src: 'https://i.ibb.co/y0f27Zg/bchef.jpg' })
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { 'class': 'col-md-4' },
          currentReview(),
          (0, _hyperapp.h)(
            'div',
            { 'class': 'arrows' },
            (0, _hyperapp.h)('i', {
              onclick: leftClickBTN,
              'class': 'fas fa-arrow-left ' + (state.reviewStatus.currentReview > 0 ? 'ready' : '')
            }),
            (0, _hyperapp.h)('i', {
              onclick: rightClickBTN,
              'class': 'fas fa-arrow-right ' + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? '' : 'ready')
            })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      console.log(item.title); /* debugging*/
      return (0, _hyperapp.h)(
        'div',
        { 'class': 'col-md4' },
        (0, _hyperapp.h)(
          'div',
          { 'class': 'box' },
          (0, _hyperapp.h)(
            'div',
            { 'class': 'box-img' },
            (0, _hyperapp.h)(
              'div',
              { 'class': 'price-circle' },
              '\xA3',
              item.price
            )
          ),
          (0, _hyperapp.h)(
            'span',
            { 'class': 'title' },
            item.title
          ),
          (0, _hyperapp.h)(
            'p',
            { 'class': 'details' },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    'section',
    { id: 'SpecialMenu', 'class': 'texturebg' },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h5',
        { 'class': 'comp-title' },
        'Special Menu'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        'Delicious Meals of this Summer'
      ),
      (0, _hyperapp.h)(
        'div',
        { 'class': 'row boxes' },
        loopMenu()
      )
    ),
    (0, _hyperapp.h)(
      'a',
      { href: '#', 'class': 'link' },
      'View Full Menu'
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  console.log(state.companyInfo.title);
  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          " Welcome To"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            " (718) - 219 - 8652 "
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Monday - Friday: "
            ),
            "9 am - 9 pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Weekend:"
            ),
            "9am - 11pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group('Action Info');
      console.log('Name:', name);
      console.log('Data:', data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  }
});

/***/ })
],[12]);