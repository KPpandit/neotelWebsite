import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Button, CircularProgress, Box, IconButton, Divider } from '@mui/material';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PrepaidPlans = ({ onPlanSelect, disabled }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedPack, setSelectedPack] = useState(null); // State to store selected plan

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://bssproxy01.neotel.nr/abmf-prepaid/api/prepaid/packs?pack_status=APPROVED');
        setPlans(response.data);
      } catch (err) {
        setError('Failed to fetch plans.');
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  // Custom arrow components for the carousel
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          right: -40,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#F6B625',
          color: '#253A7D',
          '&:hover': {
            backgroundColor: '#e0a720',
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: 'absolute',
          left: -40,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: '#F6B625',
          color: '#253A7D',
          '&:hover': {
            backgroundColor: '#e0a720',
          },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
    );
  };

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ padding: 3, position: 'relative', paddingTop: 10 }}>
      <Typography align="center" sx={{ color: '#253A7D', fontWeight: 'bold', mb: 3, fontSize: '28px' }}>
        Discover Our Best Bundles
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Typography color="error" align="center">
          {error}
        </Typography>
      )}

      {/* Plan Selection Slider */}
      <Slider {...settings}>
        {plans.map((plan) => (
          <Box key={plan.pack_id} sx={{ padding: 3 }}>
            <Card
              sx={{
                height: '90%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 3,
                borderRadius: 2,
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                backgroundColor: '#A1B5BD',
              }}
            >
              <CardContent>
                {/* Plan Name */}
                <Typography variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#253A7D' }}>
                  {plan.pack_name}
                </Typography>

                {/* Price & Validity Inside Circle */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    backgroundColor: '#E0E0E0',
                    margin: '20px auto',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'brown' }}>
                    ${plan.pack_price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black' }}>
                    For {plan.validity} Days
                  </Typography>
                </Box>
              </CardContent>

              {/* Select Button */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    onPlanSelect(plan);
                    setSelectedPack(plan); // Update selected pack
                  }}
                  disabled={disabled}
                  sx={{
                    backgroundColor: disabled ? '#ccc' : '#F6B625',
                    color: '#253A7D',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: disabled ? '#ccc' : '#e0a720',
                    },
                  }}
                >
                  Select
                </Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Slider>

      {/* Show line and amount details only if a pack is selected */}
      {selectedPack && (
        <Box sx={{ mt: 3 ,pt:3}}>
          <Typography sx={{fontSize:'24px',textAlign:'center'}}>Order Summary</Typography>
          <Divider sx={{ my: 4, backgroundColor: 'black', height: 3 }} />


          {/* Amount Details Row */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black' }}>
              Total
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black' }}>
              ${selectedPack.pack_price} AUD
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PrepaidPlans;
