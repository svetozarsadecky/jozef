import cjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/main.js',
    output: [{
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
    },{
        file: 'dist/bundle.esm.js',
        format: 'esm',
    },{
        file: 'dist/bundle.umd.js',
        format: 'umd',
        name: 'TestBundle',
    },{
        file: 'dist/bundle.iife.js',
        format: 'iife',
        name: 'TestBundle',
    },
    ],
    plugins: [
        cjs(),
    ],
};
