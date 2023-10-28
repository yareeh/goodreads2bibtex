import { goodreadToBibtex } from "./bibtex"
import { GoodRead, csvReader, parseCsvRow } from "./goodreads"

describe("bibtex", () => {
  const testFile = "./test/goodreads_library_export.csv"
  const goodreads: GoodRead[] = csvReader(testFile).map(parseCsvRow)
  describe("bibtex", () => {
    it("can convert goodread object to bibtex object", () => {
      const gr = goodreads[0]
      expect(goodreadToBibtex(gr)).toEqual({
        title: gr.Title,
        author: gr["Author l-f"],
        isbn: gr.ISBN13,
        publisher: gr.Publisher,
        year: gr["Year Published"],
        url: `https://www.goodreads.com/book/show/${gr["Book Id"]}`,
      })
    })

    it("uses ISBN if no ISBN13", () => {
      expect(goodreadToBibtex(goodreads[17]).isbn).toBe("9510189367")
    })
  })
})
