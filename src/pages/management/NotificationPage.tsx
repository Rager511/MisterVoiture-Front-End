import React from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';

const NotificationPage: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  console.log(searchValue);

  const mockData = [
    {
      id: 324,
      status: 'Accepted',
      time: '10/30/2023 1:39PM',
      user: 'Imad Maailil',
    },
    {
      id: 234,
      status: 'Accepted',
      time: '12/11/2022 6:29PM',
      user: 'Houssam Bajaj',
    },
    {
      id: 121,
      status: 'Rejected',
      time: '10/30/2023 6:39PM',
      user: 'Imad Maailil',
    },
    {
      id: 742,
      status: 'Accepted',
      time: '03/22/2021 3:39PM',
      user: 'Imad Maailil',
    },
    {
      id: 867,
      status: 'Cancelled',
      time: '01/01/2021 2:25PM',
      user: 'Imad Maailil',
    },
    {
      id: 598,
      status: 'Accepted',
      time: '04/03/2020 5:59PM',
      user: 'Hamza Lghali',
    },
    {
      id: 923,
      status: 'Accepted',
      time: '12/05/2022 9:42AM',
      user: 'Hamza Lghali',
    },
    {
      id: 433,
      status: 'Rejected',
      time: '08/11/2019 3:15PM',
      user: 'John Doe',
    },
    {
      id: 867,
      status: 'Cancelled',
      time: '01/01/2021 2:25PM',
      user: 'Imad Maailil',
    },
    {
      id: 234,
      status: 'Accepted',
      time: '12/11/2022 6:29PM',
      user: 'Houssam Bajaj',
    },
  ];

  return (
    <div className='flex p-5'>
      <SideBar />
      <div style={{ width: "calc(100vw - 23.5rem)" }} className='ml-auto'>
        <TopBar title="Notifications" />
        <div className='mt-[6.3rem] space-y-5'>
          <SearchBar onSearch={handleSearch} />
          <div className='bg-white p-5 h-auto rounded-2xl flex flex-col justify-center shadow-lg'>
            <div className="relative overflow-x-auto flex justify-center">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-400">
                  <tr className='border-b'>
                    <th scope="col" className="px-6 py-3">
                      Request ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                      User
                    </th>
                  </tr>
                </thead>
                <tbody className='text-gray-900'>
                  {mockData.map((row, index) => (
                    <tr className={`${index !== mockData.length - 1 && "border-b"}`} key={index}>
                      <th scope="row" className="px-6 py-4">
                        {row.id}
                      </th>
                      <td className={`px-6 py-4 text-${row.status === "Accepted" ? "green" : (row.status === "Rejected" || row.status === "Cancelled") && "red"}-500`}>{row.status}</td>
                      <td className="px-6 py-4">{row.time}</td>
                      <td className="px-6 py-4 font-bold">{row.user}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
        <div className='flex justify-between mt-5'>
          <span>© 2023, made by Imad Maailil for a better world.</span>
          <div className='flex space-x-5'>
            <span>About Us</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
