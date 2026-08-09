/**
 * Profile content shared with the GitHub profile README, fetched at build time.
 *
 * The source of truth is `data/profile.json` in https://github.com/bkeys818/bkeys818.
 * Editing it there re-renders that README and pings a Netlify build hook, which
 * rebuilds this site and re-runs the fetch below.
 *
 * Content that is *not* shared (nav menu, typing titles, the about copy) lives
 * in `site.json` instead. Keep it there: this module is build-time only, and
 * importing it from a client `<script>` would ship the fetch to the browser.
 */

/**
 * Override with `PROFILE_DATA_URL` to build against a local checkout of the
 * profile repo instead of the published copy — useful offline, or when checking
 * a data change before pushing it.
 */
const SOURCE =
  process.env.PROFILE_DATA_URL ??
  'https://raw.githubusercontent.com/bkeys818/bkeys818/master/data/profile.json'

export interface Social {
  /** Doubles as the icon basename: `/icons/{name}.svg`. */
  name: string
  label: string
  href: string
  value?: string
}

export interface Icon {
  title: string
  href: string
  /** Simple Icons slug. Mutually exclusive with `fileName`. */
  slug?: string
  /** Basename of a local SVG in `public/icons/`. */
  fileName?: string
}

export interface Project {
  name: string
  repo: { owner: string; name: string }
  tagline: string
  description: string
  url?: string
}

export interface Profile {
  socials: Social[]
  projects: Project[]
  skills: {
    hard: { title: string; icons: Icon[] }[]
    soft: { title: string; desc: string }[]
  }
}

const source = new URL(SOURCE)

// raw.githubusercontent.com caches for ~5 minutes, which is long enough to serve
// stale JSON to a build triggered right after a data push. Only the remote copy
// needs busting; a local override would just get a broken path.
if (source.protocol === 'https:')
  source.searchParams.set('v', Date.now().toString())

const response = await fetch(source)

if (!response.ok)
  throw new Error(
    `Could not fetch profile data: ${response.status} ${response.statusText} (${SOURCE})`,
  )

export const { socials, projects, skills } = (await response.json()) as Profile
