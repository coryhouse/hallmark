import { add } from "./math";

describe("add", () => {
  it("should return 3 when passed 1 and 2", () => {
    // arrange

    // act
    const result = add(1, 2);

    // assert
    expect(result).toEqual(3);
  });

  it("should return 3 when passed 2 and 1", () => {
    // arrange

    // act
    const result = add(2, 1);

    // assert
    expect(result).toEqual(3);
  });
});
