let a=0;
for (i=100;i>=0;i--)
{
a=a**0.5+i;
}
console.log('S1 là:',a);

//BT2
for (i=1;i<=10000;i++)
{
  if (i**0.5%1==0) 
  {
    console.log('Các số chính phương là:',i);
  }
}