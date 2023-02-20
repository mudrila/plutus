import { Box } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';
import { Header } from '@/components';

export interface IPageTemplate {
  title: string;
  children: ReactNode;
}

export default function PageTemplate({ title, children }: IPageTemplate) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Web application for managing personal finances."
        />
      </Head>
      <Header />
      <Box
        component="main"
        paddingTop={8}
        minHeight="100vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Box>
    </>
  );
}
