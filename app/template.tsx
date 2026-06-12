// Unlike a layout, a template re-mounts on every navigation,
// so the enter animation replays on each page change site-wide.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
