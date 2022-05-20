import { ICharacter, showCount } from "..";

const array: ICharacter[] = [{id: 1, name: "Rick-1"}, {id: 2, name: "Rick-3"}, {id: 2, name: "Rick-7"}]


describe("Characters", () => {
  it("should check how many ricks are alive", () => {
    expect(showCount(array)).toBe(3);
  });
})