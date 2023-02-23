var chai = require("chai");
var expect = chai.expect;
// var should = chai.should();
// var assert = chai.assert;

var butler = require("../butler");

describe("Test butler's basic functionality", function () {
  it("should return true if it is an open door command", function () {
    expect(butler.isThis.theRightCommand("open the door")).to.be.a("boolean");
    expect(butler.isThis.theRightCommand("open the door")).equal(true);

    expect(butler.isThis.theRightCommand("bla bla open the door bla bla")).to.be.a("boolean");
    expect(butler.isThis.theRightCommand("bla bla open the door bla bla")).equal(true);

    expect(butler.isThis.theRightCommand("command invalid")).to.be.a("boolean");
    expect(butler.isThis.theRightCommand("command invalid")).equal(false);
  });

  it("should return true if it is the right Slack channel", function () {
    expect(butler.isThis.theRightChannel("C042GKBDRJR")).to.be.a("boolean");
    expect(butler.isThis.theRightChannel("C042GKBDRJR")).equal(true);

    expect(butler.isThis.theRightChannel("1111")).to.be.a("boolean");
    expect(butler.isThis.theRightChannel("1111")).equal(false);
  });

  it("should return true if it is weekday and work hours", function () {
    // Monday
    expect(butler.isThis.theRightTiming(1, "09:00")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(1, "09:00")).equal(true);

    expect(butler.isThis.theRightTiming(1, "07:59")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(1, "07:59")).equal(false);

    expect(butler.isThis.theRightTiming(1, "08:00")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(1, "08:00")).equal(true);

    expect(butler.isThis.theRightTiming(1, "16:59")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(1, "16:59")).equal(true);

    expect(butler.isThis.theRightTiming(1, "17:00")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(1, "17:00")).equal(true);

    expect(butler.isThis.theRightTiming(1, "17:01")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(1, "17:01")).equal(false);

    // Tuesday
    expect(butler.isThis.theRightTiming(2, "09:00")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(2, "09:00")).equal(true);

    // Wednesday
    expect(butler.isThis.theRightTiming(3, "09:00")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(3, "09:00")).equal(true);

    // Thursday
    expect(butler.isThis.theRightTiming(4, "09:00")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(4, "09:00")).equal(true);

    // Friday
    expect(butler.isThis.theRightTiming(5, "09:00")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(5, "09:00")).equal(true);

    // Saturday
    expect(butler.isThis.theRightTiming(6, "09:00")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(6, "09:00")).equal(false);

    // Sunday
    expect(butler.isThis.theRightTiming(7, "09:00")).to.be.a("boolean");
    expect(butler.isThis.theRightTiming(7, "09:00")).equal(false);
  });
});
