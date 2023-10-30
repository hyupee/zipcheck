import '@emotion/react';

import { Theme as AppTheme } from '../core';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
