import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import pkg from "./package.json" assert { type: "json" };

export default [
    {
        input: "src/index.ts",
        output: [{ file: pkg.module, format: "es" }],
        plugins: [
            babel({
                babelHelpers: "bundled",
                exclude: "node_modules",
                include: "src/**/*.ts",
                extensions: [".ts"],
            }),
            typescript(),
        ],
    },
    {
        input: "src/index.ts",
        output: {
            file: pkg.types,
            name: "copytoclipboard",
        },
        plugins: [dts()],
    },
];
