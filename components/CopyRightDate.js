import { siteConfig } from '@/lib/config'

/**
 * 网站版权日期
 * 示例： 2021-2024
 * @returns
 */
export default function CopyRightDate() {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <span className='whitespace-nowrap flex items-center gap-x-1'>
      <i className='fas fa-copyright' />2024{' '}NanKoYo丨
          由{' '}
          <a
            href='https://smartpages.nankoyo.com/'
            className='underline font-bold dark:text-gray-300 '>
            SmartPages {siteConfig('VERSION')}
          </a>{' '}
          丨
          <a
            href='https://vallengine.com/'
            className='underline font-bold dark:text-gray-300 '>
            Vallengine
          </a>{' '}
          丨
          <a
            href='https://www.nankoyo.com/'
            className='underline font-bold dark:text-gray-300 '>
            南科技术
          </a>{' '}
          丨
          <a
            href='https://www.stwl.us.kg/'
            className='underline font-bold dark:text-gray-300 '>
            晓婷网络
          </a>{' '}
          提供云计算服务
          </div>
          <br />
          <div
  className="mx-1 animate-pulse "
  id="cdn"
/>
<div        
className="mx - 1 animate - pulse "
id="hitokoto"
/>
    </span>
  )
}
