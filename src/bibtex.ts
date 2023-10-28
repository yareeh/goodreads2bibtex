import z from "zod"
import { GoodRead } from "./goodreads"

export interface BibTex {
  title: string
  author: string
  isbn?: string
  publisher: string
  year: string
  url: string
}

export function goodreadToBibtex(goodread: GoodRead): BibTex {
  const {
    "Book Id": id,
    Title: title,
    "Author l-f": author,
    ISBN,
    ISBN13,
    Publisher: publisher,
    "Year Published": year,
  } = goodread
  return {
    title,
    author,
    isbn: ISBN13.length > 0 ? ISBN13 : ISBN.length > 0 ? ISBN : undefined,
    publisher,
    year,
    url: `https://www.goodreads.com/book/show/${id}`,
  }
}

export function bibtexToString(bibtex: BibTex): string {
  // eslint-disable-next-line prettier/prettier
  const titleWithMaskedQuotes = bibtex.title.replaceAll("\"", "''")
  return `@Book{
  author = "${bibtex.author}",
  title = "${titleWithMaskedQuotes}",
  publisher = "${bibtex.publisher}",
  year =  ${bibtex.year},
${bibtex.isbn ? `  isbn = "${bibtex.isbn}",\n` : ""}  url = "${bibtex.url}"
}`
}
