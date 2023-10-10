import globalConfig from '@/config.json'

const configTrafficManagement = globalConfig.TrafficManagement
const configCaching = configTrafficManagement.Caching
const configInvalidateCache = configCaching.InvalidateCache

const InvalidateCache = ({ gotoCaching, gotoTraficManagement }: { gotoCaching: (() => any), gotoTraficManagement: (() => any) }) => {
    return (
        <div>
            {/* Header */}
            <nav className="w-full rounded-md">
                <ol className="list-reset flex">
                    <li>
                        <a
                            href="#"
                            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >{configTrafficManagement.name}</a
                        >
                    </li>
                    <li>
                        <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                        >{configCaching.name}</a
                        >
                    </li>
                    <li>
                        <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
                    </li>
                    <li className="text-neutral-500 dark:text-neutral-400">{configInvalidateCache.name}</li>
                </ol>
            </nav>

            <div className='flex flex-col'>
                <div className='h-1/3'>
                    <div className='text-xl'>
                        Policy metadata   
                    </div>
                    <InputWithLabel label=""/>
                </div>
                <div className='h-1/3'>
                    Hello 2
                </div>
                <div className='h-1/3'>
                    Hello 3
                </div>
            </div>
        </div>
    )
}

export default InvalidateCache;
