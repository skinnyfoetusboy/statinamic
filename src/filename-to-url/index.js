import path from "path"

export default function(filename, context) {
  if (context) {
    filename = path.relative(context, filename)
  }

  const url = filename
    // something/index.md => something
    // note this rule work for generated json files too
    .replace(/\bindex\.(md|json)$/, "")
    // something-else.md => something-else
    .replace(/\.md$/, "")
    // no trailing slash
    .replace(/\/$/, "")

  // console.log("filename to url", filename, url)

  return url
}
