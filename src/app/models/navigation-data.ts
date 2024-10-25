export type coinRequest ={
  startDate?:string;
  endDate?:string;
  currency?:string
}

export type coinResponse ={
  minValue?:Number;
  maxValue?:Number;
  currency?:string
}
