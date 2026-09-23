export interface NavProps extends React.ComponentProps<"nav"> {
  navname: string;
}
export const NavItem = ({ navname, onClick }: NavProps) => {
  return (
    <>
      <nav className="navItem">
        <div className="nav-content" onClick={onClick}>
          {navname}
          <a></a>
        </div>
      </nav>
    </>
  );
};
