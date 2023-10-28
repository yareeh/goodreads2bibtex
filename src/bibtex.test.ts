import { BibTex, bibtexToString, goodreadToBibtex } from "./bibtex"
import { GoodRead, csvReader, parseCsvRow } from "./goodreads"

describe("bibtex", () => {
  const testFile = "./test/goodreads_library_export.csv"
  const goodreads: GoodRead[] = csvReader(testFile).map(parseCsvRow)
  describe("goodreadToBibtex", () => {
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

    it("Has no isbn if both ISBN fields are empty", () => {
      expect(goodreadToBibtex(goodreads[1]).isbn).toBeUndefined()
    })
  })

  describe("bibtexToString", () => {
    it("can convert bibtex object to string", () => {
      const bibtex: BibTex = {
        title: "Tyhjyyspäiväkirja",
        author: "Yagi, Emi",
        isbn: "9789511455844",
        publisher: "Otava",
        year: "2023",
        url: "https://www.goodreads.com/book/show/148702177",
      }

      expect(bibtexToString(bibtex)).toBe(`@Book{
  author = "${bibtex.author}",
  title = "${bibtex.title}",
  publisher = "${bibtex.publisher}",
  year =  ${bibtex.year},
  isbn = "${bibtex.isbn}",
  url = "${bibtex.url}"
}`)
    })
  })
})
