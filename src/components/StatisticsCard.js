import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function StatisticsCard({ data, illustration, bgColor }) {
  return (
    <Card
      sx={{ maxWidth: 280, position: "relative", backgroundColor: bgColor }}
    >
      <CardActionArea>
        <CardContent>
          <Box sx={{ color: "#fff" }}>
            {data?.map((item, idx) => (
              <Box key={idx}>
                <Typography gutterBottom variant="p" component="div">
                  {item?.label}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ marginBottom: "10px" }}
                  fontWeight={600}
                >
                  {item?.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default StatisticsCard;
