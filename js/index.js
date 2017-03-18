'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shrek = false;

var App = function (_React$Component) {
   _inherits(App, _React$Component);

   function App(props) {
      _classCallCheck(this, App);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.state = {
         currentboard: ['', '', '', '', '', '', '', '', ''],
         turn: '',
         player: '',
         showform: true
      };
      return _this;
   }

   App.prototype.click = function click(i) {
      if (this.state.currentboard[i] == '') {
         shrek = true;
         if (this.state.player == 'X') {
            var local = this.state.currentboard;
            local[i] = "X";
            this.setState({
               currentboard: local
            }, function () {
               this.checkwinner();
               this.ai();
            });
         } else {
            var local = this.state.currentboard;
            local[i] = "O";
            this.setState({
               currentboard: local
            }, function () {
               this.checkwinner();
               this.ai();
            });
         }
      }
   };

   App.prototype.checkwinner = function checkwinner() {
      var copy = this.state.currentboard;
      if (copy[0] == copy[1] && copy[1] == copy[2] && copy[0] !== '' && copy[1] !== '' && copy[2] !== '' || copy[3] == copy[4] && copy[4] == copy[5] && copy[3] !== '' && copy[4] !== '' && copy[5] !== '' || copy[6] == copy[7] && copy[7] == copy[8] && copy[6] !== '' && copy[7] !== '' && copy[8] !== '' || copy[0] == copy[3] && copy[3] == copy[6] && copy[0] !== '' && copy[3] !== '' && copy[6] !== '' || copy[1] == copy[4] && copy[4] == copy[7] && copy[1] !== '' && copy[4] !== '' && copy[7] !== '' || copy[2] == copy[5] && copy[5] == copy[8] && copy[2] !== '' && copy[5] !== '' && copy[8] !== '' || copy[2] == copy[4] && copy[4] == copy[6] && copy[2] !== '' && copy[4] !== '' && copy[6] !== '' || copy[0] == copy[4] && copy[4] == copy[8] && copy[0] !== '' && copy[4] !== '' && copy[8] !== '') {
         if (shrek) {
            alert('You won!');
            this.clear();
         } else if (!shrek) {
            alert('Computer won!');
            this.clear();
         }
      } else if ((copy[0] && copy[1] && copy[2] && copy[3] && copy[4] && copy[5] && copy[6] && copy[7] && copy[8]) !== '') {
         alert('Draw');
         this.clear();
      }
   };

   App.prototype.ai = function ai() {
      if (this.state.turn !== '' && shrek != null) {
         shrek = false;
         var possible = [];
         var boardcopy = this.state.currentboard;
         for (var x = 0; x < boardcopy.length; x++) {
            if (boardcopy[x] == '') {
               possible.push(x);
            }
         }
         var move = Math.floor(Math.random() * possible.length);
         var kek = possible[move];
         if (this.state.player == 'X') {
            boardcopy[kek] = 'O';
         } else {
            boardcopy[kek] = 'X';
         }
         this.setState({
            currentboard: boardcopy,
            turn: 'ai'
         }, function () {
            this.checkwinner();
         });
      }
   };

   App.prototype.xchosen = function xchosen() {
      shrek = true;
      this.setState({
         player: 'X',
         turn: 'player',
         currentboard: ['', '', '', '', '', '', '', '', ''],
         showform: false
      });
   };

   App.prototype.clear = function clear() {
      shrek = null;
      this.setState({
         player: '',
         turn: '',
         showform: true
      });
   };

   App.prototype.clearboard = function clearboard() {
      shrek = null;
      this.setState({
         player: '',
         turn: '',
         currentboard: ['', '', '', '', '', '', '', '', ''],
         showform: true
      });
   };

   App.prototype.ochosen = function ochosen() {
      var _this2 = this;

      shrek = false;
      this.setState({
         player: 'O',
         turn: 'ai',
         currentboard: ['', '', '', '', '', '', '', '', ''],
         showform: false
      }, function () {
         return _this2.ai();
      });
   };

   App.prototype.choose = function choose() {
      var _this3 = this;

      return React.createElement(
         'div',
         null,
         React.createElement(
            'div',
            { className: 'row text-center', style: { fontSize: 30 } },
            'Choose: ',
            React.createElement(
               'button',
               { onClick: function onClick() {
                     return _this3.xchosen();
                  }, className: 'btn btn-lg btn-primary', style: { fontSize: 30 } },
               React.createElement(
                  'strong',
                  null,
                  'X'
               )
            ),
            ' or ',
            React.createElement(
               'button',
               { style: { fontSize: 30 }, className: 'btn btn-lg btn-warning', onClick: function onClick() {
                     return _this3.ochosen();
                  } },
               React.createElement(
                  'strong',
                  null,
                  'O'
               )
            )
         ),
         React.createElement('br', null),
         React.createElement(
            'div',
            { className: 'row text-center', style: { fontSize: 20 } },
            'X always go first'
         )
      );
   };

   App.prototype.render = function render() {
      var _this4 = this;

      var table = this.state.currentboard.map(function (item, i) {
         return React.createElement(
            'button',
            { className: 'btn btn-default cell', style: { fontSize: "60px" }, key: i, onClick: function onClick() {
                  return _this4.click(i);
               } },
            item
         );
      });
      return React.createElement(
         'div',
         null,
         React.createElement(
            'div',
            { className: 'row text-center', id: 'title' },
            'Tic Tac Toe by ',
            React.createElement(
               'a',
               { href: 'https://www.github.com/zooll8', target: '_blank' },
               'Zooll'
            )
         ),
         React.createElement(
            'div',
            { id: 'container', className: 'text-center' },
            React.createElement(
               'table',
               null,
               table
            )
         ),
         React.createElement(
            'div',
            { className: 'row text-center' },
            !this.state.showform ? React.createElement(
               'button',
               { className: 'btn btn-lg btn-default', onClick: function onClick() {
                     return _this4.clearboard();
                  } },
               'Clear Board'
            ) : null
         ),
         React.createElement('br', null),
         this.state.showform ? this.choose() : null
      );
   };

   return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector("#render"));
