type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <h1>Auth Sign IN</h1>
      {children}
    </>
  );
}
