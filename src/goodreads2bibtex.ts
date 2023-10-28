import { bibtexToString, goodreadToBibtex } from "./bibtex"
import { csvReader, parseCsvRow } from "./goodreads"

const inputFile = process.argv[2]
const goodreadCsv = csvReader(inputFile)
const goodread = goodreadCsv.map(parseCsvRow)
const bibtex = goodread.map(goodreadToBibtex)
const bibtexStrings = bibtex.map(bibtexToString)
console.log(bibtexStrings.join("\n"))
