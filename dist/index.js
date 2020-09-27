"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _casbin = require("casbin");

function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var e, sub, obj, act, roles;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _casbin.newEnforcer)("./model.conf", "./policy.csv");

          case 2:
            e = _context.sent;
            sub = "alice"; // the user that wants to access a resource.

            obj = "roles_listt"; // the resource that is going to be accessed.

            act = "read:any"; // the operation that the user performs on the resource.

            _context.next = 8;
            return e.enforce(sub, obj, act);

          case 8:
            _context.t0 = _context.sent;

            if (!(_context.t0 === true)) {
              _context.next = 13;
              break;
            }

            // permit alice to read data1
            console.log(true);
            _context.next = 14;
            break;

          case 13:
            console.log(false); // deny the request, show an error

          case 14:
            _context.next = 16;
            return e.getRolesForUser("bob");

          case 16:
            roles = _context.sent;
            console.log(roles);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _test.apply(this, arguments);
}

test();