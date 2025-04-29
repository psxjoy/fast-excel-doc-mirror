import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Navbar from "./components/navbar";

const config: DocsThemeConfig = {
  logo: <span>FastExcel</span>,
  navbar: {
    component: Navbar,
  },
  navigation: false,

  project: {
    link: "https://github.com/fast-excel/fastexcel",
  },
  docsRepositoryBase:
    "https://github.com/fast-excel/fastexcel/tree/main/docs",
  footer: {
    text: `© ${new Date().getFullYear()} FastExcel. All rights reserved.`,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="FastExcel - 让Excel处理更简单" />
      <meta
        property="og:description"
        content="高性能、易用的Java Excel处理工具"
      />
    </>
  ),
  darkMode: false,
  i18n: [
    { locale: "zh-CN", text: "简体中文" },
    { locale: "zh-TW", text: "繁體中文" },
    { locale: "en-US", text: "English" },
    { locale: "ja-JP", text: "日本語" },
  ],
};

export default config;
