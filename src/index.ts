import { Config } from 'windicss/types/interfaces';
import lineClamp from 'windicss/plugin/line-clamp';

function genSpacing(min: number, max: number) {
  const spacing: Record<string, string> = {};

  for (let i = min; i <= max; i++) {
    spacing[i] = `${i}px`;
  }

  return spacing;
}

const basePresets: Config = {
  extract: {
    // A common use case is scanning files from the root directory
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ['node_modules', '.git', 'dist'],
  },

  preflight: {
    includeAll: false,
    includeBase: false,
    includeGlobal: false,
    includePlugin: true,
  },

  theme: {
    extend: {
      fontFamily: {
        pingfang: ['PingFangSC-Regular', 'PingFang SC'],
        pingfangsemibold: ['PingFangSC-Semibold', 'PingFang SC'],
        bebas: ['BebasNeue'],
      },

      fontSize: genSpacing(12, 42),

      spacing: genSpacing(-100, 100),
    },
  },

  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',

    'absolute-center': 'absolute top-0 right-0 bottom-0 left-0 m-auto',
    'absolute-x-center': 'absolute right-0 left-0 ml-auto mr-auto',
    'absolute-y-center': 'absolute top-0 bottom-0 mt-auto mb-auto',

    'inline-center': {
      '@apply': 'inline-block text-0',
      '&::after': {
        content: '',
        '@apply': 'inline-block w-0 h-full align-middle',
      },
    },
  },

  plugins: [lineClamp],
};

export default basePresets;
