import { createContentLoader } from 'vitepress'

export interface BlogPost {
  url: string
  title: string
  date: string
  categories: string[]
  tags: string[]
}

const toList = (value: unknown): string[] =>
  Array.isArray(value) ? value.map(String) : value ? [String(value)] : []

const toTimestamp = (value: string) => {
  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? 0 : timestamp
}

const normalizeDate = (value: unknown) => {
  const parsed = value instanceof Date ? value : new Date(String(value))
  return Number.isNaN(parsed.getTime()) ? String(value) : parsed.toISOString().slice(0, 10)
}

export default createContentLoader('**/*.md', {
  transform(rawData): BlogPost[] {
    return rawData
      .filter((page) => page.frontmatter.title && page.frontmatter.date)
      .map((page) => ({
        url: page.url,
        title: String(page.frontmatter.title),
        date: normalizeDate(page.frontmatter.date),
        categories: toList(page.frontmatter.categories),
        tags: toList(page.frontmatter.tags),
      }))
      .sort((a, b) => toTimestamp(b.date) - toTimestamp(a.date))
  },
})
