import i from"https://cdn.skypack.dev/styled-components";import{Affix as n}from"https://cdn.skypack.dev/antd";const l="108px";export const AffixPanel=i(n)`
  position: absolute;
  height: 45px;
  z-index: 12;
`,LeftAffixPanel=i(AffixPanel)`
  left: ${e=>e.toggle?"calc(15vw + 1rem)":"1rem"};
  //transition: left 0.4s ease
`,RightAffixPanel=i(AffixPanel)`
  right: ${e=>e.toggle&&e.activePanel?"calc(24vw + 1rem)":"1rem"};
  @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 227dpi), only screen and (min-resolution: 2dppx) {
    right: ${e=>e.toggle&&e.activePanel?"calc(30vw + 1rem)":"1rem"};
  }
  @media all and (display-mode: fullscreen) {
    right: ${e=>e.toggle&&e.activePanel?"calc(25vw + 1rem)":"1rem"};
  }
  transition: ${e=>e.activePanel&&e.changeDetail?"right 0.4s ease":""};
`,UserAffixPanel=i(AffixPanel)`
  right: ${e=>e.toggle&&e.activePanel?"calc(24vw + 108px + 1rem)":"calc(108px + 1rem)"};
  @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 227dpi), only screen and (min-resolution: 2dppx) {
    right: ${e=>e.toggle&&e.activePanel?"calc(30vw +  125px)":"120px"};
  }
  @media all and (display-mode: fullscreen) {
    right: ${e=>e.toggle&&e.activePanel?"calc(25vw +  125px)":"120px"};
  }
  transition: ${e=>e.activePanel&&e.changeDetail?"right 0.4s ease":""}; 
`,NavigationItem=i.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
`,NavigationPanel=i.div`
  display: flex;
  background: rgba(27, 48, 98, 0.9);
  border-radius: 4px;
  backdrop-filter: blur(5px);
  height: 100%;
  align-items: center;
  padding: 0 1rem;
  width: auto !important;
`;
