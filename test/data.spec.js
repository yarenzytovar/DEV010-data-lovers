import { funcionDeOrdenarDatos, filtroCategoriaSerie, promedioBreakingBad} from "../src/data.js";


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

  it("returns `funcionDeOrdenarDatos`", () => {
    const orden = "Z-A";
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
    const dataZA = [
      {
        name: "Mica",
      },
      {
        name: "Katy",
      },
      {
        name: "Jorge",
      },
    ]; 

    expect(funcionDeOrdenarDatos(orden, data)).toEqual(dataZA);
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
    expect(funcionDeOrdenarDatos('', datos)).toBe(false);
  });

  it ("deberia filtrar por serie Better Call Saul", () => {
    const serie = "Better Call Saul";
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
    const datosFiltroBCS = [
      {
        category: "Breaking Bad, Better Call Saul"
      },
      {
        category: "Better Call Saul"
      }]
    expect(filtroCategoriaSerie(serie,datos)).toEqual(datosFiltroBCS);
    expect(filtroCategoriaSerie('', datos)).toBe(false);
  });
})


describe("promedioBreakingBad", () => {
  it("is a function", () => {
    expect(typeof promedioBreakingBad).toBe("function");
  });

  it("returns",() => {
    const personajes =
    [{
      char_id: 1,
      name: "Walter White",
      birthday: "09-07-1958",
      occupation: ["High School Chemistry Teacher", "Meth King Pin"],
      img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      status: "Presumed dead",
      nickname: "Heisenberg",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Bryan Cranston",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
    {
      char_id: 10,
      name: "Hector Salamanca",
      birthday: "Unknown",
      occupation: ["Former Senior Cartel Leader"],
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
      status: "Deceased",
      nickname: "Don Hector",
      appearance: [1, 2, 3, 4],
      portrayed: "Mark Margolis",
      category: "Breaking Bad, Better Call Saul",
      better_call_saul_appearance: [2, 3, 4, 5],
    }]
    const promedios= [
      {
        char_id: 1,
        name: "Walter White",
        birthday: "09-07-1958",
        occupation: ["High School Chemistry Teacher", "Meth King Pin"],
        img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        status: "Presumed dead",
        nickname: "Heisenberg",
        appearance: [1, 2, 3, 4, 5],
        portrayed: "Bryan Cranston",
        category: "Breaking Bad",
        better_call_saul_appearance: [],
        promedio:"100"
      },
      {
        char_id: 10,
        name: "Hector Salamanca",
        birthday: "Unknown",
        occupation: ["Former Senior Cartel Leader"],
        img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
        status: "Deceased",
        nickname: "Don Hector",
        appearance: [1, 2, 3, 4],
        portrayed: "Mark Margolis",
        category: "Breaking Bad, Better Call Saul",
        better_call_saul_appearance: [2, 3, 4, 5],
        promedio:"67"
      }
    ]   
    expect(promedioBreakingBad(personajes)).toEqual(promedios);
    expect(promedioBreakingBad(" ")).toBe(false);
  })
})