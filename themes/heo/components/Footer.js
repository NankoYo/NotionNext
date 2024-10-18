import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear
  const [cdnData, setCdnData] = useState({})
    
   useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://blog.nankoyo.com/cdn-cgi/trace")
        if (response.ok) {
          const data = await response.text()
          const lines = data.split("\n")
          let dataObj = {}
          lines.forEach(line => {
            if (line) {
              const parts = line.split("=")
              dataObj[parts[0]] = parts[1]
            }
          })
          setCdnData(dataObj)
        }
      } catch (error) {
        console.error("获取数据出错:", error)
      }
    })()
  }, [])

  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white  dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 */}
      <div
        id='footer-bottom'
        className='w-full h-20 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-[#f1f3f7] dark:bg-[#21232A] border-t dark:border-t-[#3D3D3F]'>
        <div id='footer-bottom-left'>
          <a
            href='https://vallengine.com/'
            className='underline font-bold dark:text-gray-300 '>
            Vallengine
          </a>{' '}
          <i className='fas fa-copyright' />{' '}
          {`${copyrightDate}`} <i className='mx-1 animate-pulse fas fa-heart' />{' '}
          <a
            href='https://smartpages.nankoyo.com/'
            className='underline font-bold dark:text-gray-300 '>
            SmartPages {siteConfig('VERSION')}
          </a>
          .
          </div>
          <br />
          <div
          className="mx - 1 animate - pulse "
          id="hitokoto"
        >
          {cdnData.loc && (
            <a
              className='underline font - bold dark:text - gray - 300 '
            >
              CDN节点: {cdnData.loc}
            </a>
          )}
          {cdnData.colo && (
            <a
              className='underline font - bold dark:text - gray - 300 '
            >
              访客国别: {cdnData.colo}
            </a>
          )}
          {cdnData.http && (
            <a
              className='underline font - bold dark:text - gray - 300 '
            >
              加密方式: {cdnData.http}
            </a>
          )}
          {cdnData['cf - ray'] && (
            <a
              className='underline font - bold dark:text - gray - 300 '
            >
              回源节点: 172.70.
              {cdnData['cf - ray'].split('-')[1]}.
              {cdnData['cf - ray'].split('-')[2]}
              (美国CloudFlare节点)
            </a>
          )}
          {cdnData.ip && (
            <a
              className='underline font - bold dark:text - gray - 300 '
            >
              本机IP: {cdnData.ip}
            </a>
          )}
          {cdnData.gzip && (
            <a
              className='underline font - bold dark:text - gray - 300 '
            >
              压缩方式: {cdnData.gzip === 'on'? '启用' : '未启用'}
            </a>
          )}
        </div>
        

        <div id='footer-bottom-right'>
          {siteConfig('BEI_AN') && (
            <>
              <i className='fas fa-shield-alt' />{' '}
              <a href='https://beian.miit.gov.cn/' className='mr-2'>
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}

          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye' />
            <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users' />{' '}
            <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
          </span>

          {/* <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>{title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}</h1> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
