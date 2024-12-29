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
    <span>
            <div className='whitespace - nowrap flex items - center gap - x - 1'>
                <i className='fas fa - copyright' />
                <span> 2024{"    "}©{"    "}Nanke Information (HongKong) Network Technology Limited{"    "}All{"    "}Rights{"    "}Reserved</span>
            </div>
            <a
                href='https://smartpages.nankoyo.com/'
                className='underline font - semibold dark:text - gray - 300 '>
                Smartpages
            </a>
            |{"    "}
            <a
                href='https://vallengine.com/'
                className='underline font - semibold dark:text - gray - 300 '>
                Vallengine
            </a>
            |{"    "}
            <a
                href='https://www.nankoyo.com/'
                className='underline font - semibold dark:text - gray - 300 '>
                南科技术
            </a>
            |{"    "}
            <a
                href='https://www.stwl.us.kg/'
                className='underline font - semibold dark:text - gray - 300 '>
                晓婷网络
            </a>
            <span>提供云计算服务</span>{"    "}
            <div id='cdnNode' ></div> 
            <div id='visitorCountry' ></div>
            <div id='httpAccessInfo' ></div>
            <div id='httpEncryption' ></div>
            <div id='sni' ></div>
            <div id='userIP' ></div>
            <div id='userAgent' ></div>
            <div id='keyExchange' ></div>
            <div id='flInfo' ></div>
            <div id='hInfo' ></div>
            <div id='hitokoto' ></div>
        </span>
  )
}
