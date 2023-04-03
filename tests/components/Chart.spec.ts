import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Chart from "../../components/Chart.vue";

describe("Chart.vue", () => {
  test("Component", () => {
    const wrapper = mount(Chart);
    expect(wrapper).toMatchSnapshot();
  });
});
