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
    <div className='whitespace-nowrap flex items-center gap-x-1'>
      <i className='fas fa-copyright' />
      <div>2024{' '}NanKoYo丨</div>
      <div
        href='https://vallengine.com/'
        className='underline font-semibold dark:text-gray-300 '>
        Vallengine
      </div>
          丨
      <div
            href='https://www.nankoyo.com/'
            className='underline font-semibold dark:text-gray-300 '>
            南科技术
      </div>
          丨
          <div
            href='https://www.stwl.us.kg/'
            className='underline font-semibold dark:text-gray-300 '>
            晓婷网络
         </div>
          提供云计算服务
          <div
            id='cdn' className='underline font-semibold dark:text-gray-300 '>
          <div id='hitokoto' className='underline font-semibold dark:text-gray-300 '>
    </div>
  )
}
