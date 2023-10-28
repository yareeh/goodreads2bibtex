import { csvReader, parseCsvRow } from "./goodreads"

describe("goodreads", () => {
  const testFile = "./test/goodreads_library_export.csv"
  describe("csvReader", () => {
    it("can read goodreads csv file", () => {
      csvReader(testFile)
    })
    it("returns correct amount of records", () => {
      const rows = csvReader(testFile)
      expect(rows.length).toBe(19)
    })
  })

  describe("parseCsvRow", () => {
    const rows = csvReader(testFile)
    it("can parse first row", () => {
      expect(parseCsvRow(rows[0])).toEqual({
        "Book Id": "148702177",
        Title: "Tyhjyyspäiväkirja",
        "Author l-f": "Yagi, Emi",
        ISBN: "",
        ISBN13: "9789511455844",
        Publisher: "Otava",
        "Year Published": "2023",
      })
    })
  })
})
