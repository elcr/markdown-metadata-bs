// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Fs = require("fs");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var Path = require("path");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var MarkdownMetadata = require("markdown-metadata");

function exampleMatchesSnap(filename) {
  var dirname = Js_option.getWithDefault(".", Caml_option.undefined_to_opt(typeof __dirname === "undefined" ? undefined : __dirname));
  return Jest.Expect.toMatchSnapshot(Jest.Expect.expect(MarkdownMetadata.parseMetadata(Fs.readFileSync(Path.join(dirname, "examples", filename), "utf8"))));
}

Jest.test("Single line metadata", (function (param) {
        return exampleMatchesSnap("single-line.md");
      }));

Jest.test("Multi line metadata", (function (param) {
        return exampleMatchesSnap("multi-line.md");
      }));

Jest.test("Multi line CRLF metadata", (function (param) {
        return exampleMatchesSnap("multi-line-crlf.md");
      }));

Jest.test("Whitespace before metadata", (function (param) {
        return exampleMatchesSnap("whitespace.md");
      }));

Jest.test("No metadata", (function (param) {
        return exampleMatchesSnap("no-metadata.md");
      }));

exports.exampleMatchesSnap = exampleMatchesSnap;
/*  Not a pure module */