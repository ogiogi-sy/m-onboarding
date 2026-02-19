"use client";

import { Toaster as Sonner, ToasterProps } from "sonner@2.0.3";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="top-center"
      toastOptions={{
        style: {
          background: '#FFFFFF',
          color: '#1A2942',
          border: '1px solid #E0E7EF',
          borderRadius: '16px',
          padding: '16px',
          fontSize: '14px',
          fontWeight: '500',
          boxShadow: '0px 8px 24px rgba(1, 43, 114, 0.12)',
        },
        className: 'toast',
      }}
      style={{
        zIndex: 9999,
      }}
      {...props}
    />
  );
};

export { Toaster };