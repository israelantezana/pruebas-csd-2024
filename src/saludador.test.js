import saludar from "./saludador.js";

describe("Saludar", () => {
  it("deberia saludar incluyendo el nombre", () => {
    expect(saludar("Tito")).toEqual("Hola, Tito!!!");
  });
});
