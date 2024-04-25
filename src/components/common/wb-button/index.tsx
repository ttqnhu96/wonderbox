import { Button, ButtonProps, CircularProgress } from '@mui/material';

export interface WBButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export const WBButton = ({
  isLoading,
  size = 'medium',
  ...buttonProps
}: WBButtonProps) => {
  return (
    <Button
      {...buttonProps}
      disabled={isLoading}
      endIcon={
        isLoading ? <CircularProgress color="inherit" size={18} /> : null
      }
    />
  );
};
