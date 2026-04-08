import * as React from 'react'

type IconProps = React.SVGProps<SVGSVGElement>

const YouTubeIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      fill="currentColor"
    />

    <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#000" />
  </svg>
)

const InstagramIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.353 2.62 6.772 6.978 6.972 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c4.354-.2 6.772-2.62 6.972-6.977.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.353-2.62-6.772-6.977-6.972C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
)

const TikTokIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.59-5.71-.29-2.63.85-5.21 2.86-6.93 1.47-1.26 3.44-1.84 5.35-1.63v4.08c-1.55-.09-3.09.55-4.06 1.76-.36.45-.6 1.01-.65 1.58-.14 1.58.76 3.14 2.18 3.84 1.14.59 2.52.59 3.66.02 1.12-.59 1.92-1.74 2.08-3 .08-.55.03-1.11.03-1.67V0z" />
  </svg>
)

const FacebookIcon: React.FC<IconProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9.101 24v-9.58h-3.29V10.68h3.29V8.2c0-3.27 2-5.05 4.91-5.05 1.4 0 2.6.1 2.96.15v3.41h-2.02c-1.58 0-1.89.75-1.89 1.86v2.43h3.84l-.5 3.74h-3.34V24z" />
  </svg>
)

export const socials: {
  href: string
  label: string
  icon: React.ComponentType<IconProps>
}[] = [
  { href: 'https://www.youtube.com/@zorun.dailymotion', label: 'YouTube', icon: YouTubeIcon },
  { href: 'https://www.instagram.com/zorun.dailymotion/', label: 'Instagram', icon: InstagramIcon },
  { href: 'https://www.tiktok.com/@zorun_dev', label: 'TikTok', icon: TikTokIcon },
  {
    href: 'https://www.facebook.com/profile.php?id=61577465927875',
    label: 'Facebook',
    icon: FacebookIcon,
  },
]

export default socials
