// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
  site: "https://foo-x.github.io",
  base: "/tsunagi",
  integrations: [
    starlight({
      title: "繋 | tsunagi",
      titleDelimiter: "-",
      description: "foo-x のナレッジ置き場",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/Foo-x" },
        { icon: "seti:notebook", label: "Blog", href: "https://foo-x.com" },
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      customCss: ["./src/styles/custom.css"],
      pagination: false,
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://foo-x.github.io/tsunagi/og-image.png",
          },
        },
      ],
      sidebar: [
        {
          label: "プロセス",
          collapsed: true,
          items: [
            { label: "計画", link: "moc/process/planning" },
            { label: "設計", link: "moc/process/design" },
            { label: "テスト", link: "moc/process/test" },
          ],
        },
        {
          label: "言語",
          collapsed: true,
          items: [
            { label: "Bash", link: "moc/language/bash" },
            { label: "CSS", link: "moc/language/css" },
            { label: "TypeScript", link: "moc/language/typescript" },
          ],
        },
        { label: "ノート一覧", link: "/notes/" },
      ],
    }),
  ],
})
