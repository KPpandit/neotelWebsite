import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Rating,
} from "@mui/material";

const locations = [
  {
    name: "Location 1",
    lat: 37.7749,
    lng: -122.4194,
    address1: "123 Market St",
    address2: "San Francisco, CA 94103",
    timings: " 9am - 5pm",
    rating: 4.5,
    phone: "(123) 456-7890",
  },
  {
    name: "Location 2",
    lat: 34.0522,
    lng: -118.2437,
    address1: "456 Sunset Blvd",
    address2: "Los Angeles, CA 90028",
    timings: " 10am - 6pm",
    rating: 4.7,
    phone: "(987) 654-3210",
  },
  {
    name: "Location 3",
    lat: 40.7128,
    lng: -74.0060,
    address1: "789 Broadway",
    address2: "New York, NY 10003",
    timings: " 8am - 4pm",
    rating: 4.3,
    phone: "(555) 123-4567",
  },
];

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const StoreLocator = () => {
  const [selectedLocation, setSelectedLocation] = useState(center);

  const handleListItemClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Box display="flex" alignItems="stretch" sx={{ height: "100vh", paddingTop: 16 }}>
      <Box sx={{ width: "30%", backgroundColor: "#f5f5f5", overflowY: "auto", height: "400px" }}>
        <List>
          {locations.map((location, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleListItemClick(location)}
              sx={{
                "&:hover": {
                  backgroundColor: "grey",
                },
              }}
            >
              <ListItemText
                secondary={
                  <Card sx={{ maxWidth: 400, "&:hover": { color: "#233A7E" } }}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "500" }}>
                          {location.name}
                        </Typography>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography variant="body2" component="p">
                              {location.address1}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body2" component="p">
                              {location.address2}
                            </Typography>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="body2" component="p" sx={{ fontWeight: "500" }}>
                              Mon - Fri:
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <Typography variant="body2" component="p">
                              {location.timings}
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Box display="flex" alignItems="center">
                              <Typography variant="body2" component="p" sx={{ marginRight: 1 }}>
                                Rating:
                              </Typography>
                              <Rating value={location.rating} precision={0.5} readOnly />
                            </Box>
                          </Grid>
                          <Grid item xs={3}>
                            <Typography variant="body2" component="p" sx={{ fontWeight: "500" }}>
                              Phone:
                            </Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <Typography variant="body2" component="p">
                              {location.phone}
                            </Typography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ flex: 1 }}>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63834.382750347664!2d${selectedLocation.lng}!3d${selectedLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f7d1c1f1de45b4d%3A0x59d99df4c5d40a81!2sNauru!5e0!3m2!1sen!2sin!4v1719988650132!5m2!1sen!2sin`}
          width="100%"
          height="400px" // Ensure the map height matches the list height
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default StoreLocator;
