import React from "react";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import {Avatar} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);
interface LogoImageProps{
  imageurl: string;
 
}

export const LogoImage:React.FC<LogoImageProps> = (props)=>{
    const classes = useStyles();
    const {imageurl} = props;

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp"  src={imageurl} />
     
    </div>
  );
}