import z from "zod"
import { GoodRead } from "./goodreads"

interface BibTex {
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
    ISBN13: isbn,
    Publisher: publisher,
    "Year Published": year,
  } = goodread
  return {
    title,
    author,
    isbn,
    publisher,
    year,
    url: `https://www.goodreads.com/book/show/${id}`,
  }
}
