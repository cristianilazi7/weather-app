import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  value: string;
};

const Card = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 120px;
  flex: 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
`;

const InfoCard = ({ icon, label, value }: Props) => {
  return (
    <Card>
      {icon}
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="h6">{value}</Typography>
    </Card>
  );
};

export default InfoCard;
