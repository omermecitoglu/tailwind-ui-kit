import { describe, expect, it } from "vitest";
import { AnimatedPopup, DialogBackdrop, DialogTitle } from "..";

describe("AnimatedPopup", () => {
  it("must be a function", () => {
    expect(typeof AnimatedPopup).toBe("function");
  });
});

describe("DialogBackdrop", () => {
  it("must be a function", () => {
    expect(typeof DialogBackdrop).toBe("function");
  });
});

describe("DialogTitle", () => {
  it("must be a function", () => {
    expect(typeof DialogTitle).toBe("function");
  });
});
