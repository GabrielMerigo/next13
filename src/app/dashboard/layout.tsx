type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <h1>Dashboard Layout</h1>
      {children}
    </>
  );
}
