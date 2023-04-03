import { describe, test, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils";

describe("index.vue", async () => {
  await setup({
    server: true,
    // test context options
  });
  test("Display a Component", async () => {
    const html = await $fetch("/");
    expect(html);
  });
});
