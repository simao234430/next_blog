import Link from 'next/link'
import { Logo } from './Logo'
import { Icon, IconName } from './Icon'
import { isExternalUrl } from '../../utils/helpers'
import { useRouter } from 'next/router';
import { ColorSchemeSwitcher } from './ColorSchemeSwitcher'

const navLinks: Array<{ label: string; url: string }> = [
    { label: 'Documentation', url: '/docs' },
    { label: 'Blog', url: '/blog' },
    // NOTE until we have a proper example overview page and multiple examples, link directly to Next.js example
    { label: 'Examples', url: '/examples/nextjs' },
  ]
  
  const iconLinks: Array<{ label: string; icon: IconName; url: string }> = [
    { label: 'Github', icon: 'github', url: 'https://github.com/contentlayerdev/contentlayer' },
    { label: 'Discord', icon: 'discord', url: 'https://discord.gg/rytFErsARm' },
  ]
  
  const NavLink: FC<{ label?: string; hideLabel?: boolean; icon?: IconName; url: string }> = ({
    label,
    hideLabel = false,
    icon,
    url,
  }) => {
    const router = useRouter()
    const active = router.pathname.split('/')[1] == url.replace('/', '')
  
    return (
      <Link  legacyBehavior href={url}>
        <a
          className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
            active
              ? 'bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50'
              : 'text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200'
          }`}
          // target={isExternalUrl(url) ? '_blank' : undefined}
          rel={isExternalUrl(url) ? 'noreferrer' : undefined}
        >
          {icon && (
            <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
              <Icon name={icon} />
            </span>
          )}
          {label && <span className={hideLabel ? 'sr-only' : ''}>{label}</span>}
        </a>
      </Link>
    )
  }

export const MainNavigation = () => {
  return (
    <header className="fixed z-50 w-full border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur backdrop-filter dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link href="/">
            <div className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">
            <Logo />
              <span className="-mt-0.5">Next Blog</span>
            </div>
          </Link>
        </div>
        <nav className="hidden items-center divide-x divide-gray-200 dark:divide-gray-800 lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            {navLinks.map(({ label, url }, index) => (
              <NavLink key={index} label={label} url={url} icon={isExternalUrl(url) ? 'external-link' : undefined} />
            ))}
            <div className="px-3">
              {/* <SearchButton /> */}
            </div>
          </div>
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
            <ColorSchemeSwitcher />
            {iconLinks.map(({ label, icon, url }, index) => (
              <NavLink key={index} label={label} hideLabel url={url} icon={icon} />
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
