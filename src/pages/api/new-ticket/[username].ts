import { NextApiRequest, NextApiResponse } from 'next';

import getAccount from '../_lib/getAccount';
import ticketLayout from '../_lib/ticket/ticketLayout';
import getScreenshot from '../_lib/ticket/chromium';
import tracks from '../../../utils/tracks';

const techs = {
  react: {
    icon: `
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="120" height="120" fill="url(#pattern0)"/>
      <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0" transform="scale(0.0125)"/>
      </pattern>
      <image id="image0" width="80" height="80" xlink:href="data:image/png;base64,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"/>
      </defs>
    </svg>
    `,
    bg: `
      <svg width="914" height="422" viewBox="0 0 914 422" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="914" height="422">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="url(#paint0_linear)"/>
        <path d="M660.111 -1.19209e-06H664.872V-4.7594H660.111V-1.19209e-06ZM679.153 19.0376V14.2782V19.0376ZM660.111 422V426.759H664.872V422H660.111ZM698.195 422H693.434V426.759H698.195V422ZM698.195 -1.19209e-06V-4.7594H693.434V-1.19209e-06H698.195ZM655.351 -1.19209e-06C655.351 13.1427 666.008 23.797 679.153 23.797V14.2782C671.265 14.2782 664.872 7.88562 664.872 -1.19209e-06H655.351ZM31.7363 4.7594H660.111V-4.7594H31.7363V4.7594ZM4.76058 31.7293C4.76058 16.8343 16.8381 4.7594 31.7363 4.7594V-4.7594C11.5798 -4.7594 -4.76025 11.5772 -4.76025 31.7293H4.76058ZM4.76058 390.271V31.7293H-4.76025V390.271H4.76058ZM31.7363 417.241C16.8381 417.241 4.76058 405.166 4.76058 390.271H-4.76025C-4.76025 410.424 11.5798 426.759 31.7363 426.759V417.241ZM660.111 417.241H31.7363V426.759H660.111V417.241ZM664.872 422C664.872 414.114 671.265 407.722 679.153 407.722V398.203C666.008 398.203 655.351 408.858 655.351 422H664.872ZM679.153 407.722C687.041 407.722 693.434 414.114 693.434 422H702.955C702.955 408.858 692.298 398.203 679.153 398.203V407.722ZM882.264 417.241H698.195V426.759H882.264V417.241ZM909.24 390.271C909.24 405.166 897.163 417.241 882.264 417.241V426.759C902.421 426.759 918.761 410.424 918.761 390.271H909.24ZM909.24 31.7293V390.271H918.761V31.7293H909.24ZM882.264 4.7594C897.163 4.7594 909.24 16.8343 909.24 31.7293H918.761C918.761 11.5772 902.421 -4.7594 882.264 -4.7594V4.7594ZM698.195 4.7594H882.264V-4.7594H698.195V4.7594ZM679.153 23.797C692.298 23.797 702.955 13.1427 702.955 -1.19209e-06H693.434C693.434 7.88562 687.041 14.2782 679.153 14.2782V23.797Z" fill="url(#paint1_linear)"/>
        <path d="M677.566 33.3158V385.511" stroke="#187080" stroke-width="2" stroke-dasharray="8 8"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear" x1="6.34722" y1="6.34589" x2="913.933" y2="422.147" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D1C33"/>
        <stop offset="1" stop-color="#092D33"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="0.000145617" y1="-57.1128" x2="966.923" y2="354.918" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8257E6"/>
        <stop offset="1" stop-color="#2AC7E3"/>
        </linearGradient>
        </defs>
      </svg>
    `,
  },
  reactnative: {
    icon: `
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="120" height="120" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0" transform="scale(0.0125)"/>
        </pattern>
        <image id="image0" width="80" height="80" xlink:href="data:image/png;base64,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"/>
        </defs>
      </svg>
    `,
    bg: `
    <svg width="914" height="422" viewBox="0 0 914 422" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="914" height="422">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="white"/>
      </mask>
      <g mask="url(#mask0)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="url(#paint0_linear)"/>
      <path d="M660.111 -1.19209e-06H664.872V-4.7594H660.111V-1.19209e-06ZM679.153 19.0376V14.2782V19.0376ZM660.111 422V426.759H664.872V422H660.111ZM698.195 422H693.434V426.759H698.195V422ZM698.195 -1.19209e-06V-4.7594H693.434V-1.19209e-06H698.195ZM655.351 -1.19209e-06C655.351 13.1427 666.008 23.797 679.153 23.797V14.2782C671.265 14.2782 664.872 7.88562 664.872 -1.19209e-06H655.351ZM31.7363 4.7594H660.111V-4.7594H31.7363V4.7594ZM4.76058 31.7293C4.76058 16.8343 16.8381 4.7594 31.7363 4.7594V-4.7594C11.5798 -4.7594 -4.76025 11.5772 -4.76025 31.7293H4.76058ZM4.76058 390.271V31.7293H-4.76025V390.271H4.76058ZM31.7363 417.241C16.8381 417.241 4.76058 405.166 4.76058 390.271H-4.76025C-4.76025 410.424 11.5798 426.759 31.7363 426.759V417.241ZM660.111 417.241H31.7363V426.759H660.111V417.241ZM664.872 422C664.872 414.114 671.265 407.722 679.153 407.722V398.203C666.008 398.203 655.351 408.858 655.351 422H664.872ZM679.153 407.722C687.041 407.722 693.434 414.114 693.434 422H702.955C702.955 408.858 692.298 398.203 679.153 398.203V407.722ZM882.264 417.241H698.195V426.759H882.264V417.241ZM909.24 390.271C909.24 405.166 897.163 417.241 882.264 417.241V426.759C902.421 426.759 918.761 410.424 918.761 390.271H909.24ZM909.24 31.7293V390.271H918.761V31.7293H909.24ZM882.264 4.7594C897.163 4.7594 909.24 16.8343 909.24 31.7293H918.761C918.761 11.5772 902.421 -4.7594 882.264 -4.7594V4.7594ZM698.195 4.7594H882.264V-4.7594H698.195V4.7594ZM679.153 23.797C692.298 23.797 702.955 13.1427 702.955 -1.19209e-06H693.434C693.434 7.88562 687.041 14.2782 679.153 14.2782V23.797Z" fill="url(#paint1_linear)"/>
      <path d="M677.566 33.3158V385.511" stroke="#187080" stroke-width="2" stroke-dasharray="8 8"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear" x1="6.34722" y1="6.34589" x2="913.933" y2="422.147" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1D1C33"/>
      <stop offset="1" stop-color="#092D33"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="0.000145617" y1="-57.1128" x2="966.923" y2="354.918" gradientUnits="userSpaceOnUse">
      <stop stop-color="#8257E6"/>
      <stop offset="1" stop-color="#2AC7E3"/>
      </linearGradient>
      </defs>
    </svg>
  `,
  },
  node: {
    icon: `
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="120" height="120" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0" transform="scale(0.0125)"/>
        </pattern>
        <image id="image0" width="80" height="80" xlink:href="data:image/png;base64,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"/>
        </defs>
      </svg>
    `,
    bg: `
      <svg width="914" height="422" viewBox="0 0 914 422" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="914" height="422">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="url(#paint0_linear)"/>
        <path d="M660.111 -1.19209e-06H664.872V-4.7594H660.111V-1.19209e-06ZM679.153 19.0376V14.2782V19.0376ZM660.111 422V426.759H664.872V422H660.111ZM698.195 422H693.434V426.759H698.195V422ZM698.195 -1.19209e-06V-4.7594H693.434V-1.19209e-06H698.195ZM655.351 -1.19209e-06C655.351 13.1427 666.008 23.797 679.153 23.797V14.2782C671.265 14.2782 664.872 7.88562 664.872 -1.19209e-06H655.351ZM31.7363 4.7594H660.111V-4.7594H31.7363V4.7594ZM4.76058 31.7293C4.76058 16.8343 16.8381 4.7594 31.7363 4.7594V-4.7594C11.5798 -4.7594 -4.76025 11.5772 -4.76025 31.7293H4.76058ZM4.76058 390.271V31.7293H-4.76025V390.271H4.76058ZM31.7363 417.241C16.8381 417.241 4.76058 405.166 4.76058 390.271H-4.76025C-4.76025 410.424 11.5798 426.759 31.7363 426.759V417.241ZM660.111 417.241H31.7363V426.759H660.111V417.241ZM664.872 422C664.872 414.114 671.265 407.722 679.153 407.722V398.203C666.008 398.203 655.351 408.858 655.351 422H664.872ZM679.153 407.722C687.041 407.722 693.434 414.114 693.434 422H702.955C702.955 408.858 692.298 398.203 679.153 398.203V407.722ZM882.264 417.241H698.195V426.759H882.264V417.241ZM909.24 390.271C909.24 405.166 897.163 417.241 882.264 417.241V426.759C902.421 426.759 918.761 410.424 918.761 390.271H909.24ZM909.24 31.7293V390.271H918.761V31.7293H909.24ZM882.264 4.7594C897.163 4.7594 909.24 16.8343 909.24 31.7293H918.761C918.761 11.5772 902.421 -4.7594 882.264 -4.7594V4.7594ZM698.195 4.7594H882.264V-4.7594H698.195V4.7594ZM679.153 23.797C692.298 23.797 702.955 13.1427 702.955 -1.19209e-06H693.434C693.434 7.88562 687.041 14.2782 679.153 14.2782V23.797Z" fill="url(#paint1_linear)"/>
        <path d="M677.566 33.3158V385.511" stroke="#598030" stroke-width="2" stroke-dasharray="8 8"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear" x1="6.34722" y1="6.34589" x2="913.933" y2="422.147" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D1C33"/>
        <stop offset="1" stop-color="#243313"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="0.000145617" y1="-57.1128" x2="966.923" y2="354.918" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8257E6"/>
        <stop offset="1" stop-color="#8CC84B"/>
        </linearGradient>
        </defs>
      </svg>
    `,
  },
  elixir: {
    icon: `
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="120" height="120" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0" transform="scale(0.0125)"/>
        </pattern>
        <image id="image0" width="80" height="80" xlink:href="data:image/png;base64,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"/>
        </defs>
      </svg>
    `,
    bg: `
      <svg width="914" height="422" viewBox="0 0 914 422" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="914" height="422">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="url(#paint0_linear)"/>
        <path d="M660.111 -1.19209e-06H664.872V-4.7594H660.111V-1.19209e-06ZM679.153 19.0376V14.2782V19.0376ZM660.111 422V426.759H664.872V422H660.111ZM698.195 422H693.434V426.759H698.195V422ZM698.195 -1.19209e-06V-4.7594H693.434V-1.19209e-06H698.195ZM655.351 -1.19209e-06C655.351 13.1427 666.008 23.797 679.153 23.797V14.2782C671.265 14.2782 664.872 7.88562 664.872 -1.19209e-06H655.351ZM31.7363 4.7594H660.111V-4.7594H31.7363V4.7594ZM4.76058 31.7293C4.76058 16.8343 16.8381 4.7594 31.7363 4.7594V-4.7594C11.5798 -4.7594 -4.76025 11.5772 -4.76025 31.7293H4.76058ZM4.76058 390.271V31.7293H-4.76025V390.271H4.76058ZM31.7363 417.241C16.8381 417.241 4.76058 405.166 4.76058 390.271H-4.76025C-4.76025 410.424 11.5798 426.759 31.7363 426.759V417.241ZM660.111 417.241H31.7363V426.759H660.111V417.241ZM664.872 422C664.872 414.114 671.265 407.722 679.153 407.722V398.203C666.008 398.203 655.351 408.858 655.351 422H664.872ZM679.153 407.722C687.041 407.722 693.434 414.114 693.434 422H702.955C702.955 408.858 692.298 398.203 679.153 398.203V407.722ZM882.264 417.241H698.195V426.759H882.264V417.241ZM909.24 390.271C909.24 405.166 897.163 417.241 882.264 417.241V426.759C902.421 426.759 918.761 410.424 918.761 390.271H909.24ZM909.24 31.7293V390.271H918.761V31.7293H909.24ZM882.264 4.7594C897.163 4.7594 909.24 16.8343 909.24 31.7293H918.761C918.761 11.5772 902.421 -4.7594 882.264 -4.7594V4.7594ZM698.195 4.7594H882.264V-4.7594H698.195V4.7594ZM679.153 23.797C692.298 23.797 702.955 13.1427 702.955 -1.19209e-06H693.434C693.434 7.88562 687.041 14.2782 679.153 14.2782V23.797Z" fill="url(#paint1_linear)"/>
        <path d="M677.566 33.3158V385.511" stroke="#5E1F80" stroke-width="2" stroke-dasharray="8 8"/>
        </g>
        </g>
        <defs>
        <linearGradient id="paint0_linear" x1="6.34722" y1="6.34589" x2="913.933" y2="422.147" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D1C33"/>
        <stop offset="1" stop-color="#260C33"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="0.000145617" y1="-57.1128" x2="966.923" y2="354.918" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8257E6"/>
        <stop offset="1" stop-color="#A32DDF"/>
        </linearGradient>
        <clipPath id="clip0">
        <rect width="913.805" height="422" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    `,
  },
  flutter: {
    icon: `
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="120" height="120" fill="url(#pattern0)"/>
        <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0" transform="scale(0.0125)"/>
        </pattern>
        <image id="image0" width="80" height="80" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZmSURBVHgB7Z1ZbFRVGMf/506H1lZZplSfNMB0AY3SssiDPmhMVNQYNUZ99cEHjTFGEIRSaYUWRDESNYZV4opGZKmRpE3pCIkPBiLGjQrY0kIboqX7orNcv286JbTM0t5z7tLk/JLJUKAzmV//3/m+c+ZOKkCYpnkP3a2nG99r0tNNt4N0qxJCtAiS9xh9cQCaydJCtzIW2Ex/mAONFaoMaHkylBrQyDBDC5REC5REC5REC5REC5REC5REC5REC5REC5REC5QkCx4jagIftcXw9YUYZCmbJbCu2Ic8H2zDcwJ3tZk4eFFe3h0BgdWF9spjPCOQk7eLksfyTBNSsLwNlLxsBxYoTwhkeXtJ3gEFZbs4X+C1QmfkMa4L5LDtoLI9rKBsb6M1b60DZXs1rgrk5O2h5B1WULalJK+i2Fl5jGsCR8t2PydPUt6SfGcaRjJcE3il20rKW0gNY41L8hjHBXLydnPDUCBvEckrL3JPHuOowHjDaKU1r11eXmnAoLI1XJXHOCYwwnNeqxmXZyqQV1ViIFvAdRwRONowVOwwlsTnPG/IYxwRuJ2SV9uuZs5zs2Ekw1aB8e0ZrXm1CsrWiYMBK9gmMJI4VTmgqGy9lrxRbBHIYduZ2GHIwg1jjQe6bSqUC+Sy3Ulle0iBvMUkr7zIQK5H5TFKBXLytifWPFnKEnOel+UxygRGVDYM2mHwnDfNI6NKOpQIZHl7WtXMeUsT53lTQR4jLTBetudj+LZDXt7tgRF5Xm0YyZASGEk0DJZnKjgYWEcHA6nWPH78Ez0mLv8Laa73A3cF1ETcssDROU9Ft70zcZ6XSl6Mnms//ZB2n5c/hCjIMVBZou6837LAXYrkLZrAu2ef0fN80SYvbxZtoN+YLzA3F8qwLPCWHIEsqoKwxItayoehGcqW5X3eJr9EzKR3mWoWsDy13clylh+6UeC5uQayLD7CIirbV9OULfNlh6lEXgEnr0S9PEaqiTx6EwkUAu+d4xc58Ve5mJK3npI3LY38jy+YVLZRaXkBqpQN8w3MybVnLpIeYziJhjDwAUkMxzK/2mWUvFWFqeXxQ3zVzsmLSq95XLbVC0jedbANJYP0gwUCkZjA9maTJKb+f3zFwKoMDeOt5hiOXopBSMqbTcmr5LK1UR6jrJ8/QuX8/DwfhEheKktIXmWaN4A4eTV/RbGmKYyTfdH4oYRVpvtHyrYwz/7tjNILILicX6IDAP+4R102O323ZVlbWmIob4rE17zOCHBqIEqpxqQpoORtutWwpWEkQ/kVJMupnF8I+mhdHPmar1VZHUxftpXnolh7OjxmzfuHJQ5OrgMHsjl5PgTznNtI84cNJVeb5Bz528SJbhMr5hlpdxhVZ6PYcDaSUlQ+rdKlZD8rg5OZJG/zAvu6bQpCtglkeMj2p3k91bTmVTRFM45As0niwjQSuWwraHtWnOeoPCZk60Vg6eStPRObkDyGy/nkQCy+/x7P6Jzngrw4jl8jzQ1jI82Mm85EJjV8d5O9n7ixXPUtvLetoTXP4bIdg+MC15O81/+kSFmYki/Hu/NIErlsN8Z3GHAVW9fA8dR3mnjgxzBknzIfEdQvzUJZQTZcJuRoAu+lYXplkIdtWGdwCJ2H67HiwxAu9QzDbRwVyF20hgbql4N+WGJoCKhrALq60PhbO55693sMDIfhJo6vgSxxazG/ZZk1uSQODQLfHQF6eq/81bHf27F8cwM6+xWc81vElU8qsbeNlMRXghOU2NcD1B4Cevuv+afjf3TgaUpi98B/cAPXPurFSXy72IdVRf4Ro6nop8R9s4/KliQaybc0Db9cxMNvHnVFouuflasOGnS4miKJLG/fbkpgHxmfhnSmf2jqwBPvNKLLYYmuC/SRkwrqzCsL/WMl9nQCn7w/sub5aFwxMjeexl/b8cy2Y+gZdE6iJz6tyRK3FBmoKKZNL1scoMTt3UprHt3nBoCcmSnLdzx1P7dREkPoHXKmOzs6SGeCT2eqTw+gsnIHYsP0s82ZDqvcX3ozPn3xbhTckAMbCXkigaPwGWJ5SS7WPXkfyZsBGepOtVE5H8dwOAo78VQCpyDeSuBURAuURAuURAuURAuURAuURAuURAuURAuURAuURAuURAuURAuUhAV2Q2OVQyzwWWis0EK3vYYQgn+1w+N0C0EzEbhit4F/k4MQ3f8D78dODVG1bJUAAAAASUVORK5CYII="/>
        </defs>
      </svg>
    `,
    bg: `
      <svg width="914" height="422" viewBox="0 0 914 422" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="914" height="422">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M679.153 19.0376C668.637 19.0376 660.111 10.5142 660.111 0H31.7361C14.2087 0 0 14.2057 0 31.7293V390.271C0 407.795 14.2087 422 31.7361 422H660.111C660.111 411.486 668.637 402.962 679.153 402.962C689.669 402.962 698.194 411.486 698.194 422H882.264C899.792 422 914 407.795 914 390.271V31.7293C914 14.2057 899.792 0 882.264 0H698.194C698.194 10.5142 689.669 19.0376 679.153 19.0376Z" fill="url(#paint0_linear)"/>
        <path d="M660.111 -1.19209e-06H664.872V-4.7594H660.111V-1.19209e-06ZM679.153 19.0376V14.2782V19.0376ZM660.111 422V426.759H664.872V422H660.111ZM698.195 422H693.434V426.759H698.195V422ZM698.195 -1.19209e-06V-4.7594H693.434V-1.19209e-06H698.195ZM655.351 -1.19209e-06C655.351 13.1427 666.008 23.797 679.153 23.797V14.2782C671.265 14.2782 664.872 7.88562 664.872 -1.19209e-06H655.351ZM31.7363 4.7594H660.111V-4.7594H31.7363V4.7594ZM4.76058 31.7293C4.76058 16.8343 16.8381 4.7594 31.7363 4.7594V-4.7594C11.5798 -4.7594 -4.76025 11.5772 -4.76025 31.7293H4.76058ZM4.76058 390.271V31.7293H-4.76025V390.271H4.76058ZM31.7363 417.241C16.8381 417.241 4.76058 405.166 4.76058 390.271H-4.76025C-4.76025 410.424 11.5798 426.759 31.7363 426.759V417.241ZM660.111 417.241H31.7363V426.759H660.111V417.241ZM664.872 422C664.872 414.114 671.265 407.722 679.153 407.722V398.203C666.008 398.203 655.351 408.858 655.351 422H664.872ZM679.153 407.722C687.041 407.722 693.434 414.114 693.434 422H702.955C702.955 408.858 692.298 398.203 679.153 398.203V407.722ZM882.264 417.241H698.195V426.759H882.264V417.241ZM909.24 390.271C909.24 405.166 897.163 417.241 882.264 417.241V426.759C902.421 426.759 918.761 410.424 918.761 390.271H909.24ZM909.24 31.7293V390.271H918.761V31.7293H909.24ZM882.264 4.7594C897.163 4.7594 909.24 16.8343 909.24 31.7293H918.761C918.761 11.5772 902.421 -4.7594 882.264 -4.7594V4.7594ZM698.195 4.7594H882.264V-4.7594H698.195V4.7594ZM679.153 23.797C692.298 23.797 702.955 13.1427 702.955 -1.19209e-06H693.434C693.434 7.88562 687.041 14.2782 679.153 14.2782V23.797Z" fill="url(#paint1_linear)"/>
        <path d="M677.566 33.3158V385.511" stroke="#0D4897" stroke-width="2" stroke-dasharray="8 8"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear" x1="6.34722" y1="6.34589" x2="913.933" y2="422.147" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1D1C33"/>
        <stop offset="1" stop-color="#092D33"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="0.000145617" y1="-57.1128" x2="966.923" y2="354.918" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8257E6"/>
        <stop offset="1" stop-color="#2F80ED"/>
        </linearGradient>
        </defs>
      </svg>
    `,
  },
};

export default async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  if (request.method === 'GET') {
    const { username } = request.query;

    try {
      const account = await getAccount(username);

      if (!account) {
        return response.status(400).end('Account does not exists.');
      }

      const { account: user, track } = account;

      const ticketHtml = ticketLayout({
        user,
        tech: {
          name: tracks[track],
          image: techs[track].icon,
        },
        ticket: {
          number: '0000000',
          bg: techs[track].bg,
        },
      });

      const file = await getScreenshot(ticketHtml, {
        type: 'png',
      });

      response.setHeader('Content-Type', 'image/png');
      response.setHeader(
        'Cache-Control',
        'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
      );

      return response.end(file);
    } catch (error) {
      console.error(error);

      return response.status(500).end(error.message);
    }
  }

  response.setHeader('Allow', 'GET');
  return response.status(405).end('Method not allowed');
};
