<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { data as posts } from '../../posts.data'

type ArchiveMode = 'latest' | 'categories' | 'tags' | 'timeline'

const props = withDefaults(
  defineProps<{
    mode: ArchiveMode
    limit?: number
  }>(),
  { limit: 0 },
)

const categoryLabels: Record<string, string> = {
  css_docs: 'CSS',
  js_docs: 'JavaScript',
  node_docs: 'Node',
  note_docs: '笔记',
  other_docs: '其他',
  plan_docs: '计划',
  vue_docs: 'Vue',
}

const displayName = (name: string) => categoryLabels[name] ?? name

const formatDate = (date: string) => {
  const parsed = new Date(date)
  return Number.isNaN(parsed.getTime()) ? date : parsed.toLocaleDateString('zh-CN')
}

const pageTitle = computed(() => ({
  latest: '最新文章',
  categories: '分类',
  tags: '标签',
  timeline: '时间线',
}[props.mode]))

const groups = computed(() => {
  if (props.mode === 'latest') {
    const entries = props.limit > 0 ? posts.slice(0, props.limit) : posts
    return [{ label: '全部文章', posts: entries }]
  }

  const map = new Map<string, typeof posts>()
  for (const post of posts) {
    const keys = props.mode === 'categories'
      ? post.categories
      : props.mode === 'tags'
        ? post.tags
        : [post.date.slice(0, 4)]

    for (const key of keys) {
      const current = map.get(key) ?? []
      current.push(post)
      map.set(key, current)
    }
  }

  return [...map.entries()]
    .sort(([left], [right]) => props.mode === 'timeline'
      ? right.localeCompare(left)
      : displayName(left).localeCompare(displayName(right), 'zh-CN'))
    .map(([key, entries]) => ({
      label: props.mode === 'timeline' ? `${key} 年` : displayName(key),
      posts: entries,
    }))
})
</script>

<template>
  <section :class="['blog-archive', `blog-archive--${mode}`]">
    <h1 class="blog-archive__heading">{{ pageTitle }}</h1>
    <section v-for="group in groups" :key="group.label" class="blog-archive__group">
      <h2 class="blog-archive__group-title">{{ group.label }}</h2>
      <ul class="blog-archive__list">
        <li v-for="post in group.posts" :key="post.url" class="blog-archive__item">
          <a class="blog-archive__link" :href="withBase(post.url)">
            <template v-if="mode === 'categories' || mode === 'tags'">
              <span>{{ post.title }}</span>
              <span>{{ formatDate(post.date) }}</span>
            </template>
            <template v-else>{{ post.title }}</template>
          </a>
          <div v-if="mode === 'latest' || mode === 'timeline'" class="blog-archive__meta">
            <time>{{ formatDate(post.date) }}</time>
            <span v-for="category in post.categories" :key="category">{{ displayName(category) }}</span>
            <span v-for="tag in post.tags" :key="tag" class="blog-archive__tag">#{{ tag }}</span>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>
