// composables/useProjects.ts
export interface Project {
  id: string
  number: string
  title: string
  desc: string
  techs: string[]
  liveUrl: string | null
  githubUrl: string
  images: string[]
  private?: boolean
}

/**
 * The project list, read straight out of the active locale so titles and
 * copy follow the language switch. `tm` hands back raw message objects, and
 * arrays inside them can arrive as index-keyed objects — hence the reshaping.
 */
export const useProjects = () => {
  const { tm } = useI18n()

  const projects = computed<Project[]>(() => {
    const raw = tm("work.projects") as Record<string, never>
    return Object.values(raw).map((p: never) => {
      const project = p as unknown as Project
      const toArray = (v: unknown) => (Array.isArray(v) ? v : Object.values(v ?? {}))
      return {
        ...project,
        techs: toArray(project.techs) as string[],
        images: toArray(project.images) as string[],
      }
    })
  })

  return { projects }
}
