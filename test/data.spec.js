import { funcionDeOrdenarDatos, filtroCategoriaSerie } from "../src/data.js";


describe("funcionDeOrdenarDatos", () => {
  it("is a function", () => {
    expect(typeof funcionDeOrdenarDatos).toBe("function");
  });

  it("returns `funcionDeOrdenarDatos`", () => {
    const orden = "A-Z";
    const data = [
      {
        name: "Mica",
      },
      {
        name: "Jorge",
      },
      {
        name: "Katy",
      },
    ];
    const dataAZ = [
      {
        name: "Jorge",
      },
      {
        name: "Katy",
      },
      {
        name: "Mica",
      },
    ]; 

    expect(funcionDeOrdenarDatos(orden, data)).toEqual(dataAZ);
    expect(funcionDeOrdenarDatos('', data)).toBe(false);
  });
})

describe("filtroCategoriaSerie",() => {
  it ("is a function", () => {
    expect(typeof filtroCategoriaSerie).toBe ("function");
  });

  it ("deberia filtrar por serie breaking bad", () => {
    const serie = "Breaking Bad";
    const datos = [{
      category: "Breaking Bad"
    },
    {
      category: "Breaking Bad, Better Call Saul"
    },
    {
      category: "Breaking Bad"
    },
    {
      category: "Better Call Saul"
    }]
    const datosFiltro = [{
      category: "Breaking Bad"
    },
    {
      category: "Breaking Bad, Better Call Saul"
    },
    {
      category: "Breaking Bad"
    },]
    expect(filtroCategoriaSerie(serie,datos)).toEqual(datosFiltro);
  });

})

