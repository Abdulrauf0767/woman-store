import { Card, CardContent, Typography, Avatar, Box, Checkbox } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const TransactionCard = ({ item, isSelected, onSelect }) => {
  return (
    <Card sx={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'space-between', 
      p: 2,
      alignItems: 'center',
      backgroundColor: isSelected ? '#f0f7ff' : 'white',
      borderLeft: isSelected ? '4px solid #3b82f6' : 'none'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Checkbox 
          checked={isSelected}
          onChange={onSelect}
          color="primary"
        />
        <div className='w-[7%] h-[90%] border border-gray-200 rounded-lg p-2 '>
        <Avatar src={item.image} alt={item.title} className='!w-[90%] !h-[90%]' />
        </div>
        <Box>
          <Typography variant="subtitle1" fontWeight="medium">{item.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.category}
          </Typography>
        </Box>
      </Box>
      <Typography variant="h6" color="primary" fontWeight="bold">
        ${item.price}
      </Typography>
    </Card>
  );
};

export default TransactionCard;