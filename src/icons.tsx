type IconProps = {
  fill: string;
  size?: number;
};

export function HeartIcon({ fill, size = 18 }: IconProps) {
  return (
    <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}>
      <path
        d="M12 20.3l-1.4-1.3C5.4 14.3 2 11.2 2 7.7 2 5.1 4 3.1 6.5 3.1c1.5 0 2.9.7 3.8 1.8L12 6.6l1.7-1.7c.9-1.1 2.3-1.8 3.8-1.8 2.5 0 4.5 2 4.5 4.6 0 3.5-3.4 6.6-8.6 11.3L12 20.3z"
        fill={fill}
      />
    </svg>
  );
}

export function PawIcon({ fill, size = 19 }: IconProps) {
  return (
    <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}>
      <g fill={fill}>
        <ellipse cx="12" cy="15.6" rx="4.3" ry="3.5" />
        <ellipse cx="6.2" cy="11" rx="1.9" ry="2.5" />
        <ellipse cx="9.7" cy="7.5" rx="1.9" ry="2.5" />
        <ellipse cx="14.3" cy="7.5" rx="1.9" ry="2.5" />
        <ellipse cx="17.8" cy="11" rx="1.9" ry="2.5" />
      </g>
    </svg>
  );
}

export function MountainIcon({ fill, size = 19 }: IconProps) {
  return (
    <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M1.5 20.5L8.5 6l3.7 7 2.3-4 8 11.5H1.5z" fill={fill} />
    </svg>
  );
}

export function FlowerIcon({ fill, size = 19, center = "#463F36" }: IconProps & { center?: string }) {
  return (
    <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}>
      <g fill={fill}>
        <ellipse cx="12" cy="5.6" rx="2" ry="3.1" />
        <ellipse cx="12" cy="18.4" rx="2" ry="3.1" />
        <ellipse cx="5.6" cy="12" rx="3.1" ry="2" />
        <ellipse cx="18.4" cy="12" rx="3.1" ry="2" />
        <ellipse cx="7.5" cy="7.5" rx="2.6" ry="1.9" transform="rotate(-45 7.5 7.5)" />
        <ellipse cx="16.5" cy="7.5" rx="2.6" ry="1.9" transform="rotate(45 16.5 7.5)" />
        <ellipse cx="7.5" cy="16.5" rx="2.6" ry="1.9" transform="rotate(45 7.5 16.5)" />
        <ellipse cx="16.5" cy="16.5" rx="2.6" ry="1.9" transform="rotate(-45 16.5 16.5)" />
      </g>
      <circle cx="12" cy="12" fill={center} r="2.4" />
    </svg>
  );
}

export function InstagramIcon({ fill, size = 18 }: IconProps) {
  return (
    <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}>
      <path
        d="M12 2.2c-2.7 0-3 0-4 .1a7.2 7.2 0 0 0-2.4.4 4.8 4.8 0 0 0-1.7 1.2A4.8 4.8 0 0 0 2.7 5.6a7.2 7.2 0 0 0-.4 2.4c-.1 1-.1 1.3-.1 4s0 3 .1 4a7.2 7.2 0 0 0 .4 2.4 4.8 4.8 0 0 0 1.2 1.7 4.8 4.8 0 0 0 1.7 1.2 7.2 7.2 0 0 0 2.4.4c1 .1 1.3.1 4 .1s3 0 4-.1a7.2 7.2 0 0 0 2.4-.4 5 5 0 0 0 2.9-2.9 7.2 7.2 0 0 0 .4-2.4c.1-1 .1-1.3.1-4s0-3-.1-4a7.2 7.2 0 0 0-.4-2.4 4.8 4.8 0 0 0-1.2-1.7 4.8 4.8 0 0 0-1.7-1.2 7.2 7.2 0 0 0-2.4-.4c-1-.1-1.3-.1-4-.1zm0 1.8c2.6 0 2.9 0 4 .1a5.4 5.4 0 0 1 1.8.3 3.2 3.2 0 0 1 1.9 1.9 5.4 5.4 0 0 1 .3 1.8c.1 1 .1 1.3.1 4s0 2.9-.1 4a5.4 5.4 0 0 1-.3 1.8 3.2 3.2 0 0 1-1.9 1.9 5.4 5.4 0 0 1-1.8.3c-1 .1-1.3.1-4 .1s-2.9 0-4-.1a5.4 5.4 0 0 1-1.8-.3 3.2 3.2 0 0 1-1.9-1.9 5.4 5.4 0 0 1-.3-1.8c-.1-1-.1-1.3-.1-4s0-2.9.1-4a5.4 5.4 0 0 1 .3-1.8 3.2 3.2 0 0 1 1.9-1.9 5.4 5.4 0 0 1 1.8-.3c1-.1 1.4-.1 4-.1zm0 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm6.4-8.4a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
        fill={fill}
      />
    </svg>
  );
}

export function MoonIcon({ fill, size = 17 }: IconProps) {
  return (
    <svg aria-hidden="true" height={size} viewBox="0 0 24 24" width={size}>
      <path d="M14.8 3.2a9 9 0 1 0 0 17.6 7.4 7.4 0 0 1 0-17.6z" fill={fill} />
    </svg>
  );
}
