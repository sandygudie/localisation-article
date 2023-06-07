import { formatter } from "@lingui/format-po";

module.exports = {
  locales: ["en", "ar"],
  catalogs: [
    {
      path: "src/locales/{locale}",
      include: ["src"],
    },
  ],
  format: formatter({
    origins: false,
     }),
  format: "po",
};
