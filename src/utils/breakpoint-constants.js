// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-breakpoint-constants/src/index.js
export const LARGER_DISPLAY_WIDTH = '1600px';
export const LARGE_DISPLAY_WIDTH = '1280px';
export const DEFAULT_WIDTH = '980px';
export const TABLET_WIDTH = '768px';
export const MOBILE_WIDTH = '480px';

export const MEDIA_QUERY__LARGER_DISPLAY = `@media only screen and (max-width:${LARGER_DISPLAY_WIDTH})`;
export const MEDIA_QUERY__LARGE_DISPLAY = `@media only screen and (max-width:${LARGE_DISPLAY_WIDTH})`;
export const MEDIA_QUERY__DEFAULT = `@media only screen and (max-width:${DEFAULT_WIDTH})`;
export const MEDIA_QUERY__TABLET = `@media only screen and (max-width:${TABLET_WIDTH})`;
export const MEDIA_QUERY__MOBILE = `@media only screen and (max-width:${MOBILE_WIDTH})`;

export const MEDIA_QUERY__MIN_LARGER_DISPLAY = `@media (min-width:${LARGER_DISPLAY_WIDTH})`;
export const MEDIA_QUERY__MIN_LARGE_DISPLAY = `@media (min-width:${LARGE_DISPLAY_WIDTH})`;
export const MEDIA_QUERY__MIN_DEFAULT = `@media (min-width:${DEFAULT_WIDTH})`;
export const MEDIA_QUERY__MIN_TABLET = `@media (min-width:${TABLET_WIDTH})`;
export const MEDIA_QUERY__MIN_MOBILE = `@media (min-width:${MOBILE_WIDTH})`;
