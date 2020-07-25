import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <div className="app__stats">
      <Card>
        <CardContent>
          <Typography color="textSecondary">{title}</Typography>

          <h2 className="infoBox__cases">{cases}</h2>

          <Typography color="textSecondary">{total}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
