import { Data } from "vfile"

/** Sort files with priority and alphabetically */
export const compareFile = (a: Data, b: Data) => {
  const aPriority = a.frontmatter?.priority ?? Number.MAX_SAFE_INTEGER
  const bPriority = b.frontmatter?.priority ?? Number.MAX_SAFE_INTEGER
  if (aPriority !== bPriority) {
    return aPriority - bPriority
  }

  // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
  // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
  return a.slug!.localeCompare(b.slug!, undefined, {
    numeric: true,
    sensitivity: "base",
  })
}
