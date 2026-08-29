// composables/useSkills.ts
// Single source for the stack — read by the resume page and the home page's
// about section, so the two can never drift apart.
export interface SkillGroup {
  key: string
  values: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  { key: "languages", values: ["TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { key: "frontend", values: ["Vue.js", "Nuxt.js", "TailwindCSS", "Sass"] },
  { key: "backend", values: ["Node.js", "Laravel", "PHP"] },
  { key: "mobile", values: ["Android Studio", "Kotlin"] },
  { key: "database", values: ["PostgreSQL", "MySQL"] },
  { key: "tools", values: ["Vite", "Git", "GitHub", "npm"] },
]

export const useSkills = () => ({
  groups: SKILL_GROUPS,
  flat: SKILL_GROUPS.flatMap((group) => group.values),
})
