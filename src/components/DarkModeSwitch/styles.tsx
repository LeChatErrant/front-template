import styled from 'styled-components'

import { DarkModeSwitchProps } from './props'

export const BaseContainer = styled.label<DarkModeSwitchProps>`
  --width: ${(props) => props.width};
  --height: ${(props) => props.height};
  --toggle-internal-padding: 5px;
  --toggle-radius: calc(var(--height) / 2);
  --toggle-size: calc(var(--height) - (var(--toggle-internal-padding) * 2));

  --background-color-on: #4314d2;
  --background-color-off: #62ccff;

  --toggle-color-on: white;
  --toggle-color-off: #fff89e;

  --transition-speed: 0.2s;
  --transition-ease: ease-in;

  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  width: var(--width);
  height: var(--height);
`

export const ToggleContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: var(--height);
  width: var(--width);
  border-radius: var(--toggle-radius);
  transition: background-color var(--transition-speed) var(--transition-ease);
  overflow: hidden;
`

export const CustomToggle = styled.div`
  position: absolute;
  transition: all var(--transition-speed) var(--transition-ease);

  left: var(--toggle-internal-padding);
  top: var(--toggle-internal-padding);
  border-radius: var(--toggle-radius);
  width: var(--toggle-size);
  height: var(--toggle-size);

  // Occultant filter for the moon
  &::after {
    content: '';
    position: absolute;
    transition: all var(--transition-speed) var(--transition-ease);
    z-index: 5;

    border-radius: 50%;
    width: var(--toggle-size);
    height: var(--toggle-size);
    top: calc(var(--toggle-internal-padding) * -1);
    left: calc(var(--toggle-size) * -0.4);

    background-color: var(--background-color-off);
    transform: scale(0);
  }
`

export const InvisibleInput = styled.input`
  // Make it invisible ! :D
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:not(:checked) ~ ${ToggleContainer} {
    background-color: var(--background-color-off);

    > ${CustomToggle} {
      background-color: var(--toggle-color-off);
    }

    &::after {
      transform: scale(0);
      background-color: var(--background-color-off);
    }
  }

  &:checked ~ ${ToggleContainer} {
    background-color: var(--background-color-on);

    > ${CustomToggle} {
      background-color: var(--toggle-color-on);
      left: calc(
        var(--width) - var(--toggle-size) - var(--toggle-internal-padding)
      );

      &::after {
        transform: scale(1);
        background-color: var(--background-color-on);
      }
    }
  }
`
