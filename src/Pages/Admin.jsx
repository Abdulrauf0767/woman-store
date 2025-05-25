import React, { useEffect, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { dataFetch } from '../Features/CardDataSlice';
import { DummyUser } from '../../public/DummyUser';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Button } from '@mui/material';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDispatch, useSelector } from 'react-redux';
import TransactionCard from '../Components/TransactionCard';

const Admin = () => {
  const [products, setProducts] = useState(false);
  const [selectedTransactions, setSelectedTransactions] = useState([]);
  const productData = useSelector((state) => state.cardData.list);
  const status = useSelector((state) => state.cardData.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(dataFetch());
    }
  }, [dispatch, status]);

  const handleSelectTransaction = (id) => {
    setSelectedTransactions(prev =>
      prev.includes(id)
        ? prev.filter(transactionId => transactionId !== id)
        : [...prev, id]
    );
  };

  const handleProducts = () => {
    setProducts(!products);
  };

  const cardData = [
    {
      title: 'Total Sales',
      count: 300,
      icon: AutoAwesomeMosaicIcon,
    },
    {
      title: 'Completed Orders',
      count: 200,
      icon: AssignmentTurnedInIcon,
    },
    {
      title: 'Pending Orders',
      count: 100,
      icon: WorkHistoryIcon,
    }
  ];

  const salesData = [
    { name: 'Jan', sales: 400 },
    { name: 'Feb', sales: 800 },
    { name: 'Mar', sales: 650 },
    { name: 'Apr', sales: 900 },
    { name: 'May', sales: 700 },
    { name: 'Jun', sales: 1000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">Logo</h1>
            <button className="w-10 h-10 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-full flex items-center justify-center">
              <MenuOpenRoundedIcon />
            </button>
          </div>

          <form className="w-1/3">
            <div className="relative">
              <input
                type="search"
                className="w-full py-2 pl-10 pr-4 bg-blue-50 rounded-full outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Search here.."
              />
              <SearchRoundedIcon className="absolute left-3 top-2.5 text-gray-500" />
            </div>
          </form>

          <div className="flex items-center space-x-4">
            <IconButton className="bg-blue-50 text-blue-600 hover:bg-blue-100">
              <LightModeIcon />
            </IconButton>
            <IconButton className="bg-blue-50 text-blue-600 hover:bg-blue-100">
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton className="bg-blue-50 text-blue-600 hover:bg-blue-100">
              <MarkunreadOutlinedIcon />
            </IconButton>
            <IconButton className="bg-blue-50 text-blue-600 hover:bg-blue-100">
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton className="bg-blue-50 text-blue-600 hover:bg-blue-100">
              <AccountCircleOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 flex">
        {/* Sidebar */}
        <div className="w-64 bg-white rounded-lg shadow-sm p-4 mr-6">
          <div className="space-y-2">
            {[
              { icon: AppsOutlinedIcon, text: 'Dashboard' },
              { icon: LockOutlinedIcon, text: 'Authentication' },
              { icon: AccountCircleOutlinedIcon, text: 'Users' },
              { icon: CategoryIcon, text: 'Products' },
              { icon: ShoppingCartOutlinedIcon, text: 'Orders' },
              { icon: MarkunreadOutlinedIcon, text: 'Messages' },
              { icon: NotificationsOutlinedIcon, text: 'Notifications' },
              { icon: SettingsIcon, text: 'Settings' },
              { icon: ExitToAppIcon, text: 'Logout' },
            ].map((item, index) => (
              <div key={index}>
                <div
                  className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors ${
                    item.text === 'Products' && products ? 'bg-gray-100' : ''
                  }`}
                  onClick={item.text === 'Products' ? handleProducts : undefined}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="text-gray-600" />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                  {item.text === 'Products' && (
                    <ArrowForwardIosOutlinedIcon
                      className={`text-gray-500 text-sm transition-transform duration-200 ${
                        products ? 'rotate-90' : ''
                      }`}
                    />
                  )}
                </div>
                  
                {item.text === 'Products' && products && (
                  <div className="pl-12 space-y-2 mt-2">
                    <Button fullWidth variant="outlined" size="small">
                      All Products
                    </Button>
                    <Button fullWidth variant="outlined" size="small">
                      Add Products
                    </Button>
                    <Button fullWidth variant="outlined" size="small">
                      Delete Products
                    </Button>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {cardData.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardActionArea>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <Typography variant="h6" className="text-gray-500">
                          {item.title}
                        </Typography>
                        <Typography variant="h4" className="font-bold">
                          {item.count}
                        </Typography>
                      </div>
                      <div className="p-3 bg-blue-100 rounded-full">
                        <item.icon className="text-blue-600 text-2xl" />
                      </div>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </div>

          {/* Sales Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Sales Analysis</h2>
              <Button variant="outlined" size="small">View Report</Button>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">Last Transactions</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  />
                  <SearchRoundedIcon className="absolute left-3 top-2.5 text-gray-500" />
                </div>
                <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                  <FilterListIcon />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {productData.map((item) => (
                <TransactionCard
                  key={item.id}
                  item={item}
                  isSelected={selectedTransactions.includes(item.id)}
                  onSelect={() => handleSelectTransaction(item.id)}
                />
              ))}
            </div>

            {selectedTransactions.length > 0 && (
              <div className="mt-4 flex justify-end space-x-3">
                <Button variant="outlined" color="error">
                  Delete Selected
                </Button>
                <Button variant="contained" color="primary">
                  Process Selected
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;