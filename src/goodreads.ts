import { parse } from "csv-parse/sync"
import fs from "fs"
import { z } from "zod"

export function csvReader(file: string) {
  const data = fs.readFileSync(file, "utf8")
  const records = parse(data, {
    columns: true,
    skip_empty_lines: true,
  })
  return records
}

const cleanIsbn = (s: string): string => s.replace(/[^0-9]/g, "")
const GoodRead = z.object({
  "Book Id": z.string(),
  Title: z.string(),
  "Author l-f": z.string(),
  ISBN: z.string().transform(cleanIsbn),
  ISBN13: z.string().transform(cleanIsbn),
  Publisher: z.string(),
  "Year Published": z.string(),
})
export type GoodRead = z.infer<typeof GoodRead>

export function parseCsvRow(row: unknown): GoodRead {
  return GoodRead.parse(row)
}
