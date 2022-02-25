import { validUrl } from "../src/utils";

it("should return null if url is null", () => {
  expect(validUrl(null)).toBeNull();
});

it("should return null if url is undefined", () => {
  expect(validUrl(undefined)).toBeNull();
});

it("should return null if url is not valid", () => {
  expect(validUrl("invalid")).toBeNull();
  expect(validUrl("ftp://test")).toBeNull();
  expect(validUrl("")).toBeNull();
});

it("should return url if url string is valid", () => {
  expect(validUrl("https://google.com")).toBe("https://google.com/");
  expect(validUrl("http://example.com")).toBe("http://example.com/");
});
