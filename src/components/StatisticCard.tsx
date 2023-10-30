interface Props {
    title: string;
    statistic: number;
    style: {
        background: string;
    };
    icon: React.ReactNode;
};

const StatisticCard: React.FC<Props> = ({ title, statistic, style, icon }) => {
    return (
        <div className='relative'>
            <div className='bg-white p-5 h-[10vh] rounded-2xl flex flex-row justify-end shadow-lg'>
                <div className='flex flex-col justify-center'>
                    <p className='text-gray-400 text-md'>{title}</p>
                    <p className='text-gray-700 text-xl font-bold flex justify-end'>{statistic}</p>
                </div>
            </div>
            <div className='absolute top-[-15px] left-5'>
                <div style={style} className='h-[9vh] w-[9vh] rounded-2xl p-5'>
                    {icon}
                </div>
            </div>
        </div>
    );
};

export default StatisticCard;
